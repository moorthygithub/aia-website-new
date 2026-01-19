import React, { useEffect, useRef, useState } from "react";

const CourseLms = () => {
  const labels = [
    "Dedicated Support Person",
    "CAMS Version 7 Study Material",
    "Practice Questions",
    "Live Sessions with Faculty",
    "100% Exam Registration Support",
    "50+ Hours of Video Lectures",
    "Mock Tests Preparations",
  ];

  const radius = 180;
  const center = 300;

  const [angleOffset, setAngleOffset] = useState(0);
  const frameRef = useRef(null);
  const lastTimeRef = useRef(performance.now());

  useEffect(() => {
    const animate = (time) => {
      const delta = time - lastTimeRef.current;
      lastTimeRef.current = time;
      setAngleOffset((prev) => (prev + delta * 0.02) % 360);
      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  const getPosition = (angle) => {
    const rad = (angle * Math.PI) / 180;
    return {
      x: center + radius * Math.cos(rad),
      y: center + radius * Math.sin(rad),
    };
  };

  return (
    <section
      className="relative flex items-center justify-center py-24"
      style={{
        backgroundImage:
          "url('https://aia.in.net/crm/public/assets/images/LMS.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 w-full max-w-3xl aspect-square">
        <svg viewBox="0 0 600 600" className="w-full h-full">
          <defs>
            <linearGradient id="orbitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F3831C" />
              <stop offset="100%" stopColor="#F3831C" />
            </linearGradient>

            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke="url(#orbitGradient)"
            strokeWidth="8"
            filter="url(#glow)"
          />

          <foreignObject x={center - 120} y={center - 120} width={240} height={240}>
            <div className="w-full h-full flex items-center justify-center">
              <img
                src="https://i.postimg.cc/BbXsmB3J/dsfsd-modified.png"
                alt="LMS"
                className="w-full h-full object-cover rounded-full"
                draggable={false}
              />
            </div>
          </foreignObject>

          {labels.map((label, i) => {
            const angle = i * (360 / labels.length) + angleOffset;
            const { x, y } = getPosition(angle);

            return (
              <g key={i}>
                <circle
                  cx={x}
                  cy={y}
                  r="8"
                  fill="white"
                  stroke="#F3831C"
                  strokeWidth="3"
                />
                
                <foreignObject
                  x={x - 100}
                  y={y - 60}
                  width={200}
                  height={48}
                >
                  <div
                    className="h-12 px-5 rounded-full bg-transparent flex items-center justify-center text-sm font-semibold text-white"
                  >
                    {label}
                  </div>
                </foreignObject>
              </g>
            );
          })}
        </svg>
      </div>
    </section>
  );
};

export default CourseLms;