import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import { CheckCircle, ShoppingBag } from "lucide-react";

const Success = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const orderId = state?.orderId || null;
  const paymentId = state?.paymentId || "N/A";
  const signature = state?.signature || "N/A";

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!orderId) {
      navigate("/", { replace: true });
      return;
    }

    const fetchOrder = async () => {
      try {
        const { data, error } = await supabase
          .from("orderdetails")
          .select("*")
          .eq("id", orderId)
          .single();

        if (error) throw error;
        setOrder(data);
      } catch (err) {
        console.error("Error fetching order:", err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderId, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-600">Loading your order details...</p>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <p className="text-red-500">Unable to fetch order details.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-lg w-full text-center">
        {/* Success Icon */}
        <div className="flex justify-center mb-4">
          <CheckCircle className="w-20 h-20 text-green-500" />
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
          Payment Successful!
        </h1>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase! Your order has been confirmed.
        </p>

        {/* Order Summary */}
        <div className="bg-gray-50 rounded-lg p-4 text-left mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Order Details
          </h2>
          <div className="space-y-1 text-sm text-gray-600">
            <p>
              <span className="font-medium">Order ID:</span> {order.id}
            </p>
            <p>
              <span className="font-medium">Total Paid:</span> ₹
              {Number(order.total_amount).toLocaleString()}
            </p>
            <p>
              <span className="font-medium">Payment Status:</span>{" "}
              {order.payment_status}
            </p>
            <p>
              <span className="font-medium">Order Status:</span>{" "}
              {order.order_status}
            </p>
          </div>

          <div className="mt-4">
            <h3 className="text-md font-semibold text-gray-800">Items</h3>
            <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
              {order.items?.map((item, idx) => (
                <li key={idx}>
                  {item.name} × {item.quantity} — ₹
                  {(item.price * item.quantity).toLocaleString()}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <h3 className="text-md font-semibold text-gray-800">Shipping</h3>
            <p className="text-sm text-gray-600 mt-1">
              {order.shipping_address?.name}, {order.shipping_address?.address},{" "}
              {order.shipping_address?.city}, {order.shipping_address?.state},{" "}
              {order.shipping_address?.pincode},{" "}
              {order.shipping_address?.country}
              <br />
              {order.shipping_address?.phone}
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => navigate("/")}
            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium px-5 py-3 rounded-lg shadow-md transition"
          >
            <ShoppingBag className="w-5 h-5" />
            Continue Shopping
          </button>
          <button
            onClick={() => navigate("/orders")}
            className="flex items-center justify-center gap-2 border border-gray-300 hover:border-gray-400 text-gray-700 font-medium px-5 py-3 rounded-lg shadow-sm transition"
          >
            View Orders
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
