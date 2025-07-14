import React from "react";

const brandImages = [
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png",
  "7.png",
  "8.png",
  "9.png",
  "10.png",
];

const ROWS = 2;
const COLS = 5;
const CELL_SIZE = 120; // px
const GAP = 32; // px

export default function Brands() {
  return (
    <section
      id="brands"
      className="w-full py-12 bg-white flex flex-col items-center"
    >
      <h2
        className="text-2xl md:text-3xl font-bold mb-8 text-center"
        style={{
          fontFamily: "BYekan",
          color: "#3b4d39",
          position: "relative",
          display: "inline-block",
        }}
      >
        <span style={{ position: "relative", zIndex: 1 }}>برندها</span>
        <span
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            height: "32%",
            background: "#B6F5C3",
            zIndex: 0,
            borderRadius: 4,
            width: "100%",
            display: "block",
          }}
        />
      </h2>
      <div
        className="w-full flex justify-center relative"
        style={{ minHeight: ROWS * (CELL_SIZE + GAP) }}
      >
        {/* دکور سمت چپ */}
        <img
          src="/images/y.png"
          alt="Y decorative left"
          className="hidden md:block"
          style={{
            position: "absolute",
            left: 40,
            top: "50%",
            transform: "translateY(-50%)",
            width: 180,
            opacity: 0.12,
            zIndex: 0,
            pointerEvents: "none",
          }}
          draggable={false}
        />
        {/* دکور سمت راست */}
        <img
          src="/images/T.png"
          alt="T decorative right"
          className="hidden md:block"
          style={{
            position: "absolute",
            right: 40,
            top: "60%",
            transform: "translateY(-50%)",
            width: 180,
            opacity: 0.12,
            zIndex: 0,
            pointerEvents: "none",
          }}
          draggable={false}
        />
        <div
          className="grid"
          style={{
            gridTemplateColumns: `repeat(${COLS}, ${CELL_SIZE}px)`,
            gridTemplateRows: `repeat(${ROWS}, ${CELL_SIZE}px)`,
            gap: `${GAP}px`,
            zIndex: 1,
          }}
        >
          {brandImages.map((img, idx) => (
            <div
              key={img}
              className="brand-fade flex flex-col items-center justify-center shadow-md rounded-2xl"
              style={{
                width: `${CELL_SIZE}px`,
                height: `${CELL_SIZE}px`,
                background: "#fff",
                animation: `brand-fade-in-out ${
                  3 + (idx % 3)
                }s ease-in-out infinite`,
                padding: 12,
              }}
            >
              <img
                src={`/images/brands/${img}`}
                alt={`brand-${img}`}
                style={{ width: "100%", height: "auto", objectFit: "contain" }}
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes brand-fade-in-out {
          0% {
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
