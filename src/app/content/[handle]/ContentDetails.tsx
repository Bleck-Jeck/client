import Image from "next/image";
import { getContentById } from "@/src/util/contentService";

interface Content {
  title: string;
  summary?: string;
  img?: string;
  player_url?: string;
  rating?: number;
  release_date?: string;
  original_title?: string;
  release_status?: string;
  mpaa_rating?: string;
  age_rating?: number;
  studios?: { name: string }[];
  genres?: { name: string }[];
}

function getColorByRating(rating: number | undefined): string {
  if (!rating) return "#000000";
  if (content.rating >= 1 && rating <= 4) return "#8B0000";
  if (rating >= 5 && rating <= 6) return "#808080";
  if (rating >= 7 && rating <= 10) return "#009000";
  return "#000000";
}

export default async function ContentDetails({ handle }: { handle: string }) {
  const contentBaseUrl = process.env.NEXT_PUBLIC_CONTENT_BASE_URL || "";
  const content: Content | null = await getContentById(Number(handle));

  if (!content) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Контент не найден</h1>
          <p className="text-gray-600">Попробуйте поискать что-то другое!</p>
        </div>
      </div>
    );
  }

  const color = getColorByRating(content.shikimori_rating);

  return (
    <div className="relative flex flex-col bg-white rounded-lg mx-5">
      {/* Основной контент */}
      <div className="flex flex-wrap  p-5">
        {/* Изображение */}
        <Image
          src={content.img ? `${contentBaseUrl}${content.img}` : "/placeholder.png"}
          alt={content.title || "Изображение"}
          width={300}
          height={450}
          className="rounded object-cover"
        />
        {/* Таблица метаданных */}
      <div className="p-5">
      <h1 className="text-4xl font-bold mb-3 text-black mb-5">{content.title}</h1>
          <span style={{ color }} className="text-lg font-bold">
            Рейтинг: {content.rating || "N/A"}
          </span>
        <table className="table-auto w-full text-sm text-black">
          <tbody>
            {[
              { label: "Оригинальное название", value: content.original_title },
              { label: "Год выпуска", value: content.release_date },
              { label: "Возрастной рейтинг", value: `+${content.age_rating || "N/A"}` },
              { label: "Рейтинг MPAA", value: content.mpaa_rating },
              {
                label: "Студии",
                value: content.studios?.map((s) => s.name).join(", ") || "N/A",
              },
              {
                label: "Жанры",
                value: content.genres?.map((g) => g.name).join(", ") || "N/A",
              },
            ].map(({ label, value }, index) => (
              <tr key={index}>
                <td className="px-2 py-1 font-semibold">{label}</td>
                <td className="px-2 py-1">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        {/* Описание */}
        <div className="lg:ml-5 text-black p-5">
          <h3 className="pb-2 font-medium">Описание</h3>
          <p>{content.summary || "Описание отсутствует."}</p>

        </div>
      </div>

      

      {/* Видео проигрыватель */}
      {content.player_url && (
        <div className="bg-black py-10">
          <iframe
            src={content.player_url}
            className="w-full aspect-video"
            title="Видеоплеер"
            allow="fullscreen"
          ></iframe>
        </div>
      )}
    </div>
  );
}

