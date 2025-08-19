import React from "react";
import { useLocation, Link } from "react-router-dom";

const Success = () => {
  const location = useLocation();
  const { paymentId, orderId } = location.state || {};

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold text-green-600">Payment Successful 🎉</h1>
      <p className="mt-4">Payment ID: {paymentId}</p>
      <p>Order ID: {orderId}</p>
      <Link
        to="/"
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default Success;
