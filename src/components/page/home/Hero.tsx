import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-[#141414] text-white">
      <div className="max-w-screen-xl mx-auto px-6">
        <main className="grid lg:grid-cols-2 place-items-center gap-[140px] py-16 md:py-24 ">
          {/* Изображение */}
          <div className="hidden md:block">
            <Image
              src="/hero.png"
              alt="Лист картинок аниме"
              sizes="(max-width: 1024px) 100vw, 620px"
              priority
              width={520}
              height={424}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Текст */}
          <div className="w-[500px]">
            <h1 className="text-3xl md:text-4xl xl:text-5xl font-extrabold leading-tight tracking-tight">
              Добро пожаловать на сайт <span className="text-red-500">Anifid</span>!
            </h1>
            <p className="text-base md:text-lg mt-6 text-gray-400 max-w-lg">
              У нас вы найдете всё лучшее в одном месте, доступное для онлайн
              просмотра в хорошем качестве.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

