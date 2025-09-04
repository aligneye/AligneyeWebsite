import React, { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";
import { Gift, X, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const HandbookReminder = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [showIcon, setShowIcon] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    setIsClient(true);

    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowIcon(true);
      } else {
        setShowIcon(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
    if (isOpen) {
      setSubmitted(false);
      setMessage("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");

    try {
      const { data, error } = await supabase
        .from("handbook")
        .insert([{ name, email }]);

      if (error) {
        console.error("Supabase insert error:", error);
        setMessage("Something went wrong. Please try again.");
      } else {
        setSubmitted(true);
        setMessage("Success!");
        setTimeout(() => {
          setIsOpen(false);
          setSubmitted(false);
          setMessage("");
        }, 2000);
      }
    } catch (err) {
      console.error(err);
      setMessage("Error submitting form.");
    }
  };

  if (!isClient) return null;

  return (
    <>
      {showIcon && (
        <>
          {!isOpen && (
            <motion.div
              className="fixed bottom-5 md:bottom-5 right-5 z-50"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <button
                onClick={toggleChat}
                className="relative hover:cursor-pointer bg-gradient-to-r from-teal-400 to-cyan-500 text-white p-3 rounded-full shadow-xl hover:scale-110 transition-transform duration-200"
                aria-label="Toggle Handbook"
              >
                <span className="absolute inset-0 rounded-full bg-teal-400 opacity-50 animate-ping"></span>
                <Gift className="w-6 h-6 relative z-10" />
              </button>
            </motion.div>
          )}

          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white w-full max-w-sm rounded-2xl shadow-2xl p-5 border border-gray-700"
                >
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-bold flex items-center gap-2">
                      🎁 Free Handbook
                    </h3>
                    <button onClick={toggleChat}>
                      <X className="w-5 h-5 text-gray-400 hover:text-white hover:cursor-pointer" />
                    </button>
                  </div>

                  {!submitted ? (
                    <>
                      <p className="text-sm text-gray-300 mb-4">
                        Unlock our premium posture guide worth{" "}
                        <span className="text-teal-400 font-semibold">
                          ₹500
                        </span>{" "}
                        - free for you!
                      </p>

                      <form className="space-y-3" onSubmit={handleSubmit}>
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-sm focus:outline-none focus:border-teal-400 placeholder-gray-400"
                          required
                        />
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 text-sm focus:outline-none focus:border-teal-400 placeholder-gray-400"
                          required
                        />
                        <motion.button
                          type="submit"
                          whileTap={{ scale: 0.95 }}
                          className="w-full hover:cursor-pointer bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white rounded-lg px-3 py-2 text-sm font-medium shadow-md"
                        >
                          Claim Now
                        </motion.button>
                      </form>
                      {message && (
                        <div className="mt-3 text-center text-red-400">
                          {message}
                        </div>
                      )}
                    </>
                  ) : (
                    <motion.div
                      className="flex flex-col items-center justify-center h-48 text-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                    >
                      <CheckCircle2 className="w-12 h-12 text-teal-400 mb-3" />
                      <h4 className="text-lg font-semibold">Success!</h4>
                      <p className="text-sm text-gray-300">
                        Your handbook is on its way!
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </>
  );
};

export default HandbookReminder;
