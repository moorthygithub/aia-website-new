/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NotificationPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const messages = [
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
  ];

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
      initial={{ y: 100, opacity: 0, scale: 0.95 }}
      animate={
        isClosing
          ? { 
              y: 100, 
              opacity: 0, 
              scale: 0.95,
              filter: "blur(8px)" 
            }
          : { 
              y: 0, 
              opacity: 1, 
              scale: 1,
              filter: "blur(0px)" 
            }
      }
      transition={{ 
        duration: 0.4, 
        ease: [0.22, 1, 0.36, 1],
        scale: { duration: 0.35 }
      }}
      className="fixed bottom-5 right-5 z-50"
    >
      <div className="relative bg-transparent  p-4 w-80 ">
      
        
     
        <button
          onClick={handleClose}
          className="absolute top-2.5 right-2.5 text-red-400 cursor-pointer hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-all duration-200 z-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full p-1 hover:scale-110 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-sm"
        >
          <X size={16} />
        </button>

       
        
        <div className="space-y-3">
          <AnimatePresence mode="popLayout">
            {visibleMessages.map((message, index) => {
              const isNewMessage = index === visibleMessages.length - 1;
              const isIncoming = message.type === "incoming";
              
              return (
                <motion.div
                  key={`${currentMessageIndex}-${index}`}
                  initial={isNewMessage ? { 
                    opacity: 0, 
                    x: isIncoming ? -15 : 15,
                    scale: 0.95 
                  } : false}
                  animate={{ 
                    opacity: 1, 
                    x: 0,
                    scale: 1 
                  }}
                  exit={{ 
                    opacity: 0, 
                    scale: 0.9,
                    filter: "blur(4px)"
                  }}
                  transition={{ 
                    duration: 0.25, 
                    ease: [0.22, 1, 0.36, 1] 
                  }}
                  className={`flex ${isIncoming ? "items-start gap-2" : "justify-end"}`}
                >
                  {isIncoming && (
                    <motion.img
                      src={message.avatar}
                      alt="avatar"
                      className="w-7 h-7 rounded-full flex-shrink-0"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1 }}
                    />
                  )}
                  <motion.div
                    initial={{ 
                      boxShadow: "0 0 0 rgba(0,0,0,0)" 
                    }}
                    animate={{ 
                      boxShadow: isIncoming 
                        ? "0 2px 8px rgba(59, 130, 246, 0.12)" 
                        : "0 2px 8px rgba(239, 68, 68, 0.15)" 
                    }}
                    className={`text-sm px-4 py-2.5 rounded-xl max-w-[75%] relative ${
                      isIncoming
                        ? "bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-200 rounded-tl-none"
                        : "bg-gradient-to-r from-red-500 to-red-600 text-white rounded-tr-none"
                    }`}
                  >
                   
                    {isIncoming ? (
                      <div className="absolute top-0 -left-1 w-2 h-2 overflow-hidden">
                        <div className="absolute -right-1 top-0 w-2 h-2 bg-blue-50 dark:bg-gray-800 transform -rotate-45"></div>
                      </div>
                    ) : (
                      <div className="absolute top-0 -right-1 w-2 h-2 overflow-hidden">
                        <div className="absolute -left-1 top-0 w-2 h-2 bg-red-500 transform -rotate-45"></div>
                      </div>
                    )}
                    
                    {message.text}
                    
                    
                  </motion.div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      
        {currentMessageIndex < messages.length - 1 && messages[currentMessageIndex + 1]?.type === "incoming" && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-1.5 mt-3 ml-10"
          >
            <div className="flex space-x-1">
              <div className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full animate-pulse"></div>
              <div className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full animate-pulse delay-75"></div>
              <div className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full animate-pulse delay-150"></div>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400">AIA is typing...</span>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default NotificationPopup;