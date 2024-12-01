import { getPropertyValue } from "@/src/util/movieUtils";
import Image from "next/image";

interface Movie {
  title: string;
  description: string;
  poster?: string;
  year?: number;
  enTitle?: string;
  status?: string;
  rating_mpaa?: string;
  minimal_age?: number;
  duration?: number;
}

function getColorByRating(rating: number | undefined): string {
  if (!rating) return "#000000"; // Черный по умолчанию
  if (rating >= 1 && rating <= 4) return "#8B0000"; // Темно-красный
  if (rating >= 5 && rating <= 6) return "#808080"; // Серый
  if (rating >= 7 && rating <= 10) return "#009000"; // Темно-зеленый
  return "#000000"; // Черный
}

export default async function RelatedProducts({ handle }: { handle: string }) {
  const contentBaseUrl = process.env.NEXT_PUBLIC_CONTENT_BASE_URL;
  const searchResults: Movie | any = await getPropertyValue(String(handle));

  if (!searchResults) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Фильм не найден</h1>
          <p className="text-gray-600">Попробуйте поискать что-то другое!</p>
        </div>
      </div>
    );
  }

  const color = getColorByRating(searchResults?.shikimori_rating);

  return (
    <div className="relative flex flex-col min-w-0 bg-white rounded-2xl mx-5">
      {/* Основной контент */}
      <div className="flex-auto px-4 mt-10 pb-5">
        <div className="flex flex-wrap justify-center -mx-3">
          {/* Изображение */}
          <div className="lg:w-1/4 flex justify-center items-center">
            <div className="relative w-full max-w-[225px]">
              <Image
                src={`${contentBaseUrl}${searchResults.img}`}
                width={225}
                height={400}
                className="rounded-lg object-cover"
                alt={searchResults.title || "Изображение"}
              />
            </div>
          </div>

          {/* Информация о фильме */}
          <div className="lg:w-1/2 px-3 mt-5 lg:mt-0">
            <h1 className="text-4xl font-bold mb-3">
              {searchResults.title}
              {searchResults.shikimori_rating && (
                <span
                  className="absolute text-xl ml-2"
                  style={{ color }}
                >
                  {searchResults.shikimori_rating}
                </span>
              )}
            </h1>
            <h5 className="font-bold text-gray-400">Описание</h5>
            <p className="text-black mb-6">{searchResults.summary || "Описание отсутствует."}</p>

            {/* Таблица данных */}
            <table className="table-auto w-full text-sm text-black">
              <thead>
                <tr>
                  <th className="px-4 py-2 bg-gray-200 text-left">Информация</th>
                  <th className="px-4 py-2 bg-gray-200 text-left">Значение</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: "Год выпуска", value: searchResults.release_date || "Не указано" },
                  { label: "Английское название", value: searchResults.original_title || "Не указано" },
                  { label: "Статус", value: searchResults.release_status || "Не указано" },
                  { label: "Рейтинг MPAA", value: searchResults.mpaa_rating || "Не указано" },
                  { label: "Возраст", value: `+${searchResults.age_rating || "Не указано"}` },
                ].map(({ label, value }, index) => (
                  <tr key={index} className="border-b">
                    <td className="px-4 py-2">{label}</td>
                    <td className="px-4 py-2">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Видеоплеер */}
      {searchResults.player_url && (
        <div className="bg-black py-10">
          <div className="container mx-auto max-w-6xl">
            <div className="aspect-video bg-white rounded overflow-hidden">
              <iframe
                className="w-full h-full"
                src={searchResults.player_url}
                title="Видеоплеер"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                sandbox="allow-same-origin allow-scripts"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

