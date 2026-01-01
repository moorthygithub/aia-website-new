import React, { useState, useEffect } from "react";
import { X, Mail, Bell, Sparkles } from "lucide-react";

const NotificationPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 500);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 transition-all duration-500 transform ${
        isClosing
          ? "translate-y-full opacity-0 rotate-12 scale-75"
          : "translate-y-0 opacity-100 rotate-0 scale-100"
      }`}
    >
      <div className="relative bg-transparent  rounded-2xl  p-4 w-80">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition"
        >
          <X size={18} />
        </button>

        <div className="space-y-4 mt-6">
          <div className="flex items-start gap-2">
            <img
              src="https://i.pravatar.cc/40?img=12"
              alt="avatar"
              className="w-8 h-8 rounded-full"
            />
            <div className="bg-blue-100 dark:bg-gray-800 text-sm text-gray-800 dark:text-gray-200 px-4 py-2 rounded-xl rounded-tl-none max-w-[75%]">
              👋 Hi! Want updates about new courses & offers?
            </div>
          </div>

     
          <div className="flex justify-end">
            <div className="bg-red-500 text-white text-sm px-4 py-2 rounded-xl rounded-tr-none max-w-[75%]">
              Yes, keep me updated 👍
            </div>
          </div>

          {/* <div className="flex items-start gap-2">
            <img
              src="https://i.pravatar.cc/40?img=12"
              alt="avatar"
              className="w-8 h-8 rounded-full"
            />
            <div className="bg-gray-100 dark:bg-gray-800 text-sm text-gray-800 dark:text-gray-200 px-4 py-2 rounded-xl rounded-tl-none max-w-[75%]">
              Great! You’ll receive important updates here 🚀
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default NotificationPopup;
