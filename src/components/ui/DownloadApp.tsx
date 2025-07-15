import React from "react";

export default function DownloadApp() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-16 bg-white">
      <div
        className="relative flex items-center justify-center"
        style={{ minHeight: 300 }}
      >
        {/* Dotted circular pattern */}
        <svg
          width="280"
          height="280"
          viewBox="0 0 280 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block"
          style={{ zIndex: 0 }}
        >
          {[...Array(36)].map((_, i) => {
            const angle = (i * 10 * Math.PI) / 180;
            const r = 115 + (i % 2 === 0 ? 0 : 7);
            const x = 140 + r * Math.cos(angle);
            const y = 140 + r * Math.sin(angle);
            return (
              <circle
                key={i}
                cx={x.toFixed(4)}
                cy={y.toFixed(4)}
                r={i % 3 === 0 ? 5 : 3}
                fill="#ededed"
                opacity={0.8}
              />
            );
          })}
        </svg>
        {/* Central black circle, absolutely centered over SVG */}
        <div
          className="flex flex-col items-center justify-center"
          style={{
            width: 130,
            height: 130,
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
          }}
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
            href="https://t.me/gstyle_support"
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
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#3b82f6"; // blue on hover
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#fff"; // back to white
            }}
          >
            دانلود ربات تلگرام
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
      </div>
    </section>
  );
}
