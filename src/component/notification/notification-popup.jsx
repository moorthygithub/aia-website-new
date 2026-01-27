/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NotificationPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const messages =[
  {
    type: "incoming",
    text: "Hi. Want updates about AIA exam prep?",
    avatar: "https://i.pravatar.cc/40?img=12"
  },
  {
    type: "outgoing",
    text: "Yes."
  },
  {
    type: "incoming",
    text: "AIA helps you prepare for CIA & CAMS exams.",
    avatar: "https://i.pravatar.cc/40?img=12"
  },
  {
    type: "outgoing",
    text: "What do you provide?"
  },
  {
    type: "incoming",
    text: "Classes, mock tests, and expert guidance.",
    avatar: "https://i.pravatar.cc/40?img=12"
  },
  {
    type: "outgoing",
    text: "Okay."
  }
]


 
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  
  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      setCurrentMessageIndex(prev => {
       
        if (prev >= messages.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 2000); 

    return () => clearTimeout(timer);
  }, [isVisible, currentMessageIndex, messages.length]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 500);
  };

  if (!isVisible) return null;

  
  const visibleMessages = messages.slice(
    Math.max(0, currentMessageIndex - 1),
    currentMessageIndex + 1
  );

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={
        isClosing
          ? { y: 50, opacity: 0 }
          : { y: 0, opacity: 1 }
      }
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed bottom-5 right-5 z-50"
    >
      <div className="relative bg-transparent rounded-2xl p-4 w-80">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition z-10"
        >
          <X size={18} />
        </button>

        <div className="space-y-4 mt-6">
          <AnimatePresence mode="popLayout">
            {visibleMessages.map((message, index) => {
              const isNewMessage = index === visibleMessages.length - 1;
              
              return (
                <motion.div
                  key={`${currentMessageIndex}-${index}`}
                  initial={isNewMessage ? { opacity: 0, y: 15 } : false}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={`flex ${
                    message.type === "outgoing" ? "justify-end" : "items-start gap-2"
                  }`}
                >
                  {message.type === "incoming" && (
                    <img
                      src={message.avatar}
                      alt="avatar"
                      className="w-8 h-8 rounded-full"
                    />
                  )}
                  <div
                    className={`text-sm px-4 py-2 rounded-xl max-w-[75%] ${
                      message.type === "incoming"
                        ? "bg-blue-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-tl-none"
                        : "bg-red-500 text-white rounded-tr-none"
                    }`}
                  >
                    {message.text}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default NotificationPopup;