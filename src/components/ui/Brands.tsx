import React from "react";
import Image from "next/image";

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

export default function Brands() {
  return (
    <section
      id="brands"
      className="w-full py-12 bg-white flex flex-col items-center overflow-hidden"
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
      <div className="w-full flex justify-center relative px-4">
        {/* دکور سمت چپ */}
        <Image
          src="/images/y.png"
          alt="Y decorative left"
          width={180}
          height={180}
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
        <Image
          src="/images/T.png"
          alt="T decorative right"
          width={180}
          height={180}
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
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 max-w-full">
          {brandImages.map((img, idx) => (
            <div
              key={img}
              className="brand-fade flex flex-col items-center justify-center shadow-md rounded-2xl bg-white p-3 md:p-4"
              style={{
                animation: `brand-fade-in-out ${
                  3 + (idx % 3)
                }s ease-in-out infinite`,
                minHeight: "80px",
                maxHeight: "120px",
              }}
            >
              <Image
                src={`/images/brands/${img}`}
                alt={`brand-${img}`}
                width={120}
                height={120}
                className="w-full h-full object-contain"
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
