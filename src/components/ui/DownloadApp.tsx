import React, { useState } from "react";

export default function DownloadApp() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-16 bg-white">
      <div
        className="relative flex items-center justify-center"
        style={{ minHeight: 300 }}
      >
        {/* Four concentric dotted circles */}
        <svg
          width="360"
          height="360"
          viewBox="0 0 360 360"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block"
          style={{ zIndex: 0 }}
        >
          {/* Inner ring */}
          {[...Array(12)].map((_, i) => {
            const angle = (i * 2 * Math.PI) / 12;
            const r = 95;
            const x = 180 + r * Math.cos(angle);
            const y = 180 + r * Math.sin(angle);
            return (
              <circle
                key={"inner-" + i}
                cx={x.toFixed(4)}
                cy={y.toFixed(4)}
                r={7}
                fill="#3b82f6"
                opacity={0.15}
              />
            );
          })}
          {/* Second ring */}
          {[...Array(18)].map((_, i) => {
            const angle = (i * 2 * Math.PI) / 18;
            const r = 120;
            const x = 180 + r * Math.cos(angle);
            const y = 180 + r * Math.sin(angle);
            return (
              <circle
                key={"second-" + i}
                cx={x.toFixed(4)}
                cy={y.toFixed(4)}
                r={6}
                fill="#3b82f6"
                opacity={0.15}
              />
            );
          })}
          {/* Third ring */}
          {[...Array(24)].map((_, i) => {
            const angle = (i * 2 * Math.PI) / 24;
            const r = 145;
            const x = 180 + r * Math.cos(angle);
            const y = 180 + r * Math.sin(angle);
            return (
              <circle
                key={"third-" + i}
                cx={x.toFixed(4)}
                cy={y.toFixed(4)}
                r={5}
                fill="#3b82f6"
                opacity={0.15}
              />
            );
          })}
          {/* Outer ring */}
          {[...Array(30)].map((_, i) => {
            const angle = (i * 2 * Math.PI) / 30;
            const r = 170;
            const x = 180 + r * Math.cos(angle);
            const y = 180 + r * Math.sin(angle);
            return (
              <circle
                key={"outer-" + i}
                cx={x.toFixed(4)}
                cy={y.toFixed(4)}
                r={4}
                fill="#3b82f6"
                opacity={0.15}
              />
            );
          })}
        </svg>
        {/* Central black circle, absolutely centered over SVG */}
        {/* --- Hoverable Black Circle --- */}
        <HoverableCenterCircle />
      </div>
    </section>
  );
}

// --- کامپوننت دایره وسط با hover ---
function HoverableCenterCircle() {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{
        width: hovered ? 150 : 130,
        height: hovered ? 150 : 130,
        borderRadius: "50%",
        background: "#111",
        zIndex: 1,
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        boxShadow: "0 0 0 10px #f7f7f7",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition:
          "width 0.3s cubic-bezier(0.4,0,0.2,1), height 0.3s cubic-bezier(0.4,0,0.2,1)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span
        style={{
          color: "#f7b6d2",
          fontWeight: "bold",
          fontSize: 10,
          fontFamily: "BYekan",
          marginBottom: 4,
        }}
      >
        G : S
      </span>
      <a
        href="https://t.me/Gstyleturkey_bot"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "#fff",
          fontWeight: "bold",
          fontSize: 16,
          fontFamily: "BYekan",
          marginBottom: 4,
          textDecoration: "none",
          cursor: "pointer",
          transition: "color 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#3b82f6")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
      >
        ورود به ربات تلگرام
      </a>
      <span
        style={{
          color: "#f7b6d2",
          fontWeight: "bold",
          fontSize: 12,
          fontFamily: "BYekan",
          marginTop: 4,
        }}
      >
        G : S
      </span>
    </div>
  );
}
