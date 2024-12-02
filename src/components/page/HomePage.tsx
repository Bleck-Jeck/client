import React from "react";
import { CarouselLoader } from "./home/CarouselLoader"; // Поменяли путь и название компонента
import AllGenres from "../AllGenres"; // Путь остается правильным
import Hero from "./home/Hero";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <main className="flex min-h-screen flex-col items-center justify-center">
        <section className="my-5 max-w-7xl w-full mx-auto">
          <h3 className="text-2xl mb-4 px-2 font-semibold text-black">Фильмы</h3>
          <div className="overflow-hidden text-black">
            <CarouselLoader type="MOVIE" sortBy="shikimori_rating" /> {/* Обновили на CarouselLoader */}
          </div>
        </section>

        <section className="my-5 max-w-7xl w-full mx-auto">
          <h3 className="text-2xl mb-4 px-2 font-semibold text-black">Смотрят сейчас</h3>
          <div className="overflow-hidden text-black">
            <CarouselLoader type="SERIES" sortBy="year" /> {/* Обновили на CarouselLoader */}
          </div>
        </section>

        <section className="my-5 max-w-7xl w-full mx-auto">
          <h3 className="text-2xl mb-4 px-2 font-semibold text-black">Популярные на Anifid</h3>
          <div className="overflow-hidden text-black">
            <CarouselLoader type="SERIES" sortBy="shikimori_rating" /> {/* Обновили на CarouselLoader */}
          </div>
        </section>

        <section className="my-5 max-w-7xl w-full mx-auto">
          <h3 className="text-2xl mb-4 px-2 font-semibold text-black">Анонсы</h3>
          <div className="overflow-hidden text-black">
            <CarouselLoader type="SERIES" /> {/* Обновили на CarouselLoader */}
          </div>
        </section>

        <section className="my-5 max-w-7xl w-full mx-auto">
          <h3 className="text-2xl mb-4 px-5 font-semibold">Жанры</h3>
          <div className="overflow-hidden">
            <AllGenres />
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;

