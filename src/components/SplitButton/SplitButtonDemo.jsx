import React from "react";
import { ArrowRight } from "lucide-react";
import DualBlockDemo from "./DualBlockDemo";
import AnimatedButtons from "./AnimatedButtons";
import RotatingColorButtons from "./RotatingColorButtons";

const SplitButton = ({ text = "Start Course", variant = "blue" }) => {
  const variantConfig = {
    blue: {
      bg: "#1e88e5",
      label: "Blue Style",
    },
    purple: {
      bg: "#7e57c2",
      label: "Purple Style",
    },
    green: {
      bg: "#43a047",
      label: "Green Style",
    },
    red: {
      bg: "#e53935",
      label: "Red Style",
    },
  };

  const config = variantConfig[variant] || variantConfig.blue;

  return (
    <>
      <style>{`
        .split-btn-${variant}::before,
        .split-btn-${variant}::after {
          content: '';
          position: absolute;
          top: 50%;
          width: 56px;
          height: 56px;
          background: ${config.bg};
          border-radius: 6px;
          transform: translateY(-50%) scale(0);
          transform-origin: center;
          transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          z-index: 1;
        }

        .split-btn-${variant}::before {
          left: 0;
        }

        .split-btn-${variant}::after {
          right: 0;
          transition-delay: 0.1s;
        }

        .split-btn-${variant}:hover::before,
        .split-btn-${variant}:hover::after {
          width: 100%;
          height: 100%;
          transform: translateY(-50%) scale(1);
        }

        .split-btn-${variant}:hover .btn-content {
          color: white;
        }

        .split-btn-${variant}:hover .btn-icon {
          transform: translateX(4px);
        }
      `}</style>

      <button
        className={`split-btn-${variant} relative w-full max-w-xs h-14 bg-white border-0 rounded-md text-base font-semibold text-gray-900 cursor-pointer flex items-center justify-center overflow-hidden transition-all duration-300`}
      >
        <span className="btn-content flex items-center justify-center gap-2 relative z-20 transition-colors duration-400">
          {text}
          <ArrowRight
            size={18}
            className="btn-icon transition-transform duration-400"
          />
        </span>
      </button>
    </>
  );
};

export default function SplitButtonDemo() {
  const buttons = [
    { variant: "blue", label: "Blue Style" },
    { variant: "purple", label: "Purple Style" },
    { variant: "green", label: "Green Style" },
    { variant: "red", label: "Red Style" },
  ];

  return (
    <>
      <div className="bg-gradient-to-br from-purple-500 via-purple-600 to-pink-600 flex items-center justify-center p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 w-full max-w-5xl">
          {buttons.map((btn) => (
            <div key={btn.variant} className="flex flex-col items-center gap-6">
              <div className="text-white text-xs font-bold tracking-widest uppercase">
                {btn.label}
              </div>
              <SplitButton text="Start Course" variant={btn.variant} />
            </div>
          ))}
        </div>
      </div>
      <DualBlockDemo />
      <AnimatedButtons />
      <RotatingColorButtons />
    </>
  );
}
