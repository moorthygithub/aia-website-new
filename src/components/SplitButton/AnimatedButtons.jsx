import React from "react";
import { ArrowRight, Zap, Heart, Star, Rocket, Sparkles } from "lucide-react";

export default function AnimatedButtons() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-8">
      <style>{`
        /* 1. Smooth Color Shift */
        .btn-smooth {
          position: relative;
          background: linear-gradient(90deg, #3b82f6 0%, #3b82f6 100%);
          transition: all 0.4s ease;
        }
        .btn-smooth:hover {
          background: linear-gradient(90deg, #1e40af 0%, #0c4a6e 100%);
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.3);
        }

        /* 2. Expanding Circle */
        .btn-circle {
          position: relative;
          overflow: hidden;
        }
        .btn-circle::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }
        .btn-circle:hover::before {
          width: 300px;
          height: 300px;
        }

        /* 3. Sliding Underline */
        .btn-underline {
          position: relative;
          background: transparent;
          border: none;
          border-bottom: 3px solid #3b82f6;
        }
        .btn-underline::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: -100%;
          width: 100%;
          height: 3px;
          background: #10b981;
          transition: left 0.5s ease;
        }
        .btn-underline:hover::after {
          left: 0;
        }

        /* 4. Scale & Glow */
        .btn-scale {
          position: relative;
          background: linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%);
          transition: all 0.4s ease;
        }
        .btn-scale:hover {
          transform: scale(1.05);
          box-shadow: 0 0 30px rgba(139, 92, 246, 0.5);
        }

        /* 5. Icon Float */
        .btn-float {
          position: relative;
          background: linear-gradient(135deg, #ec4899 0%, #f43f5e 100%);
        }
        .btn-float svg {
          transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        .btn-float:hover svg {
          transform: translateY(-4px) rotate(-20deg);
        }

        /* 6. Gradient Rotate */
        .btn-gradient-rotate {
          position: relative;
          background: linear-gradient(45deg, #10b981, #059669, #10b981);
          background-size: 200% 200%;
          transition: all 0.6s ease;
        }
        .btn-gradient-rotate:hover {
          background-position: 200% 0;
          box-shadow: 0 8px 20px rgba(16, 185, 129, 0.4);
        }

        /* 7. Border Animate */
        .btn-border {
          position: relative;
          background: transparent;
          border: 2px solid #06b6d4;
          overflow: hidden;
        }
        .btn-border::before {
          content: '';
          position: absolute;
          inset: -100%;
          background: conic-gradient(from 0deg, #06b6d4, #0891b2, #06b6d4);
          animation: spin 3s linear infinite;
          opacity: 0;
          transition: opacity 0.3s;
          z-index: -1;
        }
        .btn-border:hover::before {
          opacity: 1;
        }
        .btn-border:hover {
          background: rgba(6, 182, 212, 0.1);
        }
        @keyframes spin {
          100% { transform: rotate(360deg); }
        }

        /* 8. Letter Spacing */
        .btn-letter {
          position: relative;
          background: linear-gradient(90deg, #f59e0b 0%, #d97706 100%);
          letter-spacing: 1px;
          transition: all 0.4s ease;
        }
        .btn-letter:hover {
          letter-spacing: 4px;
          box-shadow: 0 8px 20px rgba(245, 158, 11, 0.4);
        }

        /* 9. Bounce Animation */
        .btn-bounce {
          position: relative;
          background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%);
          transition: all 0.2s ease;
        }
        .btn-bounce:hover {
          animation: bounce 0.6s ease;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          25% { transform: translateY(-8px); }
          50% { transform: translateY(-12px); }
          75% { transform: translateY(-4px); }
        }

        /* 10. Slide In */
        .btn-slide-in {
          position: relative;
          background: linear-gradient(90deg, #6366f1 0%, #3b82f6 100%);
          overflow: hidden;
        }
        .btn-slide-in::before {
          content: '';
          position: absolute;
          left: -100%;
          top: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.2);
          transition: left 0.5s ease;
        }
        .btn-slide-in:hover::before {
          left: 100%;
        }

        /* Shared Styles */
        .animated-btn {
          padding: 12px 28px;
          font-size: 15px;
          font-weight: 600;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          color: white;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
        }
      `}</style>

      <div className="space-y-20 max-w-6xl w-full">
        {/* Buttons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12">
          {/* 1. Smooth Color Shift */}
          <div className="flex flex-col items-center gap-6">
            <h3 className="text-cyan-400 text-sm font-bold tracking-widest">
              Smooth Shift
            </h3>
            <button className="animated-btn btn-smooth">
              <span>Get Started</span>
              <ArrowRight size={16} />
            </button>
            <p className="text-gray-400 text-xs text-center">
              Color & shadow shift
            </p>
          </div>

          {/* 2. Expanding Circle */}
          <div className="flex flex-col items-center gap-6">
            <h3 className="text-cyan-400 text-sm font-bold tracking-widest">
              Expanding
            </h3>
            <button
              className="animated-btn btn-circle"
              style={{
                background: "linear-gradient(135deg, #3b82f6, #1e40af)",
              }}
            >
              <span>Explore</span>
              <Star size={16} />
            </button>
            <p className="text-gray-400 text-xs text-center">
              Circle expands on hover
            </p>
          </div>

          {/* 3. Sliding Underline */}
          <div className="flex flex-col items-center gap-6">
            <h3 className="text-cyan-400 text-sm font-bold tracking-widest">
              Underline Slide
            </h3>
            <button className="animated-btn btn-underline text-white">
              <span>Learn More</span>
              <ArrowRight size={16} />
            </button>
            <p className="text-gray-400 text-xs text-center">
              Underline slides in
            </p>
          </div>

          {/* 4. Scale & Glow */}
          <div className="flex flex-col items-center gap-6">
            <h3 className="text-cyan-400 text-sm font-bold tracking-widest">
              Scale Glow
            </h3>
            <button className="animated-btn btn-scale">
              <span>Click</span>
              <Zap size={16} />
            </button>
            <p className="text-gray-400 text-xs text-center">
              Scale & glow effect
            </p>
          </div>

          {/* 5. Icon Float */}
          <div className="flex flex-col items-center gap-6">
            <h3 className="text-cyan-400 text-sm font-bold tracking-widest">
              Icon Float
            </h3>
            <button className="animated-btn btn-float">
              <span>Favorite</span>
              <Heart size={16} />
            </button>
            <p className="text-gray-400 text-xs text-center">
              Icon floats & rotates
            </p>
          </div>

          {/* 6. Gradient Rotate */}
          <div className="flex flex-col items-center gap-6">
            <h3 className="text-cyan-400 text-sm font-bold tracking-widest">
              Gradient Flow
            </h3>
            <button className="animated-btn btn-gradient-rotate">
              <span>Success</span>
              <Sparkles size={16} />
            </button>
            <p className="text-gray-400 text-xs text-center">
              Gradient animates
            </p>
          </div>

          {/* 7. Border Animate */}
          <div className="flex flex-col items-center gap-6">
            <h3 className="text-cyan-400 text-sm font-bold tracking-widest">
              Neon Border
            </h3>
            <button className="animated-btn btn-border text-cyan-400">
              <span>Activate</span>
              <Zap size={16} />
            </button>
            <p className="text-gray-400 text-xs text-center">
              Border glows on hover
            </p>
          </div>

          {/* 8. Letter Spacing */}
          <div className="flex flex-col items-center gap-6">
            <h3 className="text-cyan-400 text-sm font-bold tracking-widest">
              Spacing
            </h3>
            <button className="animated-btn btn-letter">
              <span>Expand</span>
              <ArrowRight size={16} />
            </button>
            <p className="text-gray-400 text-xs text-center">
              Letters space out
            </p>
          </div>

          {/* 9. Bounce Animation */}
          <div className="flex flex-col items-center gap-6">
            <h3 className="text-cyan-400 text-sm font-bold tracking-widest">
              Bounce
            </h3>
            <button className="animated-btn btn-bounce">
              <span>Jump</span>
              <Rocket size={16} />
            </button>
            <p className="text-gray-400 text-xs text-center">Button bounces</p>
          </div>

          {/* 10. Slide In Light */}
          <div className="flex flex-col items-center gap-6">
            <h3 className="text-cyan-400 text-sm font-bold tracking-widest">
              Light Slide
            </h3>
            <button className="animated-btn btn-slide-in">
              <span>Shine</span>
              <Star size={16} />
            </button>
            <p className="text-gray-400 text-xs text-center">
              Light slides across
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
