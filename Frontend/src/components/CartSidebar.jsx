import React from "react";
import { X } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartSidebar = ({ isOpen, onClose }) => {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();
  const navigate = useNavigate();

  const handleCheckout = async () => {
    if (items.length === 0) return;

    try {
      // Create order on backend
      const res = await fetch("http://localhost:4000/api/v1/payment/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: totalPrice }), // backend multiplies to paise
      });

      const data = await res.json();
      const order = data.data;

      if (!order?.id) {
        alert("Failed to create Razorpay order");
        return;
      }

      // Razorpay options
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "Aligneye",
        description: "Order Payment",
        order_id: order.id,
        handler: function (response) {
          navigate("/success", {
            state: {
              paymentId: response.razorpay_payment_id,
              orderId: response.razorpay_order_id,
              signature: response.razorpay_signature,
            },
          });
        },
        prefill: {
          name: "Customer Name",
          email: "customer@example.com",
          contact: "9876543210",
        },
        theme: {
          color: "#0f766e", 
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error("Payment error:", err);
    }
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[90%] md:w-[420px] lg:w-[480px] bg-white shadow-2xl z-[90] transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
          <h2 className="text-base sm:text-lg font-semibold text-gray-800">
            Your Cart
          </h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100"
            aria-label="Close cart"
          >
            <X className="w-5 h-5 text-gray-600 hover:cursor-pointer" />
          </button>
        </div>

        {/* Items List */}
        <div className="p-4 space-y-3 sm:space-y-4 overflow-y-auto max-h-[calc(100vh-180px)]">
          {items.length === 0 ? (
            <p className="text-gray-500 text-sm sm:text-base text-center py-8">
              Your cart is empty.
            </p>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0 border rounded-lg p-3 shadow-sm bg-gray-50"
              >
                <div className="flex-1">
                  <h3 className="font-medium text-sm sm:text-base">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1">
                    ₹{item.price.toLocaleString()}
                  </p>
                  {/* Quantity Controls */}
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, Math.max(1, item.quantity - 1))
                      }
                      className="px-2 py-1 text-gray-600 hover:bg-gray-200 rounded"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="mx-3 text-sm sm:text-base">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 text-gray-600 hover:bg-gray-200 rounded"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700 self-start sm:self-center"
                  title="Remove item"
                >
                  <X className="w-5 h-5 hover:cursor-pointer" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 space-y-3">
          <div className="flex justify-between items-center font-medium text-sm sm:text-base">
            <span className="text-gray-700">Total:</span>
            <span className="text-gray-900">
              ₹{totalPrice.toLocaleString()}
            </span>
          </div>
          <button
            onClick={handleCheckout}
            disabled={items.length === 0}
            className={`w-full py-2.5 px-4 rounded-lg font-medium transition hover:cursor-pointer ${
              items.length === 0
                ? "bg-gray-300 cursor-not-allowed text-gray-500"
                : "bg-teal-600 hover:bg-teal-700 text-white"
            }`}
          >
            Checkout
          </button>
          <button
            onClick={onClose}
            className="w-full text-center text-sm text-gray-600 underline hover:cursor-pointer hover:text-gray-800"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
