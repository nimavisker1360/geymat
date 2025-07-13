import Image from "next/image";

export default function OrderSteps() {
  return (
    <section className="w-full flex flex-col items-center justify-center py-16 bg-white relative overflow-x-hidden">
      {/* Title */}
      <h2
        className="text-3xl md:text-5xl font-extrabold mb-10 text-center"
        style={{ fontFamily: "BYekan", fontWeight: "bold", lineHeight: "1.3" }}
      >
        <span className="underline-pink mx-2"> نحوه سفارش از بات</span>
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-5xl relative">
        {/* Mobile Frame */}
        <div className="relative flex items-center justify-center">
          <Image
            src="/images/mobileFrame.png"
            alt="موبایل سفارش"
            width={300}
            height={600}
            className="z-10"
            priority
          />
        </div>
        {/* Steps List */}
        <ul
          className="flex flex-col gap-6 text-2xl md:text-3xl font-bold text-right"
          style={{ fontFamily: "BYekan", fontWeight: "bold" }}
        >
          <li className="flex items-center gap-2 justify-end">
            ثبت نام
            <Image
              src="/images/G.png"
              alt="G"
              width={32}
              height={32}
              className="inline-block"
            />
          </li>
          <li className="flex items-center gap-2 justify-end">
            انتخاب فروشگاه
            <Image
              src="/images/S.png"
              alt="S"
              width={32}
              height={32}
              className="inline-block"
            />
          </li>
          <li className="flex items-center gap-2 justify-end">
            افزودن به سبد خرید
            <Image
              src="/images/T.png"
              alt="T"
              width={32}
              height={32}
              className="inline-block"
            />
          </li>
          <li className="flex items-center gap-2 justify-end">
            انتخاب رنگ و سایز
            <Image
              src="/images/y.png"
              alt="Y"
              width={32}
              height={32}
              className="inline-block"
            />
          </li>
          <li className="flex items-center gap-2 justify-end">
            تعیین آدرس و پرداخت
            <Image
              src="/images/L.png"
              alt="L"
              width={32}
              height={32}
              className="inline-block"
            />
          </li>
          <li className="flex items-center gap-2 justify-end">
            پایان سفارش
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
