// Home.tsx
import CardMini from "@/src/components/cards/CardMini";
import React from "react";

export default async function MoviePage() {

  return (
    <div className="max-w-7xl mx-auto">
        <section className="my-20">
          <h3 className="text-2xl mb-4 px-5 font-semibold text-black">Фильмы</h3>
          <CardMini type="MOVIE" initialPage={1} limit={20}/>
        </section>
    </div>
  );
}
