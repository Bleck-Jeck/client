import { Metadata } from "next";
import MovieGridItems from "@/src/components/movie-grid-items";
import { defaultSort, sorting } from "@/src/libs/contact";
import {
  SearchContentDocument,
  SearchContentQuery,
  SearchContentQueryVariables,
} from "@/src/graphql/operations";
import { getUrqlClient } from "@/src/libs/urql";

export const metadata: Metadata = {
  title: "Поиск",
  description: "Поиск любимых сериалов и фильмов онлайн бесплатно.",
};

interface Movie {
  content_id: string;
  title: string;
  original_title?: string;
  release_date?: string;
  content_type?: string;
  age_rating?: string;
  mpaa_rating?: string;
  rating?: number;
  poster_url?: string;
  genres: { name: string }[];
}

async function fetchMovies(
  query: string,
  page: number = 1,
  limit: number = 20
): Promise<Movie[]> {
  try {
    const { client } = getUrqlClient();
    const result = await client
      .query<SearchContentQuery, SearchContentQueryVariables>(
        SearchContentDocument,
        { query, page, limit }
      )
      .toPromise();

    if (result.error) {
      console.error("GraphQL Error:", result.error.message);
      throw new Error(result.error.message);
    }

    const movies = result.data?.searchContent || [];
    console.log("Fetched Movies:", movies); // Лог для отладки
    return movies;
  } catch (error: any) {
    console.error("Error fetching movies:", error.message);
    return []; // Возвращаем пустой массив, чтобы избежать ошибок рендеринга
  }
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const searchValue = searchParams?.q as string | undefined;
  const sort = searchParams?.sort as string | undefined;
  const { sortKey, reverse } =
    sorting.find((item) => item.slug === sort) || defaultSort;

  // Получаем фильмы
  const movies = searchValue ? await fetchMovies(searchValue, 1, 20) : [];

  const resultsText = movies.length !== 1 ? "results" : "result";
  console.log("Movies to display:", movies); // Лог данных для проверки

  return (
    <main>
      <div className="mx-auto max-w-7xl px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-4 mt-3 mb-20">
          <div className="col-span-8">
            {searchValue ? (
              <p className="mb-4">
                {movies.length === 0
                  ? "There are no movies that match "
                  : `Showing ${movies.length} ${resultsText} for `}
                <span className="font-bold">&quot;{searchValue}&quot;</span>
              </p>
            ) : null}

            <MovieGridItems content={movies} />
          </div>
        </div>
      </div>
    </main>
  );
}

