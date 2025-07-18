import React, { useRef, useState } from "react";

const testimonials = [
  {
    name: "شیرین",
    city: "تهران بزرگ",
    text: "من یجورایی به خرید کردن اعتیاد دارم. متاسفانه وقتی یویو اومده تو زندگیم این اعتیادم چند برابر شده! خخخخخ بی شوخی خیلی خوشحالم که پیداتون کردم.",
    avatar: "/images/shirin.png",
  },
  {
    name: "مهسا",
    city: "تهران بزرگ",
    text: "جی استایل کلی دغدغه که موقع سفارش دادن داشتم رو حل کرد. مرسی از تیم خوبتون، همیشه همینقدر خفن بمونین.",
    avatar: "/images/mahsa.png",
  },
  {
    name: "دانیال",
    city: "اصفهان نصف جهان",
    text: "کیفیت خدماتی که به من ارائه شد بیش از حد انتظارم بود. ممنون از تیم حرفه‌ای یویو.",
    avatar: "/images/danial.png",
  },
  {
    name: "سارا",
    city: "مشهد",
    text: "پشتیبانی عالی و ارسال سریع. واقعاً راضی بودم.",
    avatar: "/images/sara.png",
  },
  {
    name: "علی",
    city: "تبریز",
    text: "محصولات با کیفیت و قیمت مناسب. پیشنهاد می‌کنم!",
    avatar: "/images/ali.png",
  },
  {
    name: "نگین",
    city: "شیراز",
    text: "خیلی راحت و سریع سفارش دادم. ممنون از تیم خوبتون.",
    avatar: "/images/negin.png",
  },
];

const CARD_WIDTH = 420; // px, more rectangular
const CARD_GAP = 32; // px

interface TestimonialsProps {
  id?: string;
}

export default function Testimonials({ id }: TestimonialsProps) {
  const [current, setCurrent] = useState(0);
  const cardCount = testimonials.length;
  const startX = useRef(0);
  const [dragging, setDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Handle transition state
  const handleTransitionStart = () => {
    setIsTransitioning(true);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  // Improved drag logic with better sensitivity
  function handleDragStart(e: React.MouseEvent) {
    setDragging(true);
    startX.current = e.clientX;
    setDragOffset(0);
  }

  function handleDrag(e: React.MouseEvent) {
    if (!dragging) return;
    const currentOffset = e.clientX - startX.current;

    // Limit drag range to prevent excessive movement
    const maxDrag = CARD_WIDTH + CARD_GAP;
    const clampedOffset = Math.max(-maxDrag, Math.min(maxDrag, currentOffset));
    setDragOffset(clampedOffset);
  }

  // Drag and navigation logic with modulo for infinite loop
  function handleDragEnd(e: React.MouseEvent) {
    if (!dragging) return;
    setDragging(false);
    const diff = e.clientX - startX.current;
    setDragOffset(0);
    if (diff > 40) {
      setCurrent((prev) => (prev - 1 + cardCount) % cardCount);
    } else if (diff < -40) {
      setCurrent((prev) => (prev + 1) % cardCount);
    }
  }

  // Touch events for mobile
  function handleTouchStart(e: React.TouchEvent) {
    setDragging(true);
    startX.current = e.touches[0].clientX;
    setDragOffset(0);
  }

  function handleTouchMove(e: React.TouchEvent) {
    if (!dragging) return;
    const currentOffset = e.touches[0].clientX - startX.current;

    // Limit drag range to prevent excessive movement
    const maxDrag = CARD_WIDTH + CARD_GAP;
    const clampedOffset = Math.max(-maxDrag, Math.min(maxDrag, currentOffset));
    setDragOffset(clampedOffset);
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (!dragging) return;
    setDragging(false);
    const diff = e.changedTouches[0].clientX - startX.current;
    setDragOffset(0);
    if (diff > 40) {
      setCurrent((prev) => (prev - 1 + cardCount) % cardCount);
    } else if (diff < -40) {
      setCurrent((prev) => (prev + 1) % cardCount);
    }
  }

  // Only show 3 visible testimonials at a time, using modulo for infinite loop
  const visibleTestimonials = [0, 1, 2].map(
    (i) => testimonials[(current + i) % testimonials.length]
  );

  return (
    <section
      id={id}
      className="w-full flex flex-col items-center justify-center py-12 bg-white overflow-hidden"
      style={{ direction: "rtl" }}
    >
      <div className="flex flex-row-reverse items-center justify-center mb-8 gap-4">
        <img
          src="/images/comment.png"
          alt="نظر مشتریان"
          style={{
            width: 220,
            height: 220,
            objectFit: "contain",
            marginLeft: 24,
          }}
        />
        <h2
          className="text-3xl md:text-4xl font-extrabold"
          style={{
            fontFamily: "BYekan",
            fontWeight: "bold",
            position: "relative",
            display: "inline-block",
          }}
        >
          <span style={{ position: "relative", display: "inline-block" }}>
            <span
              style={{
                position: "absolute",
                left: "50%",
                bottom: -6,
                transform: "translateX(-50%)",
                width: "110%",
                height: 18,
                background: "#f7b6d2",
                zIndex: 0,
                content: "",
                display: "block",
              }}
              aria-hidden="true"
            />
            <span style={{ color: "#222", position: "relative", zIndex: 1 }}>
              نظرات مشتریان
            </span>
          </span>
        </h2>
      </div>
      <div
        className="relative w-full flex justify-center"
        style={{ minHeight: 260 }}
      >
        <div
          className="overflow-hidden"
          style={{ width: 3 * (CARD_WIDTH + CARD_GAP), margin: "0 auto" }}
        >
          <div
            className="flex items-center select-none"
            style={{
              transform: `translateX(${dragOffset}px)`,
              transition: dragging
                ? "none"
                : "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              width: 3 * (CARD_WIDTH + CARD_GAP),
              cursor: dragging ? "grabbing" : "grab",
              userSelect: "none",
              touchAction: "pan-y",
            }}
            onMouseDown={handleDragStart}
            onMouseMove={handleDrag}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onTransitionStart={handleTransitionStart}
            onTransitionEnd={handleTransitionEnd}
          >
            {visibleTestimonials.map((t, idx) => (
              <div
                key={t.name + idx}
                className={`relative bg-white border border-black shadow px-10 py-8 mx-4 flex flex-col items-start justify-between`}
                style={{
                  minWidth: CARD_WIDTH,
                  maxWidth: CARD_WIDTH,
                  height: 220,
                  opacity: 1,
                  boxShadow:
                    "0 8px 40px 0 rgba(0,0,0,0.12), 0 0 0 4px #f7b6d233",
                  border: "2px solid #f7b6d2",
                  transition: "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  transform: dragging ? "scale(0.98)" : "scale(1)",
                  filter: dragging ? "brightness(0.95)" : "brightness(1)",
                  direction: "rtl",
                  background: "#fff",
                }}
                draggable={false}
              >
                {/* Card content (no purple bar div anymore) */}
                <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
                  <div className="flex flex-row items-start gap-3 mb-4 w-full justify-start">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover border border-gray-100"
                      draggable={false}
                      style={{
                        width: 80,
                        height: 80,
                        objectFit: "cover",
                        transition: "transform 0.3s ease",
                      }}
                    />
                    <div className="flex flex-col items-start text-left">
                      <span
                        className="font-bold text-lg"
                        style={{ fontFamily: "BYekan" }}
                      >
                        {t.name}
                      </span>
                      <span className="text-sm text-gray-500">{t.city}</span>
                    </div>
                  </div>
                  <p
                    className="text-base text-gray-700 text-right"
                    style={{ fontFamily: "BYekan" }}
                  >
                    {t.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Pills navigation and arrow buttons */}
      <div className="flex flex-col items-center mt-8 gap-6">
        {/* Pills */}
        <div className="flex gap-4 mb-2">
          {testimonials.slice(0, 5).map((_, idx) => (
            <span
              key={idx}
              className={`inline-block w-6 h-3 rounded-full border border-black transition-all duration-300 ease-out ${
                idx === current ? "bg-black scale-110" : "bg-white scale-100"
              }`}
              style={{ borderWidth: 2 }}
            />
          ))}
        </div>
        {/* Arrow Buttons */}
        <div className="flex gap-8 justify-center">
          <button
            onClick={() =>
              setCurrent((prev) => (prev - 1 + cardCount) % cardCount)
            }
            className="w-16 h-16 rounded-full bg-black flex items-center justify-center text-white text-2xl focus:outline-none hover:scale-110 active:scale-95 transition-all duration-200 ease-out shadow-lg hover:shadow-xl"
            aria-label="قبلی"
            disabled={isTransitioning}
          >
            {/* Left arrow */}
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="10 6 16 12 10 18" />
            </svg>
          </button>

          <button
            onClick={() => setCurrent((prev) => (prev + 1) % cardCount)}
            className="w-16 h-16 rounded-full bg-black flex items-center justify-center text-white text-2xl focus:outline-none hover:scale-110 active:scale-95 transition-all duration-200 ease-out shadow-lg hover:shadow-xl"
            aria-label="بعدی"
            disabled={isTransitioning}
          >
            {/* Right arrow */}
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="14 6 8 12 14 18" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
