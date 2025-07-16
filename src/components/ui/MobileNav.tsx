"use client";

import { useEffect, useState } from "react";

export default function MobileNav({
  open,
  onExited,
  setShowSupportModal,
}: {
  open: boolean;
  onExited?: () => void;
  setShowSupportModal?: (show: boolean) => void;
}) {
  const navLinks = [
    { href: "#brands", label: "برندها" },
    { href: "#guide", label: "راهنمای خرید" },
    { href: "#faq", label: "پرسش های متداول" },
    { href: "#support", label: "پشتیبانی" },
    { href: "#reviews", label: "نظرات مشتریان" },
  ];

  const [showPanel, setShowPanel] = useState(open);
  const [shouldRender, setShouldRender] = useState(open);

  useEffect(() => {
    if (open) {
      setShouldRender(true);
      setTimeout(() => setShowPanel(true), 10); // allow mount before animating
      // Prevent body scroll when mobile menu is open
      document.body.style.overflow = "hidden";
    } else {
      setShowPanel(false);
      setTimeout(() => {
        setShouldRender(false);
        if (onExited) onExited();
      }, 400); // match transition duration
      // Restore body scroll when mobile menu closes
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open, onExited]);

  const handleLinkClick = (href: string) => {
    // Close the mobile menu first
    if (onExited) onExited();

    // Handle support modal
    if (href === "#support" && setShowSupportModal) {
      setTimeout(() => {
        setShowSupportModal(true);
      }, 450); // Wait for menu close animation to complete
      return;
    }

    // Wait a bit for the menu to close, then scroll
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 450); // Wait for menu close animation to complete
  };

  if (!shouldRender) return null;

  return (
    <div className="md:hidden">
      {/* بک‌دراپ */}
      <div
        className={`fixed inset-0 backdrop-blur-sm z-40 transition-opacity duration-400 ${
          showPanel ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onExited}
      />
      {/* سایدبار */}
      <aside
        className={`fixed top-0 right-0 h-full w-4/5 max-w-xs bg-white z-50 shadow-lg transition-transform duration-400 ease-in-out ${
          showPanel ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ minHeight: 180 }}
      >
        {/* دکمه بستن */}
        <button
          className="absolute left-4 top-4 text-3xl text-gray-700 hover:text-pink-400 focus:outline-none"
          onClick={onExited}
          aria-label="بستن منو"
        >
          ×
        </button>
        <nav className="p-6 pt-16">
          <ul className="divide-y divide-gray-200">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleLinkClick(link.href)}
                  className="block w-full text-lg font-bold text-gray-800 hover:text-[#f7b6d2] transition-colors py-4 text-right"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        {/* Social Icons */}
        <div className="flex items-center gap-6 justify-center pb-8">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition group"
            aria-label="Instagram"
          >
            {/* Instagram Icon */}
            <svg
              className="w-7 h-7 text-gray-800 group-hover:text-[#a259c1]"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <rect
                x="2"
                y="2"
                width="20"
                height="20"
                rx="6"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle
                cx="12"
                cy="12"
                r="5"
                stroke="currentColor"
                strokeWidth="2"
              />
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
            </svg>
          </a>
          <a
            href="https://t.me/gstyle_support"
            target="_blank"
            rel="noopener noreferrer"
            className="transition group"
            aria-label="Telegram"
          >
            {/* Telegram Icon */}
            <svg
              className="w-7 h-7 text-gray-800 group-hover:text-[#1976d2]"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                d="M9.036 16.572l-.397 3.77c.57 0 .816-.246 1.115-.543l2.67-2.558 5.534 4.04c1.014.56 1.74.266 1.99-.94l3.61-16.84c.33-1.53-.553-2.13-1.54-1.76L2.16 9.68c-1.5.59-1.48 1.43-.256 1.81l4.6 1.44 10.68-6.74c.5-.32.96-.14.58.2"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </a>
        </div>
      </aside>
    </div>
  );
}
