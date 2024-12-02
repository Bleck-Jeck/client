import React from "react";
import CardMini from "@/src/components/cards/CardMini"; // Компонент карточки для показа контента

export default async function ContentPage() {

  return (
    <div className="max-w-7xl mx-auto">
      <section className="my-20">
        <h3 className="text-2xl mb-4 px-5 font-semibold text-black">Привет, тут скоро будет контент!</h3>
        
        {/* Здесь будут отображаться карточки с контентом */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Можно динамически генерировать карточки с помощью данных */}
          {[...Array(4)].map((_, index) => (
            <CardMini key={index} title={`Контент ${index + 1}`} imageUrl="some-image-url.jpg" />
          ))}
        </div>
      </section>
    </div>
  );
}

