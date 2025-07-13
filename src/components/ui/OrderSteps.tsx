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
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px",
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
    if (isVisible1 && visibleTexts.length === 0) {
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
      };

      animateTexts();
    }
  }, [isVisible1, visibleTexts.length]);

  // Prevent scrolling during animation and keep items visible once shown
  useEffect(() => {
    if (isVisible1 && visibleTexts.length === 0) {
      // Disable scrolling when animation starts
      document.body.style.overflow = "hidden";

      // Smooth scroll to center the content within the section
      const contentDiv = document.getElementById("order-steps-content");
      if (contentDiv) {
        contentDiv.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }

      // Start the sequential animation after scrolling
      setTimeout(() => {
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

          // Re-enable scrolling after animation completes
          setTimeout(() => {
            document.body.style.overflow = "auto";
          }, 1000); // Wait 1 second after last item appears
        };

        animateTexts();
      }, 500); // Wait for scroll to complete
    }
  }, [isVisible1, visibleTexts.length]);

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
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <section
      className="w-full flex flex-col items-center justify-center py-16 bg-white relative overflow-x-hidden"
      style={{
        scrollSnapAlign: "start",
        minHeight: "100vh",
        scrollSnapStop: "always",
      }}
    >
      {/* Title */}
      <h2
        className="text-3xl md:text-5xl font-extrabold mb-10 text-center"
        style={{ fontFamily: "BYekan", fontWeight: "bold", lineHeight: "1.3" }}
      >
        <span className="underline-pink mx-2"> نحوه سفارش از بات</span>
      </h2>
      <div
        id="order-steps-content"
        className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-5xl relative"
      >
        {/* Sequential Images */}
        <div className="relative flex items-center justify-center">
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
                className="z-10 rounded-lg shadow-lg"
                priority
              />
            </div>
          )}
        </div>
        {/* Steps List */}
        <ul
          className="flex flex-col gap-6 text-2xl md:text-3xl font-bold text-right"
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
        className="hidden md:block absolute right-5 top-[55%] -translate-y-1/2 opacity-20 z-0 pointer-events-none select-none"
        style={{ filter: "blur(0.5px)" }}
      />
      {/* S.png decorative image on the far left */}
      <Image
        src="/images/S.png"
        alt="S logo"
        width={240}
        height={360}
        className="hidden md:block absolute left-5 top-[20%] -translate-y-1/2 opacity-20 z-0 pointer-events-none select-none"
        style={{ filter: "blur(0.5px)" }}
      />
    </section>
  );
}
