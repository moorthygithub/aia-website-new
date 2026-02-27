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
  const flattenedMessages = React.useMemo(() => {
    if (!popupData || popupData.length === 0) return [];

    return popupData.flatMap((popup) => [
      {
        type: "outgoing",
        text: popup.side_popup_heading,
      },
      {
        type: "incoming",
        text: popup.side_popup_description,
        link: popup.side_popup_link,
      },
    ]);
  }, [popupData]);

  useEffect(() => {
    if (!isVisible || flattenedMessages.length === 0) return;

    const messageInterval = setInterval(() => {
      setCurrentMessageIndex((prev) => {
        if (prev >= flattenedMessages.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 3500);

    return () => clearInterval(messageInterval);
  }, [isVisible, flattenedMessages]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 500);
  };

  if (!isVisible) return null;

  const currentMessage = flattenedMessages[currentMessageIndex];
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
          className="absolute top-2.5 right-2.5 text-[#F3831C] cursor-pointer hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-all duration-200 z-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full p-1 hover:scale-110 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-sm"
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
                      src={`${IMAGE_PATH}/aia_dp.webp`}
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
                        : "bg-gradient-to-r from-[#F3831C] to-[#F3831C] text-white rounded-tr-none"
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
          currentMessageIndex < flattenedMessages.length * 2 - 1 && (
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
// import React, { useState, useEffect } from "react";
// import { X } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";
// import axios from "axios";
// import { BASE_URL, IMAGE_PATH } from "@/api/base-url";

// const NotificationPopup = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [isClosing, setIsClosing] = useState(false);
//   const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
//   const [popupData, setPopupData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isError, setIsError] = useState(false);

//   useEffect(() => {
//     const fetchPopupData = async () => {
//       try {
//         setIsLoading(true);
//         const response = await axios.get(`${BASE_URL}/api/getSidePopup`);
//         setPopupData(response.data.data);
//         setIsLoading(false);
//       } catch (error) {
//         setIsError(true);
//         setIsLoading(false);
//       }
//     };
//     fetchPopupData();
//   }, []);

//   useEffect(() => {
//     const timer = setTimeout(() => setIsVisible(true), 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   const flattenedMessages = React.useMemo(() => {
//     if (!popupData || popupData.length === 0) return [];
//     return popupData.flatMap((popup) => [
//       { type: "outgoing", text: popup.side_popup_heading },
//       {
//         type: "incoming",
//         text: popup.side_popup_description,
//         link: popup.side_popup_link,
//       },
//     ]);
//   }, [popupData]);

//   useEffect(() => {
//     if (!isVisible || flattenedMessages.length === 0) return;
//     const messageInterval = setInterval(() => {
//       setCurrentMessageIndex((prev) =>
//         prev >= flattenedMessages.length - 1 ? 0 : prev + 1,
//       );
//     }, 3500);
//     return () => clearInterval(messageInterval);
//   }, [isVisible, flattenedMessages]);

//   const handleClose = () => {
//     setIsClosing(true);
//     setTimeout(() => setIsVisible(false), 500);
//   };

//   if (!isVisible) return null;

//   const currentMessage = flattenedMessages[currentMessageIndex];
//   const showTyping =
//     !isLoading &&
//     !isError &&
//     currentMessage?.type === "outgoing" &&
//     currentMessageIndex < flattenedMessages.length * 2 - 1;

//   return (
//     <motion.div
//       initial={{ y: 100, opacity: 0, scale: 0.95 }}
//       animate={
//         isClosing
//           ? { y: 100, opacity: 0, scale: 0.95, filter: "blur(8px)" }
//           : { y: 0, opacity: 1, scale: 1, filter: "blur(0px)" }
//       }
//       transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
//       // ✅ will-change isolates the compositing layer — stops shaking neighbours in Firefox
//       style={{ willChange: "transform, opacity" }}
//       className="fixed bottom-5 right-5 z-50"
//     >
//       <div className="relative bg-transparent p-4 w-80">
//         <button
//           onClick={handleClose}
//           className="absolute top-2.5 right-2.5 text-[#F3831C] cursor-pointer hover:text-gray-600 transition-all duration-200 z-10 bg-white/80 backdrop-blur-sm rounded-full p-1 hover:scale-110 hover:bg-gray-100 shadow-sm"
//         >
//           <X size={16} />
//         </button>

//         {/* ✅ Fixed height container prevents layout shift between messages */}
//         <div className="min-h-[56px] flex flex-col justify-end">
//           {/* ✅ mode="wait" instead of "popLayout" — no layout recalculation, no Firefox shake */}
//           <AnimatePresence mode="wait">
//             {isLoading ? (
//               <motion.div
//                 key="loading"
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0 }}
//                 className="flex items-start gap-2"
//               >
//                 <div className="w-7 h-7 rounded-full bg-gray-200 animate-pulse" />
//                 <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl rounded-tl-none px-4 py-2.5 w-3/4">
//                   <div className="h-4 bg-gray-300 rounded animate-pulse w-full" />
//                   <div className="h-3 bg-gray-300 rounded animate-pulse w-2/3 mt-2" />
//                 </div>
//               </motion.div>
//             ) : isError ? (
//               <motion.div
//                 key="error"
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0 }}
//                 className="flex items-start gap-2"
//               >
//                 <div className="w-7 h-7 rounded-full bg-red-100" />
//                 <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl rounded-tl-none px-4 py-2.5">
//                   <p className="text-sm text-gray-800">
//                     Failed to load messages
//                   </p>
//                 </div>
//               </motion.div>
//             ) : (
//               currentMessage && (
//                 <motion.div
//                   key={currentMessageIndex}
//                   initial={{
//                     opacity: 0,
//                     x: currentMessage.type === "incoming" ? -15 : 15,
//                     scale: 0.95,
//                   }}
//                   animate={{ opacity: 1, x: 0, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.9, filter: "blur(4px)" }}
//                   transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
//                   // ✅ transform-style isolates this animation from parent layout
//                   style={{ willChange: "transform, opacity" }}
//                   className={`flex ${currentMessage.type === "incoming" ? "items-start gap-2" : "justify-end"}`}
//                 >
//                   {currentMessage.type === "incoming" && (
//                     <motion.img
//                       src={`${IMAGE_PATH}/aia_dp.webp`}
//                       alt="avatar"
//                       className="w-7 h-7 rounded-full flex-shrink-0"
//                       initial={{ scale: 0 }}
//                       animate={{ scale: 1 }}
//                       transition={{ delay: 0.1 }}
//                     />
//                   )}
//                   <div
//                     className={`text-sm px-4 py-2.5 rounded-xl max-w-[75%] relative ${
//                       currentMessage.type === "incoming"
//                         ? "bg-gradient-to-r from-blue-50 to-blue-100 text-gray-800 rounded-tl-none"
//                         : "bg-gradient-to-r from-[#F3831C] to-[#F3831C] text-white rounded-tr-none"
//                     }`}
//                     style={{
//                       boxShadow:
//                         currentMessage.type === "incoming"
//                           ? "0 2px 8px rgba(59,130,246,0.12)"
//                           : "0 2px 8px rgba(243,131,28,0.2)",
//                     }}
//                   >
//                     {currentMessage.type === "incoming" ? (
//                       <>
//                         <div className="absolute top-0 -left-1 w-2 h-2 overflow-hidden">
//                           <div className="absolute -right-1 top-0 w-2 h-2 bg-blue-50 transform -rotate-45" />
//                         </div>
//                         {currentMessage.link ? (
//                           <a
//                             href={currentMessage.link}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="hover:underline"
//                           >
//                             {currentMessage.text}
//                           </a>
//                         ) : (
//                           currentMessage.text
//                         )}
//                       </>
//                     ) : (
//                       <>
//                         <div className="absolute top-0 -right-1 w-2 h-2 overflow-hidden">
//                           <div className="absolute -left-1 top-0 w-2 h-2 bg-[#F3831C] transform -rotate-45" />
//                         </div>
//                         {currentMessage.text}
//                       </>
//                     )}
//                   </div>
//                 </motion.div>
//               )
//             )}
//           </AnimatePresence>
//         </div>

//         {/* ✅ Typing indicator: CSS keyframes instead of animate-pulse (Tailwind's pulse uses opacity animation that triggers repaints in Firefox inside Framer Motion trees) */}
//         <div className="h-6 mt-2 ml-10">
//           {showTyping && (
//             <motion.div
//               key="typing"
//               initial={{ opacity: 0, y: 4 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0 }}
//               className="flex items-center gap-1.5"
//             >
//               <div className="flex space-x-1">
//                 <span
//                   style={{
//                     animation: "typingDot 1.2s ease-in-out infinite",
//                     animationDelay: "0ms",
//                   }}
//                   className="block w-1.5 h-1.5 bg-gray-400 rounded-full"
//                 />
//                 <span
//                   style={{
//                     animation: "typingDot 1.2s ease-in-out infinite",
//                     animationDelay: "200ms",
//                   }}
//                   className="block w-1.5 h-1.5 bg-gray-400 rounded-full"
//                 />
//                 <span
//                   style={{
//                     animation: "typingDot 1.2s ease-in-out infinite",
//                     animationDelay: "400ms",
//                   }}
//                   className="block w-1.5 h-1.5 bg-gray-400 rounded-full"
//                 />
//               </div>
//               <span className="text-xs text-gray-500">AIA is typing...</span>
//             </motion.div>
//           )}
//         </div>

//         {/* ✅ Keyframe defined inline so no global CSS file needed */}
//         <style>{`
//           @keyframes typingDot {
//             0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
//             30% { transform: translateY(-4px); opacity: 1; }
//           }
//         `}</style>
//       </div>
//     </motion.div>
//   );
// };

// export default NotificationPopup;
