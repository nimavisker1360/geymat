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
              className="hover:opacity-70 transition"
            >
              <Instagram className="w-6 h-6 text-gray-800" />
            </a>
            <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition"
            >
              <Send className="w-6 h-6 text-gray-800" />
            </a>
          </div>
          {/* Nav Links */}
          <ul className="flex items-center gap-8 text-base md:text-lg font-medium text-gray-800">
            <li>
              <a href="#brands" className="hover:text-black transition">
                برندها
              </a>
            </li>
            <li>
              <a href="#guide" className="hover:text-black transition">
                راهنمای خرید
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-black transition">
                پرسش های متداول
              </a>
            </li>
            <li>
              <a href="#support" className="hover:text-black transition">
                پشتیبانی
              </a>
            </li>
            <li>
              <a href="#reviews" className="hover:text-black transition">
                نظرات مشتریان
              </a>
            </li>
          </ul>
          {/* Logo Placeholder */}
          <div className="flex items-center">
            <span
              className="text-3xl font-extrabold tracking-widest"
              style={{ fontFamily: "BYekan", fontWeight: "bold" }}
            >
              ق.ی.م.ت
            </span>
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
