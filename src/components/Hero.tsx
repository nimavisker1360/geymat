import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between py-12 md:py-24 px-4 md:px-16 bg-white">
      {/* ستون چپ: متن */}
      <div className="w-full md:w-1/2 flex flex-col items-end text-right md:pr-2 justify-end ">
        <h1 className="text-3xl md:text-6xl font-extrabold mb-5 leading-normal">
          از <span className="underline-purple">برند</span> محبوبت خرید کن
          <br />
          <span>
            <span>تحویلت میده</span>{" "}
            <span className="underline-green ">قیمت</span>
          </span>
        </h1>
        <p className="text-base md:text-xlg text-gray-700 mb-8 max-w-md">
          قیمت رابطه‌ای برای خرید راحت از سایت برندهای محبوب پوشاک دنیا؛ که
          باهاش می‌تونید با استفاده از بات تلگرام به سبد خریدت اضافه‌ش کنید تا
          براتون تو کوتاه‌ترین زمان ممکن بفرستیمش
        </p>
        <div className="w-2/3 flex justify-end mt-4">
          <button className="w-full bg-black text-white px-8 py-3 rounded-lg flex items-center justify-center gap-2 text-lg font-bold hover:bg-gray-800 transition">
            <span className="icon-[mdi--telegram] text-2xl " />
            اتصال به بات تلگرام
          </button>
        </div>
      </div>
      {/* ستون راست: تصویر */}
      <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
        <Image
          src="/images/mobile.png"
          alt="ioio mobile preview"
          width={350}
          height={600}
          className="drop-shadow-xl rounded-2xl"
          priority
        />
      </div>
    </section>
  );
}
