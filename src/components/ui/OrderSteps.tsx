"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Custom hook for intersection observer
function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        rootMargin: "-20% 0px -20% 0px",
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [options]);

  return [ref, isIntersecting] as const;
}

export default function OrderSteps() {
  const [ref1, isVisible1] = useIntersectionObserver();
  const [animationStarted, setAnimationStarted] = useState(false);

  // State for sequential text and image display
  const [visibleTexts, setVisibleTexts] = useState<number[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(-1);
  const [showImage, setShowImage] = useState(false);
  const images = [
    "/images/1.png",
    "/images/2.png",
    "/images/3.png",
    "/images/4.png",
    "/images/5.png",
  ];

  // Sequential text animation when section becomes visible
  useEffect(() => {
    if (isVisible1 && !animationStarted) {
      setAnimationStarted(true);

      // Disable scrolling using a more reliable method
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";

      // Prevent scroll events
      const preventScroll = (e: Event) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
      };

      // Add event listeners to prevent scrolling
      document.addEventListener("wheel", preventScroll, { passive: false });
      document.addEventListener("touchmove", preventScroll, { passive: false });
      document.addEventListener("keydown", (e) => {
        if (
          e.key === "ArrowUp" ||
          e.key === "ArrowDown" ||
          e.key === "PageUp" ||
          e.key === "PageDown" ||
          e.key === "Home" ||
          e.key === "End"
        ) {
          e.preventDefault();
        }
      });

      // Start the sequential animation
      const animateTexts = async () => {
        for (let i = 1; i <= 6; i++) {
          await new Promise((resolve) => setTimeout(resolve, 2000)); // 2000ms delay between each text
          setVisibleTexts((prev) => [...prev, i]);

          // Show corresponding image immediately after text appears
          if (i <= 5) {
            // Only show images for steps 1-5
            setCurrentImageIndex(i - 1);
            setShowImage(true);
          }
        }

        // Re-enable scrolling after all animations complete
        setTimeout(() => {
          document.body.style.overflow = originalStyle;
          document.removeEventListener("wheel", preventScroll);
          document.removeEventListener("touchmove", preventScroll);
        }, 1000); // Wait 1 second after last item appears
      };

      animateTexts();
    }
  }, [isVisible1, animationStarted]);

  // Sequential image fade-in effect
  useEffect(() => {
    if (currentImageIndex >= 0) {
      setShowImage(false);
      const timeout = setTimeout(() => {
        setShowImage(true);
      }, 50); // 50ms delay for transition trigger
      return () => clearTimeout(timeout);
    }
  }, [currentImageIndex]);

  // Smooth scroll to center the content when section becomes visible
  useEffect(() => {
    if (isVisible1 && !animationStarted) {
      // Smooth scroll to center the section in the viewport
      const section = document.getElementById("guide");
      if (section) {
        setTimeout(() => {
          const rect = section.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const scrollTop =
            window.pageYOffset || document.documentElement.scrollTop;
          const targetScrollTop =
            scrollTop + rect.top - windowHeight / 2 + rect.height / 2;

          // Add offset for mobile to account for smaller screens
          const isMobile = window.innerWidth < 768;
          const mobileOffset = isMobile ? -50 : 0;

          window.scrollTo({
            top: targetScrollTop + mobileOffset,
            behavior: "smooth",
          });
        }, 100);
      }
    }
  }, [isVisible1, animationStarted]);

  // Scroll to top on page refresh
  useEffect(() => {
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    // Scroll to top when component mounts (page refresh)
    window.scrollTo(0, 0);

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  // Cleanup on component unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
      // Remove any event listeners that might still be active
      const preventScroll = (e: Event) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
      };
      document.removeEventListener("wheel", preventScroll);
      document.removeEventListener("touchmove", preventScroll);
    };
  }, []);

  return (
    <section
      id="guide"
      className="w-full flex flex-col items-center justify-center py-8 md:py-16 bg-white relative overflow-hidden"
      style={{
        scrollSnapAlign: "start",
        minHeight: "100vh",
        scrollSnapStop: "always",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Title */}
      <h2
        className="text-2xl md:text-3xl lg:text-5xl font-extrabold mb-6 md:mb-10 text-center px-4"
        style={{ fontFamily: "BYekan", fontWeight: "bold", lineHeight: "1.3" }}
      >
        <span className="underline-pink mx-2"> نحوه سفارش از بات</span>
      </h2>
      <div
        id="order-steps-content"
        className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 w-full max-w-5xl relative mx-auto px-4"
        style={{ minHeight: "60vh" }}
      >
        {/* Sequential Images */}
        <div className="relative flex items-center justify-center order-2 md:order-1">
          {currentImageIndex >= 0 && currentImageIndex < images.length && (
            <div
              className={`transition-all duration-1000 ease-out ${
                showImage ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <Image
                src={images[currentImageIndex]}
                alt={`Step ${currentImageIndex + 1}`}
                width={300}
                height={600}
                className="z-10 rounded-lg shadow-lg w-64 md:w-auto"
                priority
              />
            </div>
          )}
        </div>
        {/* Steps List */}
        <ul
          className="flex flex-col gap-4 md:gap-6 text-lg md:text-2xl lg:text-3xl font-bold text-right order-1 md:order-2 w-full md:w-auto"
          style={{ fontFamily: "BYekan", fontWeight: "bold" }}
        >
          <li
            ref={ref1}
            className={`flex items-center gap-2 justify-end transition-all duration-1000 ease-out ${
              visibleTexts.includes(1)
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            /start نوشتن
            <Image
              src="/images/G.png"
              alt="G"
              width={32}
              height={32}
              className="inline-block"
            />
          </li>
          <li
            className={`flex items-center gap-2 justify-end transition-all duration-1000 ease-out ${
              visibleTexts.includes(2)
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            انتخاب فروشگاه
            <Image
              src="/images/S.png"
              alt="S"
              width={32}
              height={32}
              className="inline-block"
            />
          </li>
          <li
            className={`flex items-center gap-2 justify-end transition-all duration-1000 ease-out ${
              visibleTexts.includes(3)
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            لینک محصول انتخاب کنید{" "}
            <Image
              src="/images/T.png"
              alt="T"
              width={32}
              height={32}
              className="inline-block"
            />
          </li>
          <li
            className={`flex items-center gap-2 justify-end transition-all duration-1000 ease-out ${
              visibleTexts.includes(4)
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            انتخاب رنگ و سایز
            <Image
              src="/images/y.png"
              alt="Y"
              width={32}
              height={32}
              className="inline-block"
            />
          </li>
          <li
            className={`flex items-center gap-2 justify-end transition-all duration-1000 ease-out ${
              visibleTexts.includes(5)
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            ارسال کنید gstyle_support@ به{" "}
            <Image
              src="/images/L.png"
              alt="L"
              width={32}
              height={32}
              className="inline-block"
            />
          </li>
          <li
            className={`flex items-center gap-2 justify-end transition-all duration-1000 ease-out ${
              visibleTexts.includes(6)
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            به درگاه پرداخت وصل بشد
            <Image
              src="/images/E.png"
              alt="E"
              width={32}
              height={32}
              className="inline-block"
            />
          </li>
        </ul>
      </div>

      {/* G.png decorative image on the far right */}
      <Image
        src="/images/G.png"
        alt="G logo"
        width={240}
        height={360}
        className="hidden lg:block absolute right-5 top-[55%] -translate-y-1/2 opacity-20 z-0 pointer-events-none select-none"
        style={{ filter: "blur(0.5px)" }}
      />
      {/* S.png decorative image on the far left */}
      <Image
        src="/images/S.png"
        alt="S logo"
        width={240}
        height={360}
        className="hidden lg:block absolute left-5 top-[20%] -translate-y-1/2 opacity-20 z-0 pointer-events-none select-none"
        style={{ filter: "blur(0.5px)" }}
      />
    </section>
  );
}
