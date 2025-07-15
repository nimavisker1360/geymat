import React from "react";

export default function Footer() {
  return (
    <footer
      className="w-full flex flex-col items-center justify-center py-8 bg-white rounded-3xl shadow-xl mt-24 mb-8 mx-auto max-w-6xl"
      style={{ boxShadow: "0 8px 40px 0 rgba(0,0,0,0.08)", direction: "rtl" }}
    >
      {/* Logo */}
      <div className="flex justify-center items-center w-full mb-4 mt-2">
        <img src="/images/logo.png" alt="ioio logo" style={{ height: 32 }} />
      </div>
      <hr className="w-full border-t border-gray-200 my-4" />
      {/* Main content */}
      <div className="flex flex-row w-full justify-between items-start px-0 gap-4 relative">
        {/* Download & Social */}
        <div className="flex flex-row gap-4 z-10">
          {/* Download App */}
          <div className="flex flex-col items-center justify-between bg-black rounded-xl p-6 min-w-[140px] min-h-[160px] shadow-md">
            <span
              className="text-white font-bold text-lg mb-2"
              style={{ fontFamily: "BYekan" }}
            >
              دانلود اپلیکیشن
            </span>
            <svg
              width="32"
              height="32"
              fill="none"
              viewBox="0 0 24 24"
              className="my-2"
            >
              <path
                d="M12 4v12m0 0l-4-4m4 4l4-4"
                stroke="#888"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          {/* Socials */}
          <div className="flex flex-row gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-gray-100 rounded-xl w-[90px] h-[160px] hover:bg-gray-200 transition"
            >
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="6"
                  stroke="#222"
                  strokeWidth="2"
                />
                <circle cx="12" cy="12" r="5" stroke="#222" strokeWidth="2" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="#222" />
              </svg>
            </a>
            <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-gray-100 rounded-xl w-[90px] h-[160px] hover:bg-gray-200 transition"
            >
              <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                <path
                  d="M9.036 16.572l-.397 3.77c.57 0 .816-.246 1.115-.543l2.67-2.558 5.534 4.04c1.014.56 1.74.266 1.99-.94l3.61-16.84c.33-1.53-.553-2.13-1.54-1.76L2.16 9.68c-1.5.59-1.48 1.43-.256 1.81l4.6 1.44 10.68-6.74c.5-.32.96-.14.58.2"
                  stroke="#222"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </a>
          </div>
        </div>
        {/* Links - absolutely to the left */}
        <div
          className="absolute left-0 top-0 h-full flex items-center"
          style={{ minHeight: 160 }}
        >
          <div
            className="grid grid-cols-2 grid-rows-3 gap-x-12 gap-y-6 text-right pl-8"
            style={{ minWidth: 340 }}
          >
            <a
              href="#guide"
              className="text-lg font-bold text-gray-800 col-start-1 row-start-1 hover:text-pink-500"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("guide");
                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
            >
              راهنمای خرید
            </a>
            <a
              href="#brands"
              className="text-lg font-bold text-gray-800 col-start-2 row-start-1 hover:text-pink-500"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("reviews");
                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
            >
              برند ها
            </a>
            <a
              href="#faq"
              className="text-lg font-bold text-gray-800 col-start-1 row-start-2 hover:text-pink-500"
            >
              پرسش های متداول
            </a>
            <a
              href="#support"
              className="text-lg font-bold text-gray-800 col-start-2 row-start-2 hover:text-pink-500"
            >
              پشتیبانی
            </a>
            <a
              href="#testimonials"
              className="text-lg font-bold text-gray-800 col-start-1 row-start-3 hover:text-pink-500"
            >
              نظرات مشتریان
            </a>
          </div>
        </div>
      </div>
      {/* Bottom logo */}
      <div className="flex justify-center items-center w-full mt-8 mb-2">
        <img src="/images/logo.png" alt="ioio logo" style={{ height: 32 }} />
      </div>
    </footer>
  );
}
