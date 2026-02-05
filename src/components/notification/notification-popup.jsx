/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { BASE_URL, IMAGE_PATH } from "@/api/base-url";

const NotificationPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [popupData, setPopupData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchPopupData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`${BASE_URL}/api/getSidePopup`);
        setPopupData(response.data.data);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchPopupData();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible || popupData.length === 0) return;

    const messageInterval = setInterval(() => {
      setCurrentMessageIndex((prev) => {
        if (prev >= popupData.length * 2 - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 3500);

    return () => clearInterval(messageInterval);
  }, [isVisible, popupData]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 500);
  };

  if (!isVisible) return null;

  const getMessage = (index) => {
    const popupIndex = Math.floor(index / 2);
    const messageType = index % 2 === 0 ? "incoming" : "outgoing";

    if (popupIndex >= popupData.length) return null;

    const popup = popupData[popupIndex];

    if (messageType === "incoming") {
      return {
        type: "incoming",
        text: popup.side_popup_description,
        avatar: "https://i.pravatar.cc/40?img=12",
        link: popup.side_popup_link,
      };
    } else {
      return {
        type: "outgoing",
        text: "Tell me more",
      };
    }
  };

  const currentMessage = getMessage(currentMessageIndex);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0, scale: 0.95 }}
      animate={
        isClosing
          ? {
              y: 100,
              opacity: 0,
              scale: 0.95,
              filter: "blur(8px)",
            }
          : {
              y: 0,
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
            }
      }
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
        scale: { duration: 0.35 },
      }}
      className="fixed bottom-5 right-5 z-50"
    >
      <div className="relative bg-transparent p-4 w-80">
        <button
          onClick={handleClose}
          className="absolute top-2.5 right-2.5 text-red-400 cursor-pointer hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-all duration-200 z-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full p-1 hover:scale-110 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-sm"
        >
          <X size={16} />
        </button>

        <div className="space-y-3">
          <AnimatePresence mode="popLayout">
            {isLoading ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-2"
              >
                <div className="w-7 h-7 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 rounded-xl rounded-tl-none px-4 py-2.5 w-3/4">
                  <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded animate-pulse w-full"></div>
                  <div className="h-3 bg-gray-300 dark:bg-gray-600 rounded animate-pulse w-2/3 mt-2"></div>
                </div>
              </motion.div>
            ) : isError ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-start gap-2"
              >
                <div className="w-7 h-7 rounded-full bg-red-100 dark:bg-red-900/30"></div>
                <div className="bg-gradient-to-r from-red-50 to-red-100 dark:from-gray-800 dark:to-gray-900 rounded-xl rounded-tl-none px-4 py-2.5">
                  <p className="text-sm text-gray-800 dark:text-gray-200">
                    Failed to load messages
                  </p>
                </div>
              </motion.div>
            ) : (
              currentMessage && (
                <motion.div
                  key={currentMessageIndex}
                  initial={{
                    opacity: 0,
                    x: currentMessage.type === "incoming" ? -15 : 15,
                    scale: 0.95,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    filter: "blur(4px)",
                  }}
                  transition={{
                    duration: 0.25,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`flex ${currentMessage.type === "incoming" ? "items-start gap-2" : "justify-end"}`}
                >
                  {currentMessage.type === "incoming" && (
                    <motion.img
                      src={`${IMAGE_PATH}/40.jpg`}
                      alt="avatar"
                      className="w-7 h-7 rounded-full flex-shrink-0"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1 }}
                    />
                  )}
                  <motion.div
                    initial={{
                      boxShadow: "0 0 0 rgba(0,0,0,0)",
                    }}
                    animate={{
                      boxShadow:
                        currentMessage.type === "incoming"
                          ? "0 2px 8px rgba(59, 130, 246, 0.12)"
                          : "0 2px 8px rgba(239, 68, 68, 0.15)",
                    }}
                    className={`text-sm px-4 py-2.5 rounded-xl max-w-[75%] relative ${
                      currentMessage.type === "incoming"
                        ? "bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-200 rounded-tl-none"
                        : "bg-gradient-to-r from-red-500 to-red-600 text-white rounded-tr-none"
                    }`}
                  >
                    {currentMessage.type === "incoming" ? (
                      <>
                        <div className="absolute top-0 -left-1 w-2 h-2 overflow-hidden">
                          <div className="absolute -right-1 top-0 w-2 h-2 bg-blue-50 dark:bg-gray-800 transform -rotate-45"></div>
                        </div>
                        {currentMessage.link ? (
                          <a
                            href={currentMessage.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            {currentMessage.text}
                          </a>
                        ) : (
                          currentMessage.text
                        )}
                      </>
                    ) : (
                      <>
                        <div className="absolute top-0 -right-1 w-2 h-2 overflow-hidden">
                          <div className="absolute -left-1 top-0 w-2 h-2 bg-red-500 transform -rotate-45"></div>
                        </div>
                        {currentMessage.text}
                      </>
                    )}
                  </motion.div>
                </motion.div>
              )
            )}
          </AnimatePresence>
        </div>

        {!isLoading &&
          !isError &&
          currentMessage &&
          currentMessage.type === "outgoing" &&
          currentMessageIndex < popupData.length * 2 - 1 && (
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
              <span className="text-xs text-gray-500 dark:text-gray-400">
                AIA is typing...
              </span>
            </motion.div>
          )}
      </div>
    </motion.div>
  );
};

export default NotificationPopup;
