import { Suspense } from "react";
import { Metadata, ResolvingMetadata } from "next";
import ContentDetails from "./ContentDetails";
import { getContentById } from "@/src/util/contentService";
import { delay } from "@/src/libs/utils";

// Генерация статических маршрутов
export async function generateStaticParams() {
  const content = await getContentById(2); // Пример ID контента
  return content?.content_id ? [{ handle: content.content_id.toString() }] : [];
}

// Генерация метаданных
export async function generateMetadata(
  { params }: { params: { handle: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  try {
    const content = await getContentById(Number(params.handle));
    if (!content) throw new Error("Контент не найден");

    const previousImages = (await parent).openGraph?.images || [];
    return {
      title: content.title || "Контент",
      description: content.summary || "Описание отсутствует.",
      openGraph: {
        images: [content.poster_url || "/default-poster.png", ...previousImages],
      },
    };
  } catch (error) {
    console.error("Ошибка при генерации метаданных:", error);
    return {
      title: "Ошибка",
      description: "Произошла ошибка при генерации метаданных",
      openGraph: { images: [] },
    };
  }
}

// Основной компонент страницы контента
export default function ContentPage({ params }: { params: { handle: string } }) {
  delay(1000); // Имитация загрузки

  return (
    <div className="fit pt-5 mx-auto">
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen text-xl font-semibold">
            Загрузка контента...
          </div>
        }
      >
        <ContentDetails handle={params.handle} />
      </Suspense>
    </div>
  );
}

