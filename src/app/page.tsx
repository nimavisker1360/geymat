"use client";

import React, { useState, useEffect } from "react";
import Hero from "../components/Hero";
import { Instagram, Send } from "lucide-react";
import OrderSteps from "../components/ui/OrderSteps";
import MobileNav from "../components/ui/MobileNav";
import Brands from "../components/ui/Brands";
import Testimonials from "../components/ui/Testimonials";
import DownloadApp from "../components/ui/DownloadApp";
import Footer from "@/components/ui/Footer";

const MOBILE_MENU_HEIGHT = 180; // px, should match MobileNav minHeight

// FAQItem component for accordion functionality
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <li
      className={`py-6 px-4 md:px-8 flex flex-col cursor-pointer hover:bg-gray-50 transition border-b`}
      onClick={() => setOpen((prev) => !prev)}
    >
      <div className="flex items-center justify-between w-full">
        <span className="text-2xl text-gray-400">{open ? "⌃" : "⌄"}</span>
        <span
          className={`text-lg md:text-xl font-bold ${
            open ? "text-gray-900" : "text-gray-700"
          }`}
          style={{ fontFamily: "BYekan" }}
        >
          {question}
        </span>
      </div>
      {open && (
        <div
          className="mt-4 text-base text-gray-600 text-center md:text-right"
          style={{ fontFamily: "BYekan" }}
        >
          {answer}
        </div>
      )}
    </li>
  );
}

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
      {/* Nav Bar */}
      <nav className="w-full flex justify-center mt-4">
        <div
          className="w-full max-w-6xl mx-auto flex items-center justify-between bg-white rounded-3xl shadow-sm py-4 px-6 md:px-12"
          style={{ boxShadow: "0 4px 32px 0 rgba(0,0,0,0.06)" }}
        >
          {/* Desktop Nav */}
          <div className="hidden md:flex w-full items-center justify-between">
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/gstyle_online"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition group"
              >
                <Instagram className="w-6 h-6 text-gray-800 group-hover:text-[#a259c1]" />
              </a>
              <a
                href="https://t.me/gstyle_support"
                target="_blank"
                rel="noopener noreferrer"
                className="transition group"
              >
                <Send className="w-6 h-6 text-gray-800 group-hover:text-[#1976d2]" />
              </a>
            </div>
            {/* Nav Links */}
            <ul className="flex items-center gap-8 text-base md:text-lg font-medium text-gray-800">
              <li>
                <a
                  href="#brands"
                  className="relative transition group hover:text-[#f7b6d2] cursor-pointer"
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
                  برندها
                  <span className="absolute left-0 right-0 bottom-[-8px] mx-auto w-0 h-3 rounded-xl bg-[#f7b6d2] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a
                  href="#guide"
                  className="relative transition group hover:text-[#f7b6d2] cursor-pointer"
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
                  <span className="absolute left-0 right-0 bottom-[-8px] mx-auto w-0 h-3 rounded-xl bg-[#f7b6d2] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a
                  href="#OrderSteps"
                  className="relative transition group hover:text-[#f7b6d2] cursor-pointer"
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
                  پرسش های متداول
                  <span className="absolute left-0 right-0 bottom-[-8px] mx-auto w-0 h-3 rounded-xl bg-[#f7b6d2] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a
                  href="#support"
                  className="relative transition group hover:text-[#f7b6d2] cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowSupportModal(true);
                  }}
                >
                  پشتیبانی
                  <span className="absolute left-0 right-0 bottom-[-8px] mx-auto w-0 h-3 rounded-xl bg-[#f7b6d2] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  className="relative transition group hover:text-[#f7b6d2]"
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
                  <span className="absolute left-0 right-0 bottom-[-8px] mx-auto w-0 h-3 rounded-xl bg-[#f7b6d2] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/images/logo01.png"
                alt="ق.ی.م.ت"
                className="h-8 drop-shadow-md"
              />
            </div>
          </div>

          {/* Mobile Nav */}
          <div className="flex w-full items-center justify-between md:hidden">
            {/* Hamburger Button (right) */}
            <button
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors order-3"
              aria-label="باز و بسته کردن منو"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="#222"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            {/* Logo (center) */}
            <div className="flex-1 flex justify-center order-2">
              <img
                src="/images/logo01.png"
                alt="ق.ی.م.ت"
                className="h-8 drop-shadow-md"
                style={{ maxWidth: 80 }}
              />
            </div>
            {/* Social Icons (left) */}
            <div className="flex items-center gap-4 order-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition group"
              >
                <Instagram className="w-6 h-6 text-gray-800 group-hover:text-[#a259c1]" />
              </a>
              <a
                href="https://t.me/gstyle_support"
                target="_blank"
                rel="noopener noreferrer"
                className="transition group"
              >
                <Send className="w-6 h-6 text-gray-800 group-hover:text-[#1976d2]" />
              </a>
            </div>
          </div>
        </div>
      </nav>
      {/* MobileNav as a sidebar, covers the whole screen */}
      <MobileNav
        open={mobileMenuOpen}
        onExited={() => setMobileMenuOpen(false)}
        setShowSupportModal={setShowSupportModal}
      />
      {/* Animated content wrapper */}
      <div
        style={{
          transition: "margin-top 0.6s cubic-bezier(0.4,0,0.2,1)",
          marginTop: mobileMenuOpen ? MOBILE_MENU_HEIGHT : 0,
        }}
      >
        <Hero />
        <OrderSteps />
        <Brands />
        {/* FAQ Section */}
        <section
          id="faq"
          className="w-full flex flex-col items-center justify-center py-5 relative bg-[#f5f5f5] overflow-hidden"
        >
          {/* Decorative L (left) and I (right) for desktop */}
          <img
            src="/images/L.png"
            alt="L decorative left"
            className="hidden md:block"
            style={{
              position: "absolute",
              left: 40,
              top: "35%",
              transform: "translateY(-50%)",
              width: 180,
              opacity: 0.12,
              zIndex: 0,
              pointerEvents: "none",
            }}
            draggable={false}
          />
          <img
            src="/images/I.png"
            alt="I decorative right"
            className="hidden md:block"
            style={{
              position: "absolute",
              right: 40,
              top: "70%",
              transform: "translateY(-50%)",
              width: 180,
              opacity: 0.12,
              zIndex: 0,
              pointerEvents: "none",
            }}
            draggable={false}
          />
          {/* Desktop: FAQ title and image side by side */}
          <div className="hidden md:flex flex-row items-center justify-center w-full max-w-3xl mb-12 relative z-10">
            <h2
              className="text-3xl md:text-5xl font-extrabold text-center relative z-10"
              style={{
                fontFamily: "BYekan",
                fontWeight: "bold",
                lineHeight: "1.3",
              }}
            >
              <span className="underline-green">سوالات متداول</span>
            </h2>
            <img
              src="/images/question mark.png"
              alt="سوالات متداول"
              className="ml-2 w-[100px] md:w-[140px] lg:w-[280px] opacity-80 select-none pointer-events-none align-baseline"
              style={{ marginBottom: "-12px" }}
              draggable={false}
            />
          </div>
          {/* Mobile: title and image below */}
          <div className="flex flex-col md:hidden items-center w-full mb-8 relative z-10">
            <h2
              className="text-3xl font-extrabold text-center relative z-10"
              style={{
                fontFamily: "BYekan",
                fontWeight: "bold",
                lineHeight: "1.3",
              }}
            >
              <span className="underline-green">سوالات متداول</span>
            </h2>
            <img
              src="/images/question mark.png"
              alt="سوالات متداول"
              className="mt-2 w-[80px] opacity-80 select-none pointer-events-none"
              draggable={false}
            />
          </div>
          {/* FAQ Box */}
          <div
            className="w-full max-w-2xl bg-white rounded-3xl shadow-md p-0 md:p-8 flex flex-col items-center border border-[#d1fae5] relative z-10"
            style={{ boxShadow: "0 4px 32px 0 rgba(0,0,0,0.06)" }}
          >
            <ul className="divide-y divide-gray-200 w-full">
              <FAQItem
                question="چطوری میتونیم از بات استفاده کنیم؟"
                answer=" بعد از ورود به بات استارت بزنید صحفه ات اتواتیک شروع به باز شدن میکنه و محصولات و بقیه خدمات نشون میده در صورت مشکل راهنما رو بزنید"
              />
              <FAQItem
                question="چه محصولاتی رو میتونم سفارش بدم؟"
                answer="شما می‌توانید انواع محصولات شامل مد و فشن و زیبایی و آرایشی و بهداشتی را از طریق بات سفارش دهید"
              />
              <FAQItem
                question="نحوه محاسبه قیمت جی استایل چجوریه؟"
                answer="قیمت‌ها به صورت پویا و بر اساس شرایط بازار محاسبه می‌شوند ولی قیمت تمام شده تا درب منزل محاسبه شده و برای شما نمایش دهده میشه"
              />
              <FAQItem
                question="از چه کشورهایی میتونم سفارش رو ثبت کنم؟"
                answer="در حال حاضر امکان ثبت سفارش از کشورترکیه میباشد"
              />
              <FAQItem
                question="چقدر طول میکشه تا سفارش از لحظه ثبت به دستم برسه؟"
                answer="  مدت زمان تحویل سفارش بسته به نوع محصول و مقصد متفاوت است برای تهران  مدت زمان 10 تا 20 دیروز کاری و برای شهرستان 2 تا 3 روز به این زمان اضافه میشود"
              />
              <FAQItem
                question="نحوه پرداخت به چه صورت میباشد؟"
                answer="نحوه پرداخت هم از طریق درگاه زرین پال و هم پرداخت به صورت تتری با گرفتن آدرس کیف پول میباشد بعداز تایید حسابداری سفارش شما ثبت میشود"
              />
            </ul>
          </div>
        </section>
        <Testimonials id="reviews" />
        <DownloadApp />
        <Footer />
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
