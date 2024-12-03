import Link from "next/link";
import React from "react";
import Image from "next/image";

interface Genre {
  name: string;
}

interface Content {
  content_id: string;
  title: string;
  original_title?: string;
  release_date?: string;
  content_type?: string;
  age_rating?: string;
  mpaa_rating?: string;
  rating?: number;
  poster_url?: string;
  year: string;
  genres: Genre[];
}

export default function ContentGridItems({
  content,
}: {
  content: Content[];
}) {
  const contentBaseUrl = process.env.NEXT_PUBLIC_CONTENT_BASE_URL;

  if (!content || content.length === 0) {
    return <div className="text-center text-gray-500">No content found.</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
      {content.map((item) => (
        <div key={item.content_id} className="p-2">
          <Link href={`/content/${item.content_id}`} className="group block h-full w-full">
            {/* Постер */}
            <div className="relative w-full h-[330px] md:h-[225px] rounded-md overflow-hidden">
              {item.poster_url ? (
                <Image
                  className="object-cover w-full h-full transform transition-transform duration-300 group-hover:scale-105"
                  width={150}
                  height={225}
                  src={`${contentBaseUrl}${item.img}`}
                  alt={item.title || "Content Poster"}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="/placeholder.jpg"
                />
              ) : (
                <div className="bg-gray-300 w-full h-full flex items-center justify-center text-gray-500">
                  No Image
                </div>
              )}
              {/* Рейтинг */}
              {item.rating !== undefined && (
                <span className="absolute top-2 left-2 px-2 py-1 bg-yellow-500 text-black text-xs font-bold rounded-md shadow-md">
                  {item.rating}
                </span>
              )}
            </div>

            {/* Информация о контенте */}
            <div className="mt-2 text-sm font-medium text-gray-800">
              <p className="line-clamp-1" title={item.title}>
                {item.title}
              </p>
              {item.year && (
                <p className="text-gray-500 text-xs">{`+${item.year}`}</p>
              )}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

