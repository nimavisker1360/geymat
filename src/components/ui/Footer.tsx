import React, { useState, useEffect } from "react";

export default function Footer() {
  const [showSupportModal, setShowSupportModal] = useState(false);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showSupportModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showSupportModal]);
  return (
    <>
      <footer
        className="w-full flex flex-col items-center justify-center py-8 bg-gray-50 rounded-3xl shadow-xl mt-24 mb-8 mx-4 md:mx-auto max-w-6xl"
        style={{ boxShadow: "0 8px 40px 0 rgba(0,0,0,0.08)", direction: "rtl" }}
      >
        {/* Logo */}
        <div className="flex justify-center items-center w-full mb-2 mt-2 px-2 ">
          <img
            src="/images/logo01.png"
            alt="ioio logo"
            style={{
              height: 32,
            }}
          />
        </div>
        <hr className="w-full border-t border-gray-200 my-4" />
        {/* Main content */}
        <div className="flex flex-col md:flex-row w-full justify-between items-center md:items-start px-4 md:px-0 gap-6 md:gap-4">
          {/* Socials and Enamd on same line for mobile */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full md:w-auto order-1 md:order-1 gap-8 pr-6 md:pr-2">
            {/* Socials */}
            <div className="flex flex-row gap-4">
              <a
                href="https://instagram.com/gstyle_online"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-gray-100 rounded-xl w-[90px] h-[90px] md:h-[160px] hover:bg-purple-200 transition"
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
                href="https://t.me/gstyle_support"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-gray-100 rounded-xl w-[90px] h-[90px] md:h-[160px] hover:bg-blue-200 transition"
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
            {/* Enamd Logo and Links for mobile - on same line */}
            <div className="flex items-center justify-between md:hidden w-full pr-8">
              <div className="grid grid-cols-2 grid-rows-3 gap-x-15 gap-y-2 text-right">
                <a
                  href="#guide"
                  className="text-base font-bold text-gray-800 col-start-1 row-start-1 hover:text-pink-500 transition-colors duration-200"
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
                  className="text-base font-bold text-gray-800 col-start-2 row-start-1 hover:text-pink-500 transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById("brands");
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
                  className="text-base font-bold text-gray-800 col-start-1 row-start-2 hover:text-pink-500 transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById("faq");
                    if (element) {
                      element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}
                >
                  سوالات متداول
                </a>
                <a
                  href="#support"
                  className="text-base font-bold text-gray-800 col-start-2 row-start-2 hover:text-pink-500 cursor-pointer transition-colors duration-200"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowSupportModal(true);
                  }}
                >
                  پشتیبانی
                </a>
                <a
                  href="#testimonials"
                  className="text-base font-bold text-gray-800 col-start-1 row-start-3 hover:text-pink-500 transition-colors duration-200"
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
                  نظرات مشتریان
                </a>
              </div>
              <div className="flex items-center justify-center pr-2">
                <img
                  src="/images/enamd.png"
                  alt="enamd logo"
                  style={{ height: 100 }}
                />
              </div>
            </div>
          </div>
          {/* Enamd Logo for desktop */}
          <div className="hidden md:flex items-center justify-center order-2 md:order-2">
            <img
              src="/images/enamd.png"
              alt="enamd logo"
              style={{ height: 250 }}
            />
          </div>
          {/* Links for desktop */}
          <div className="hidden md:flex items-center justify-center order-3 md:order-3">
            <div className="grid grid-cols-2 grid-rows-3 gap-x-8 md:gap-x-12 gap-y-4 md:gap-y-6 text-center md:text-right">
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
                  const element = document.getElementById("brands");
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
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById("faq");
                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
              >
                سوالات متداول
              </a>
              <a
                href="#support"
                className="text-lg font-bold text-gray-800 col-start-2 row-start-2 hover:text-pink-500 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  setShowSupportModal(true);
                }}
              >
                پشتیبانی
              </a>
              <a
                href="#testimonials"
                className="text-lg font-bold text-gray-800 col-start-1 row-start-3 hover:text-pink-500"
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
                نظرات مشتریان
              </a>
            </div>
          </div>
        </div>
      </footer>
      {/* Copyright */}
      <div className="flex justify-center items-center w-full py-4">
        <span className="text-gray-600 text-sm">
          2023 Gstyle - All Rights Reserved
        </span>
      </div>

      {/* Support Modal */}
      {showSupportModal && (
        <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50">
          <div
            className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative shadow-2xl"
            style={{ direction: "rtl" }}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowSupportModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>

            {/* Contact Information */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                شماره تماس
              </h3>
              <div className="flex items-center gap-3">
                <span className="text-xl font-bold text-gray-800">
                  90-5526079800+
                </span>
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="text-green-500"
                >
                  <path
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">
                شبکه های اجتماعی
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/gstyle_online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                >
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="6"
                      stroke="#222"
                      strokeWidth="2"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="5"
                      stroke="#222"
                      strokeWidth="2"
                    />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="#222" />
                  </svg>
                </a>
                <a
                  href="https://t.me/gstyle_support"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                >
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
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
          </div>
        </div>
      )}
    </>
  );
}
