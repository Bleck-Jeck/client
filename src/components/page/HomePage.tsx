import React from "react";
import { Carousel } from "./home/Carousel";
import AllGenres from "../all-genere";
import Hero from "./home/Hero";

export default async function HomePage() {
  return (
  <div>
  <Hero />
   <main className="flex min-h-screen flex-col items-center justify-center ">
      <section className="my-5 max-w-7xl w-full mx-auto">
        <h3 className="text-2xl mb-4 px-2 font-semibold text-black">Фильмы</h3>
        <div className="overflow-hidden text-black ">
          <Carousel type="MOVIE" sortBy="shikimori_rating" />
        </div>
      </section>

      <section className="my-5 max-w-7xl w-full mx-auto">
        <h3 className="text-2xl mb-4 px-2 font-semibold text-black">Смотрят сайчас</h3>
        <div className="overflow-hidden text-black">
          <Carousel type="SERIES" sortBy="year" />
        </div>
      </section>
      <section className="my-5 max-w-7xl w-full mx-auto">
        <h3 className="text-2xl mb-4 px-2 font-semibold text-black"> Популярные на Anifid</h3>
        <div className="overflow-hidden text-black">
          <Carousel type="SERIES"  sortBy="shikimori_rating" />
        </div>
      </section>
      <section className="my-5 max-w-7xl w-full mx-auto">
        <h3 className="text-2xl mb-4 px-2 font-semibold text-black">Анонасы</h3>
        <div className="overflow-hidden text-black">
          <Carousel type="SERIES" />
        </div>
      </section>
      {/* <section className="my-5">
          <h3 className="text-2xl mb-4 px-5 font-semibold">Для детей +6</h3>
          <div className="overflow-hidden ma">
          <Carousel type="movie"/>
          </div>
        </section>
        <section className="my-5">
          <h3 className="text-2xl mb-4 px-5 font-semibold">Топ месяца</h3>
          <div className="overflow-hidden ma">

          <Carousel type="movie"/>
          </div>
        </section> */}
      <section className="my-5 max-w-7xl w-full mx-auto">
        <h3 className="text-2xl mb-4 px-5 font-semibold">Жанры</h3>
        <div className="overflow-hidden ">
          <AllGenres />
          <div></div>
        </div>
      </section>
    </main>
  </div>
  );
}
