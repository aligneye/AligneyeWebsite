import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import {
  FaBoxOpen,
  FaCheckCircle,
  FaTruck,
  FaTimesCircle,
  FaClock,
  FaDollarSign,
  FaCreditCard,
  FaHourglassHalf,
} from "react-icons/fa";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const Orders = () => {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session) {
          setUser(session.user);
        } else {
          setUser(null);
          navigate("/auth");
        }
      }
    );

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        setUser(session.user);
      } else {
        setUser(null);
        navigate("/auth");
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [navigate]);

  useEffect(() => {
    if (user) {
      fetchOrders();
    }
  }, [user]);

  const fetchOrders = async () => {
    setLoading(true);
    setMessage("");
    const { data, error } = await supabase
      .from("orderdetails")
      .select(
        `
        id,
        created_at,
        order_status,
        payment_status,
        total_amount,
        items
      `
      )
      .eq("user_id", user.id)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching orders:", error);
      setMessage("Could not fetch orders. Please try again.");
    } else {
      setOrders(data);
    }
    setLoading(false);
  };

  // Better status handling
  const getStatusIcon = (status) => {
    switch (status) {
      case "pending":
        return (
          <FaHourglassHalf className="text-yellow-400 text-xl sm:text-2xl" />
        );
      case "confirmed":
        return <FaCreditCard className="text-teal-400 text-xl sm:text-2xl" />;
      case "processing":
        return <FaClock className="text-orange-400 text-xl sm:text-2xl" />;
      case "shipped":
        return <FaTruck className="text-blue-400 text-xl sm:text-2xl" />;
      case "delivered":
        return <FaCheckCircle className="text-green-400 text-xl sm:text-2xl" />;
      case "cancelled":
        return <FaTimesCircle className="text-red-400 text-xl sm:text-2xl" />;
      default:
        return <FaBoxOpen className="text-gray-400 text-xl sm:text-2xl" />;
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-600/30 text-yellow-300";
      case "confirmed":
        return "bg-teal-600/30 text-teal-300";
      case "processing":
        return "bg-orange-600/30 text-orange-300";
      case "shipped":
        return "bg-blue-600/30 text-blue-300";
      case "delivered":
        return "bg-green-600/30 text-green-300";
      case "cancelled":
        return "bg-red-600/30 text-red-300";
      default:
        return "bg-gray-600/30 text-gray-300";
    }
  };

  const formatCurrency = (amount) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(amount);

  if (!user) return null;

  return (
    <div className="bg-black text-gray-100 py-6 sm:py-10 lg:py-12 min-h-screen">
      <div className="pt-15 sm:pt-15 lg:pt-10"></div>
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto max-w-screen-lg">
        <div className="bg-gray-800/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-xl border border-gray-700 p-5 sm:p-8 lg:p-10">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-teal-400 mb-6 text-center">
            My Orders
          </h1>

          {message && (
            <div
              className={`mb-6 p-3 sm:p-4 rounded-xl text-sm sm:text-base text-center font-medium ${
                message.includes("successfully")
                  ? "bg-green-600/20 text-green-300"
                  : "bg-red-600/20 text-red-300"
              }`}
            >
              {message}
            </div>
          )}

          {loading ? (
            <div className="flex flex-col items-center justify-center py-10 space-y-4">
              <FaBoxOpen className="animate-spin text-4xl sm:text-5xl text-gray-500" />
              <p className="text-gray-400 text-sm sm:text-base">
                Loading your orders...
              </p>
            </div>
          ) : orders.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 space-y-4">
              <FaBoxOpen className="text-4xl sm:text-5xl text-gray-500" />
              <p className="text-gray-400 text-sm sm:text-base">
                You haven't placed any orders yet.
              </p>
            </div>
          ) : (
            <div className="space-y-5 sm:space-y-6">
              {orders.map((order) => (
                <div
                  key={order.id}
                  className="bg-gray-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 transition-all duration-300 transform hover:scale-[1.01] hover:shadow-lg"
                >
                  {/* Order Header */}
                  {/* Order Header */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0 mb-4 border-b border-gray-600 pb-3">
                    <div className="flex items-center space-x-3">
                      {getStatusIcon(order.order_status)}
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold text-gray-200">
                          Order #{order.id}
                        </h2>
                        <p className="text-xs sm:text-sm text-gray-400">
                          {new Date(order.created_at).toLocaleDateString()} •{" "}
                          {new Date(order.created_at).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="text-xs sm:text-sm text-gray-400 mt-1">
                        Payment:{" "}
                        <span
                          className={
                            order.payment_status === "paid"
                              ? "text-green-400"
                              : "text-yellow-400"
                          }
                        >
                          {order.payment_status}
                        </span>
                      </p>
                      <p className="text-xs sm:text-sm text-gray-400 flex items-center justify-start sm:justify-end gap-1 mt-1">
                        <FaDollarSign className="text-gray-400" />
                        {formatCurrency(order.total_amount)}
                      </p>
                    </div>
                  </div>

                  {/* Order Progress Tracker */}
                  {/* Order Progress Tracker */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mt-4 mb-4">
                    {["pending", "confirmed", "shipped", "delivered"].map(
                      (step, index, arr) => {
                        const currentIndex = arr.indexOf(order.order_status);
                        const isCompleted = index <= currentIndex;

                        return (
                          <div
                            key={step}
                            className="flex sm:flex-1 flex-col items-center relative"
                          >
                            {/* Step Circle */}
                            <div
                              className={`w-8 h-8 flex items-center justify-center rounded-full border-2 transition-colors ${
                                isCompleted
                                  ? "bg-teal-500 border-teal-500 text-white"
                                  : "border-gray-500 text-gray-400 bg-gray-700"
                              }`}
                            >
                              {isCompleted ? (
                                <FaCheckCircle className="w-4 h-4" />
                              ) : (
                                <FaClock className="w-4 h-4" />
                              )}
                            </div>

                            {/* Step Label */}
                            <span
                              className={`mt-2 text-xs sm:text-sm text-center ${
                                isCompleted
                                  ? "text-teal-400 font-medium"
                                  : "text-gray-400"
                              }`}
                            >
                              {step.charAt(0).toUpperCase() + step.slice(1)}
                            </span>

                            {/* Connector Line */}
                            {index < arr.length - 1 && (
                              <>
                                {/* Horizontal line for desktop */}
                                <div
                                  className={`hidden sm:block absolute top-4 left-1/2 w-full h-1 -z-10 ${
                                    index < currentIndex
                                      ? "bg-teal-500"
                                      : "bg-gray-600"
                                  }`}
                                />
                                {/* Vertical line for mobile */}
                                <div
                                  className={`sm:hidden w-1 h-6 -z-10 ${
                                    index < currentIndex
                                      ? "bg-teal-500"
                                      : "bg-gray-600"
                                  }`}
                                />
                              </>
                            )}
                          </div>
                        );
                      }
                    )}
                  </div>

                  {/* Order Items */}
                  <div className="space-y-2">
                    <h3 className="text-sm sm:text-md font-semibold text-gray-300">
                      Items:
                    </h3>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      {order.items.map((item, index) => (
                        <li
                          key={index}
                          className="text-xs sm:text-sm text-gray-400 break-words"
                        >
                          <span className="font-medium">{item.name}</span> ×{" "}
                          {item.quantity} @ {formatCurrency(item.price)}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Orders;
