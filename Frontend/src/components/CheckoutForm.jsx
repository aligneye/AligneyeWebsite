import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { supabase } from "../supabaseClient";

const CheckoutForm = () => {
  const { user } = useAuth();
  const { state } = useLocation();
  const navigate = useNavigate();

  const [cartData, setCartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: user?.email || "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    country: "India",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!user) {
      navigate("/auth");
      return;
    }

    const restoreCart = async () => {
      if (state?.items && state?.totalPrice) {
        setCartData(state);
        setFormData((prev) => ({ ...prev, email: user.email }));
      } else {
        const saved = sessionStorage.getItem("cartData");
        if (saved) {
          const parsed = JSON.parse(saved);
          setCartData(parsed);
          setFormData((prev) => ({ ...prev, email: user.email }));
          sessionStorage.removeItem("cartData");
        } else {
          navigate("/", { replace: true });
        }
      }
      setLoading(false);
    };

    restoreCart();
  }, [user, state, navigate]);

  if (loading || !cartData) {
    return (
      <div className="p-6 text-center text-gray-600">Loading checkout...</div>
    );
  }

  const { items, totalPrice } = cartData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required.";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Enter a valid 10-digit number.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid.";
    if (!formData.address.trim()) newErrors.address = "Address is required.";
    if (!formData.city.trim()) newErrors.city = "City is required.";
    if (!formData.state.trim()) newErrors.state = "State is required.";
    if (!formData.pincode.trim()) newErrors.pincode = "Pincode is required.";
    else if (!/^\d{6}$/.test(formData.pincode))
      newErrors.pincode = "Pincode must be 6 digits.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePayNow = async () => {
    if (!validate()) return;
    setSubmitting(true);

    try {
      const amountInPaise = Math.round(totalPrice * 100);

      // 1. Ensure user is authenticated
      const {
        data: { session },
        error: authError,
      } = await supabase.auth.getSession();
      if (authError || !session) {
        navigate("/login");
        return;
      }

      // 2. Wait for Razorpay SDK to load
      const Razorpay = await new Promise((resolve) => {
        const check = () => {
          if (window.Razorpay) {
            resolve(window.Razorpay);
          } else {
            setTimeout(check, 50);
          }
        };
        check();
      });

      if (!Razorpay) {
        alert(
          "Failed to load payment gateway. Check your internet connection."
        );
        return;
      }

      // 3. Call Edge Function
      const res = await fetch(
        "https://mxkljutbirdsixvgbapv.supabase.co/functions/v1/test",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session?.access_token}`,
          },
          body: JSON.stringify({ amount: amountInPaise }),
        }
      );
      const razorpayOrder = await res.json();

      // 4. Save order in Supabase
      const shippingAddress = {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        address: formData.address,
        city: formData.city,
        state: formData.state,
        pincode: formData.pincode,
        country: formData.country,
      };

      const { data: orderData, error: dbError } = await supabase
        .from("orderdetails")
        .insert([
          {
            user_id: user.id,
            total_amount: totalPrice,
            shipping_address: shippingAddress,
            items: items,
            payment_method: "Razorpay",
            payment_status: "unpaid",
            order_status: "pending",
          },
        ])
        .select("id")
        .single();

      if (dbError) throw dbError;
      const orderId = orderData.id;

      // 5. Open Razorpay
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: amountInPaise,
        currency: "INR",
        name: "Aligneye Vision Private Limited",
        description: `Payment for order ${orderId}`,
        order_id: razorpayOrder.id,
        handler: async (res) => {
          await supabase
            .from("orderdetails")
            .update({
              payment_status: "paid",
              order_status: "confirmed",
            })
            .eq("id", orderId);
          navigate("/success", {
            state: {
              paymentId: res.razorpay_payment_id,
              orderId: res.razorpay_order_id,
              signature: res.razorpay_signature,
              total: totalPrice,
            },
          });
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        theme: { color: "#008080" },
        modal: { escape: false, backdropclose: false },
      };

      const rzp = new Razorpay(options);
      rzp.open();

      rzp.on("payment.failed", async (res) => {
        await supabase
          .from("orderdetails")
          .update({
            payment_status: "failed",
            order_status: "failed",
          })
          .eq("id", orderId);
        navigate("/failure", {
          state: { message: res.error.description || "Payment failed" },
        });
      });
    } catch (err) {
      console.error("Checkout error:", err);
      alert(err.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-10 mt-15">
      {/* Responsive container */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Shipping Form */}
        <div className="flex-1 bg-gray-50 p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200">
          <h2 className="text-lg sm:text-xl font-semibold mb-6 text-gray-800">
            Shipping Details
          </h2>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`mt-2 block w-full border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded-xl shadow-sm py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone *
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. 9876543210"
                className={`mt-2 block w-full border ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } rounded-xl shadow-sm py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition`}
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                disabled
                className="mt-2 block w-full border border-gray-300 rounded-xl shadow-sm py-2 px-4 bg-gray-100 text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Address *
              </label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows="3"
                className={`mt-2 block w-full border ${
                  errors.address ? "border-red-500" : "border-gray-300"
                } rounded-xl shadow-sm py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition`}
              />
              {errors.address && (
                <p className="text-red-500 text-xs mt-1">{errors.address}</p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  City *
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={`mt-2 block w-full border ${
                    errors.city ? "border-red-500" : "border-gray-300"
                  } rounded-xl shadow-sm py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition`}
                />
                {errors.city && (
                  <p className="text-red-500 text-xs mt-1">{errors.city}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  State *
                </label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className={`mt-2 block w-full border ${
                    errors.state ? "border-red-500" : "border-gray-300"
                  } rounded-xl shadow-sm py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition`}
                />
                {errors.state && (
                  <p className="text-red-500 text-xs mt-1">{errors.state}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Pincode *
                </label>
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  className={`mt-2 block w-full border ${
                    errors.pincode ? "border-red-500" : "border-gray-300"
                  } rounded-xl shadow-sm py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition`}
                />
                {errors.pincode && (
                  <p className="text-red-500 text-xs mt-1">{errors.pincode}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Country
                </label>
                <input
                  type="text"
                  value={formData.country}
                  disabled
                  className="mt-2 block w-full border border-gray-300 rounded-xl shadow-sm py-2 px-4 bg-gray-100 text-sm"
                />
              </div>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="flex-1 bg-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-200 flex flex-col">
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-6 text-gray-800">
              Order Summary
            </h2>
            <div className="space-y-3 max-h-60 overflow-y-auto">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between text-sm sm:text-base text-gray-700 font-medium"
                >
                  <span>
                    {item.name} × {item.quantity}
                  </span>
                  <span>₹{(item.price * item.quantity).toLocaleString()}</span>
                </div>
              ))}
            </div>
            <hr className="my-5 border-gray-300" />
            <div className="flex justify-between font-bold text-base sm:text-lg text-gray-900">
              <span>Total:</span>
              <span>₹{totalPrice.toLocaleString()}</span>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <button
              onClick={handlePayNow}
              disabled={submitting}
              className={`w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 rounded-xl hover:cursor-pointer shadow-md transition ${
                submitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {submitting ? "Processing..." : "Pay Now"}
            </button>

            <button
              onClick={() => navigate(-1)}
              className="w-full hover:cursor-pointer text-center text-gray-500 underline text-sm hover:text-gray-700 transition"
            >
              ← Back to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
