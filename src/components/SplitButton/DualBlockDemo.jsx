import React from "react";
import { ArrowRight } from "lucide-react";

const DualBlockButton = ({ text = "Start Course", variant = "blue" }) => {
  const variantConfig = {
    blue: {
      primary: "#1e88e5",
      light: "#42a5f5",
      label: "Blue Style",
    },
    purple: {
      primary: "#7e57c2",
      light: "#9575cd",
      label: "Purple Style",
    },
    green: {
      primary: "#43a047",
      light: "#66bb6a",
      label: "Green Style",
    },
    red: {
      primary: "#e53935",
      light: "#ef5350",
      label: "Red Style",
    },
  };

  const config = variantConfig[variant] || variantConfig.blue;

  return (
    <>
      <style>{`
        .dual-btn-${variant} {
          position: relative;
          overflow: hidden;
          background: white;
        }

        /* Left Block */
        .dual-btn-${variant}::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 0;
          height: 100%;
          background: linear-gradient(90deg, ${config.primary}, ${config.light});
          border-radius: 6px 0 0 6px;
          transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          z-index: 1;
        }

        /* Right Block */
        .dual-btn-${variant}::after {
          content: '';
          position: absolute;
          right: 0;
          top: 0;
          width: 0;
          height: 100%;
          background: linear-gradient(90deg, ${config.light}, ${config.primary});
          border-radius: 0 6px 6px 0;
          transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          transition-delay: 0.1s;
          z-index: 1;
        }

        .dual-btn-${variant}:hover::before {
          width: 50%;
        }

        .dual-btn-${variant}:hover::after {
          width: 50%;
        }

        .dual-btn-${variant}:hover .btn-content {
          color: white;
        }

        .dual-btn-${variant}:hover .btn-icon {
          transform: translateX(6px) rotate(-15deg);
        }
      `}</style>

      <button
        className={`dual-btn-${variant} relative w-full max-w-sm h-16 bg-white border-0 rounded-lg text-lg font-bold text-gray-900 cursor-pointer flex items-center justify-center overflow-hidden transition-all duration-300 shadow-lg hover:shadow-2xl`}
      >
        <span className="btn-content flex items-center justify-center gap-3 relative z-20 transition-colors duration-500">
          {text}
          <ArrowRight
            size={22}
            className="btn-icon transition-all duration-500"
          />
        </span>
      </button>
    </>
  );
};

export default function DualBlockDemo() {
  const buttons = [
    { variant: "blue", label: "Blue Style" },
    { variant: "purple", label: "Purple Style" },
    { variant: "green", label: "Green Style" },
    { variant: "red", label: "Red Style" },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-8">
      <div className="space-y-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {buttons.map((btn) => (
            <div key={btn.variant} className="flex flex-col items-center gap-6">
              <div className="text-purple-300 text-sm font-bold tracking-widest uppercase">
                {btn.label}
              </div>
              <div className="flex justify-center w-full">
                <DualBlockButton text="Start Course" variant={btn.variant} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
