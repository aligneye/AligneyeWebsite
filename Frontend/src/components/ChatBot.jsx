import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClient, setIsClient] = useState(false); // To avoid SSR window errors

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleChat = () => setIsOpen((prev) => !prev);

  if (!isClient) return null;

  return (
    <>
      {/* Floating Chat Toggle Button */}
      <div className="fixed bottom-5 right-5 z-50">
        <button
          onClick={toggleChat}
          className="bg-teal-500 text-white p-3 rounded-full shadow-lg hover:bg-teal-600 focus:outline-none hover:cursor-pointer"
          aria-label="Toggle Chatbot"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-5 right-20 z-50 bg-white text-black w-72 h-96 rounded-xl shadow-xl transition-all duration-300">
          <div className="p-4 h-full flex flex-col">
            <h3 className="text-lg font-semibold mb-2">Chat with Aligneye</h3>
            <p className="text-sm text-gray-600 mb-4">
              How can we help you today?
            </p>
            <div className="flex-1 overflow-y-auto">
              {/* Replace below with actual chat messages / form */}
              {/* <p className="text-sm text-gray-400">
                Chatbot content goes here...
              </p> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
