import { Suspense } from "react";
import { Metadata, ResolvingMetadata } from "next";
import RelatedProducts from "./RelatedProducts";
import { getUrqlClient } from "@/src/libs/urql";
import {
  GetContentByIdDocument,
  GetContentByIdQuery,
  GetContentByIdQueryVariables,
} from "@/src/graphql/operations";
import { delay } from "@/src/libs/utils";

interface Movie {
  title: string;
  description: string;
  poster?: string;
  year?: number;
  enTitle?: string;
  status?: string;
  duration?: number;
}

// Получение фильма по ID
export async function getAllMovies() {
  try {
    const { client } = getUrqlClient();
    const result = await client.query<GetContentByIdQuery, GetContentByIdQueryVariables>(
      GetContentByIdDocument,
      { getContentByIdId: 2 }
    );
    return result.data?.getContentById;
  } catch (error) {
    console.error("Ошибка при получении фильмов:", error);
    return null;
  }
}

// Генерация статических маршрутов
export async function generateStaticParams() {
  const movies = await getAllMovies();
  return movies?.id ? [movies.id.toString()] : [];
}

// Генерация метаданных
export async function generateMetadata(
  { params }: { params: { handle: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const handle = params.handle;

  try {
    const searchResults: any = await getPropertyValue(handle);
    if (!searchResults) throw new Error("Фильм не найден");

    const previousImages = (await parent).openGraph?.images || [];
    return {
      title: searchResults.title,
      description: searchResults.description,
      openGraph: {
        images: ["/opengraphql-image.png", ...previousImages],
      },
    };
  } catch (error) {
    console.error("Ошибка при получении метаданных:", error);
    return {
      title: "Ошибка",
      description: "Произошла ошибка при получении метаданных",
      openGraph: {
        images: [],
      },
    };
  }
}

// Основной компонент страницы фильма
export default function MoviePage({ params }: { params: { handle: string } }) {
  // Имитация ожидания загрузки
  delay(1000);

  return (
    <div className="fit pt-5 mx-auto">
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen text-xl font-semibold">
            Загрузка контента...
          </div>
        }
      >
        <RelatedProducts handle={params.handle} />
      </Suspense>
    </div>
  );
}

