import { getPropertyValue } from "@/src/util/movieUtils";
import { Suspense } from "react";
import { Metadata, ResolvingMetadata } from 'next'
import RelatedProducts from "./RelatedProducts";
import { getUrqlClient } from "@/src/libs/urql";
import { GetContentByIdDocument, GetContentByIdQuery, GetContentByIdQueryVariables } from "@/src/graphql/operations";
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

export async function getAllMovies() {
  const { client } = getUrqlClient();
  const result = await client.query<GetContentByIdQuery, GetContentByIdQueryVariables>(
    GetContentByIdDocument,
    {
    getContentByIdId: 2
    }
    
  );
  
  return result.data?.getContentById;
}

export async function generateStaticParams() {
  const movies = await getAllMovies();
  
  
  return movies?.id || [];
}

export async function generateMetadata(
  { params }: { params: { handle: string } },
  parent: ResolvingMetadata,
  movie: Movie
): Promise<Metadata> {
  try {
    const handle = params.handle;
    
    
    const searchResults: any = await getPropertyValue(handle);
   
   

    if (!searchResults) {
      throw new Error("Фильм не найден");
    }

    const previousImages = (await parent).openGraph?.images || [];

    return {
      title: searchResults.title,
      description: searchResults.description,
      openGraph: {
        images: ['/opengraphql-image.png', ...previousImages],
      },
    };
  } catch (error) {
    console.error("Ошибка при получении метаданных:", error);
    // Возвращаем метаданные с информацией об ошибке
    return {
      title: "Ошибка",
      description: "Произошла ошибка при получении метаданных",
      openGraph: {
        images: [], // Пустой массив изображений или можно добавить изображение для ошибки
      },
    };
  }
}


export default function MoviePage({
  params,
}: {
  params: { handle: string };
}) {
  // Имитация ожидания загрузки
  delay(1000)

  return (
    <div className="fit pt-10 mx-auto">
      <Suspense fallback={<div>Loading...</div>}>
        <RelatedProducts handle={params.handle} />
      </Suspense>
    </div>
  );
}
