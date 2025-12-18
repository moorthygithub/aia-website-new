import React from "react";
import {
  ArrowRight,
  Zap,
  Rocket,
  Star,
  Sparkles,
  Flame,
  //   Zoomable,
} from "lucide-react";

export default function RotatingColorButtons() {
  return (
    <div className="bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 flex items-center justify-center p-8">
      <style>{`
        @keyframes rotateIn {
          0% {
            transform: rotate(0deg) translateX(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: rotate(360deg) translateX(0);
            opacity: 1;
          }
        }

        @keyframes colorShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes spinBorder {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes slideRotate {
          0% {
            transform: translateX(-100%) rotate(-45deg);
          }
          100% {
            transform: translateX(100%) rotate(45deg);
          }
        }

        @keyframes pulseGlow {
          0%, 100% {
            box-shadow: 0 0 10px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.8);
          }
        }

        @keyframes borderSpin {
          0% { border-image-source: linear-gradient(0deg, #3b82f6, #8b5cf6, #ec4899); }
          50% { border-image-source: linear-gradient(180deg, #ec4899, #3b82f6, #8b5cf6); }
          100% { border-image-source: linear-gradient(360deg, #8b5cf6, #ec4899, #3b82f6); }
        }

        @keyframes orbitIn {
          0% {
            clip-path: polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%);
          }
          100% {
            clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
          }
        }

        @keyframes waveShift {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        @keyframes spiralIn {
          0% {
            transform: rotate(0deg) scale(0.8);
            opacity: 0;
          }
          100% {
            transform: rotate(360deg) scale(1);
            opacity: 1;
          }
        }

        /* 1. Rotating Color Merge */
        .btn-rotating-merge {
          position: relative;
          background: linear-gradient(45deg, #3b82f6, #ec4899, #8b5cf6, #3b82f6);
          background-size: 300% 300%;
          animation: colorShift 4s ease infinite;
          transition: all 0.3s ease;
        }
        .btn-rotating-merge:hover {
          animation: colorShift 2s ease infinite;
          transform: scale(1.05);
        }

        /* 2. Spinning Border */
        .btn-spin-border {
          position: relative;
          background: rgba(17, 24, 39, 0.8);
          border: 2px solid;
          border-image: linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899) 1;
          overflow: hidden;
        }
        .btn-spin-border::before {
          content: '';
          position: absolute;
          inset: -2px;
          background: conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6);
          animation: spinBorder 3s linear infinite;
          opacity: 0;
          z-index: -1;
        }
        .btn-spin-border:hover::before {
          opacity: 1;
        }

        /* 3. Slide Rotate */
        .btn-slide-rotate {
          position: relative;
          background: linear-gradient(90deg, #06b6d4 0%, #0891b2 100%);
          overflow: hidden;
        }
        .btn-slide-rotate::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          animation: slideRotate 0.8s ease;
          opacity: 0;
        }
        .btn-slide-rotate:hover::before {
          animation: slideRotate 0.8s ease infinite;
          opacity: 1;
        }

        /* 4. Pulse Glow */
        .btn-pulse-glow {
          position: relative;
          background: linear-gradient(135deg, #667eea, #764ba2);
          animation: pulseGlow 2s ease-in-out infinite;
        }
        .btn-pulse-glow:hover {
          animation: pulseGlow 0.8s ease-in-out infinite;
        }

        /* 5. Multi Color Wave */
        .btn-multi-wave {
          position: relative;
          background: linear-gradient(90deg, 
            #3b82f6 0%, 
            #8b5cf6 25%, 
            #ec4899 50%, 
            #f59e0b 75%, 
            #10b981 100%);
          background-size: 200% 100%;
          background-position: -100% 0;
          transition: all 0.8s ease;
        }
        .btn-multi-wave:hover {
          background-position: 100% 0;
        }

        /* 6. Orbit In */
        .btn-orbit-in {
          position: relative;
          background: white;
          color: #111827;
          overflow: hidden;
        }
        .btn-orbit-in::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #14b8a6, #0d9488);
          animation: orbitIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          opacity: 0;
          z-index: 0;
        }
        .btn-orbit-in:hover::before {
          opacity: 1;
          animation: orbitIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .btn-orbit-in:hover {
          color: white;
        }

        /* 7. Spiral Rotate */
        .btn-spiral {
          position: relative;
          background: linear-gradient(45deg, #f43f5e, #ec4899, #a855f7, #3b82f6);
          background-size: 200% 200%;
          animation: spiralIn 2s ease infinite;
        }
        .btn-spiral:hover {
          animation: spiralIn 1s ease infinite;
        }

        /* 8. Rainbow Sweep */
        .btn-rainbow-sweep {
          position: relative;
          background: linear-gradient(90deg, 
            #ff0080 0%, 
            #ff8c00 20%, 
            #40e0d0 40%, 
            #ff0080 60%, 
            #ff8c00 80%, 
            #40e0d0 100%);
          background-size: 300% 100%;
          animation: waveShift 3s ease infinite;
        }
        .btn-rainbow-sweep:hover {
          animation: waveShift 1.5s ease infinite;
        }

        /* 9. Rotating Gradient */
        .btn-rotate-gradient {
          position: relative;
          background: conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #f59e0b, #3b82f6);
          animation: spinBorder 4s linear infinite;
        }
        .btn-rotate-gradient:hover {
          animation: spinBorder 2s linear infinite;
        }

        /* 10. Dynamic Color Shift */
        .btn-dynamic-shift {
          position: relative;
          background: linear-gradient(-45deg, #6366f1, #ec4899, #06b6d4);
          background-size: 200% 200%;
          animation: colorShift 3s ease infinite;
          transition: all 0.3s ease;
        }
        .btn-dynamic-shift:hover {
          animation: colorShift 1s ease infinite;
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(99, 102, 241, 0.4);
        }

        /* Shared Button Styles */
        .rotating-btn {
          padding: 14px 40px;
          font-size: 16px;
          font-weight: 700;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          color: white;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          position: relative;
          transition: all 0.3s ease;
          z-index: 1;
        }

        .rotating-btn span {
          position: relative;
          z-index: 2;
        }

        .rotating-btn svg {
          position: relative;
          z-index: 2;
          transition: transform 0.4s ease;
        }

        .rotating-btn:hover svg {
          transform: translateX(4px) rotate(180deg);
        }
      `}</style>

      <div className="space-y-24 max-w-6xl w-full">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* 1. Rotating Color Merge */}
          <div className="flex flex-col items-center gap-8">
            <h3 className="text-cyan-400 text-xs font-bold tracking-widest">
              COLOR SHIFT
            </h3>
            <button className="rotating-btn btn-rotating-merge">
              <span>Rotate</span>
              <Zap size={16} />
            </button>
            <p className="text-gray-400 text-xs text-center leading-relaxed">
              Colors rotate smoothly
            </p>
          </div>

          {/* 2. Spinning Border */}
          <div className="flex flex-col items-center gap-8">
            <h3 className="text-cyan-400 text-xs font-bold tracking-widest">
              SPIN BORDER
            </h3>
            <button
              className="rotating-btn btn-spin-border"
              style={{ color: "white" }}
            >
              <span>Spin</span>
              <Sparkles size={16} />
            </button>
            <p className="text-gray-400 text-xs text-center leading-relaxed">
              Border spins on hover
            </p>
          </div>

          {/* 3. Slide Rotate */}
          <div className="flex flex-col items-center gap-8">
            <h3 className="text-cyan-400 text-xs font-bold tracking-widest">
              SLIDE ROTATE
            </h3>
            <button className="rotating-btn btn-slide-rotate">
              <span>Slide</span>
              <ArrowRight size={16} />
            </button>
            <p className="text-gray-400 text-xs text-center leading-relaxed">
              Light slides & rotates
            </p>
          </div>

          {/* 4. Pulse Glow */}
          <div className="flex flex-col items-center gap-8">
            <h3 className="text-cyan-400 text-xs font-bold tracking-widest">
              PULSE GLOW
            </h3>
            <button className="rotating-btn btn-pulse-glow">
              <span>Pulse</span>
              <Flame size={16} />
            </button>
            <p className="text-gray-400 text-xs text-center leading-relaxed">
              Pulsing glow effect
            </p>
          </div>

          {/* 5. Multi Color Wave */}
          <div className="flex flex-col items-center gap-8">
            <h3 className="text-cyan-400 text-xs font-bold tracking-widest">
              MULTI WAVE
            </h3>
            <button className="rotating-btn btn-multi-wave">
              <span>Wave</span>
              <Rocket size={16} />
            </button>
            <p className="text-gray-400 text-xs text-center leading-relaxed">
              Rainbow wave flows
            </p>
          </div>

          {/* 8. Rainbow Sweep */}
          <div className="flex flex-col items-center gap-8">
            <h3 className="text-cyan-400 text-xs font-bold tracking-widest">
              RAINBOW
            </h3>
            <button className="rotating-btn btn-rainbow-sweep">
              <span>Rainbow</span>
              <Sparkles size={16} />
            </button>
            <p className="text-gray-400 text-xs text-center leading-relaxed">
              Rainbow sweeps across
            </p>
          </div>

          {/* 10. Dynamic Color Shift */}
          <div className="flex flex-col items-center gap-8">
            <h3 className="text-cyan-400 text-xs font-bold tracking-widest">
              DYNAMIC
            </h3>
            <button className="rotating-btn btn-dynamic-shift">
              <span>Dynamic</span>
              <ArrowRight size={16} />
            </button>
            <p className="text-gray-400 text-xs text-center leading-relaxed">
              Dynamic color shift
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
