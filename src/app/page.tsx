import Hero from "../components/Hero";
import { Instagram, Send } from "lucide-react";

export default function Page() {
  return (
    <>
      {/* Nav Bar */}
      <nav className="w-full flex justify-center mt-4">
        <div
          className="w-full max-w-6xl flex items-center justify-between bg-white rounded-3xl shadow-sm py-4 px-6 md:px-12"
          style={{ boxShadow: "0 4px 32px 0 rgba(0,0,0,0.06)" }}
        >
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
                className="relative transition group hover:text-[#f7b6d2]"
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
                className="relative transition group hover:text-[#f7b6d2]"
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
      </nav>
      {/* Hero Section */}
      <Hero />
      <main className="flex min-h-screen items-center justify-center">
        <h1
          className="text-3xl font-bold"
          style={{ fontFamily: "BYekan", fontWeight: "bold" }}
        >
          صفحه اصلی
        </h1>
      </main>
    </>
  );
}
