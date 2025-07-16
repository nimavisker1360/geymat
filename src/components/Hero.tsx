import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-between py-12 md:py-24 px-4 md:px-16 bg-white">
      {/* ستون چپ: متن */}
      <div className="w-full md:w-1/2 flex flex-col items-end text-right md:pr-2 justify-end ">
        <h1 className="text-3xl md:text-6xl font-extrabold mb-5 leading-normal">
          از <span className="underline-purple">برند</span> محبوبت خرید کن
          <br />
          <span />
          !تحویلت میده
          <span className="underline-green ">جی استایل</span>
          <span />
        </h1>
        <p className="text-base md:text-xlg text-gray-700 mb-8 max-w-md">
          <span className="underline-purple" />
          اولین بات تلگرامی سرچ محصولات از برندهای معروف ترکیه مشاهده بهترین
          قیمت ها و سفارش محصولات شامل لباس و پوشاک ومحصولات آرایشی و بهداشتی
          میباشد این بات طوری طراحی شده که با کمک هوش مصنوعی از بین محصولات
          معروف ترکیه بهترین قیمت پیدا میکند و عکس محصول و قیمت و همچنین لینک
          ورود به وبسایت براتون میفرسته
        </p>
        <div className="w-2/3 flex justify-end mt-4">
          <a
            href="https://t.me/NimaRealTrade_Bot"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
          >
            <button className="w-full bg-[#1976d2] text-white px-8 py-3 rounded-lg flex items-center justify-end gap-2 text-lg font-bold hover:bg-[#115293] transition">
              <span className="flex items-center gap-2 w-full justify-between">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="white"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.036 16.572l-.397 3.77c.57 0 .816-.246 1.115-.543l2.67-2.558 5.534 4.04c1.014.56 1.74.266 1.99-.94l3.61-16.84c.33-1.53-.553-2.13-1.54-1.76L2.16 9.68c-1.5.59-1.48 1.43-.256 1.81l4.6 1.44 10.68-6.74c.5-.32.96-.14.58.2" />
                </svg>
                <span>اتصال به بات تلگرام</span>
              </span>
            </button>
          </a>
        </div>
      </div>
      {/* ستون راست: تصویر */}
      <div className="w-full md:w-1/2 flex justify-start md:justify-center mt-10 md:mt-0 md:pl-8">
        <Image
          src="/images/banner.png"
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
