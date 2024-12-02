// src/app/page.tsx
import React from "react";
import HomePage from "../components/page/HomePage";

export const metadata = {
  description: 'Кинотеатр онлайн предоставляет доступ к широкому выбору фильмов и сериалов прямо из вашего дома. Наслаждайтесь высококачественным контентом...',
  openGraph: {
    type: 'website',
  }
};

export default function Home() {
  return (
    <div>
      <HomePage />
    </div>
  );
}

