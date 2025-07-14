"use client";

import Hero from "../components/Hero";
import { Instagram, Send } from "lucide-react";
import OrderSteps from "../components/ui/OrderSteps";
import MobileNav from "../components/ui/MobileNav";
import Brands from "../components/ui/Brands";
import { useState } from "react";
import Testimonials from "../components/ui/Testimonials";

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
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70 transition group"
              >
                <Instagram className="w-6 h-6 text-gray-800 group-hover:text-[#a259c1]" />
              </a>
              <a
                href="https://t.me"
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
                  className="relative transition group hover:text-[#f7b6d2]"
                >
                  راهنمای خرید
                  <span className="absolute left-0 right-0 bottom-[-8px] mx-auto w-0 h-3 rounded-xl bg-[#f7b6d2] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a
                  href="#faq"
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
                  className="relative transition group hover:text-[#f7b6d2]"
                >
                  پشتیبانی
                  <span className="absolute left-0 right-0 bottom-[-8px] mx-auto w-0 h-3 rounded-xl bg-[#f7b6d2] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  className="relative transition group hover:text-[#f7b6d2]"
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
                href="https://t.me"
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
                question="چطوری میتونیم ثبت نام کنیم؟"
                answer="کافیه هنگام ورود به اپلیکیشن شماره تلفن خودتون رو وارد کرده و مراحل تکمیل پروفایل رو دنبال کنید."
              />
              <FAQItem
                question="چه محصولاتی رو میتونم سفارش بدم؟"
                answer="شما می‌توانید انواع محصولات را از طریق اپلیکیشن سفارش دهید. (توضیحات دلخواه خود را اینجا قرار دهید)"
              />
              <FAQItem
                question="نحوه محاسبه قیمت پویو چجوریه؟"
                answer="قیمت‌ها به صورت پویا و بر اساس شرایط بازار محاسبه می‌شوند. (توضیحات دلخواه خود را اینجا قرار دهید)"
              />
              <FAQItem
                question="از چه کشورهایی میتونم سفارش رو ثبت کنم؟"
                answer="در حال حاضر امکان ثبت سفارش از کشورهای مختلف وجود دارد. (توضیحات دلخواه خود را اینجا قرار دهید)"
              />
              <FAQItem
                question="چقدر طول میکشه تا سفارش از لحظه ثبت به دستم برسه؟"
                answer="مدت زمان تحویل سفارش بسته به نوع محصول و مقصد متفاوت است. (توضیحات دلخواه خود را اینجا قرار دهید)"
              />
            </ul>
          </div>
        </section>
        <Testimonials />
        <main className="flex min-h-screen items-center justify-center">
          <h1
            className="text-3xl font-bold"
            style={{ fontFamily: "BYekan", fontWeight: "bold" }}
          >
            صفحه اصلی
          </h1>
        </main>
      </div>
    </>
  );
}
