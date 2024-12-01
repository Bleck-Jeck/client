"use client"
// CardMini.tsx

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from 'next/image';
import { getUrqlClient } from "@/src/libs/urql";
import { GetContentByTypeDocument, GetContentByTypeQuery, GetContentByTypeQueryVariables } from "@/src/graphql/operations";
import Pagination from "../Pagination";

interface CardMiniProps {
 contentType?: string;
  limit?: number;
  initialPage?: number;
}

const CardMini: React.FC<CardMiniProps> = ({ limit = 20, type, initialPage = 1 }) => {

// Получаем URL из переменной окружения
  const contentBaseUrl = process.env.NEXT_PUBLIC_CONTENT_BASE_URL;

  const [movies, setMovies] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const { client } = getUrqlClient();
      const result = await client.query<GetContentByTypeQuery, GetContentByTypeQueryVariables>(
        GetContentByTypeDocument,
        {
          contentType: type,
          limit,
          page: currentPage
        }
      );
      
      if (result.data) {
        setMovies(result.data.getContentByType);
        setTotalItems(300); // Assuming total number of movies is provided by the API
      }
    }

    fetchData();
  }, [currentPage, limit, type]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
          <div className="grid-cols-1 grid mt-10 lg:grid-cols-6 md:grid-cols-2 gap-2 pb-20 text-white ">
      {movies.map((item: any, i: number) => (
        <Link
          href={`/content/${item.content_id}`}
          className="group relative rounded-lg border border-transparent px-3 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
          key={i}
        >
          {/* Добавьте изображение и другие детали фильма */}
          <div className="h-[350px] md:h-[250px] rounded-sm flex justify-center bg-slate-700">
            <Image
              className="h-[350px] md:h-[250px] rounded-sm"
              height={350}
              width={250}
              src={`${contentBaseUrl}${item.img}`}
              alt={item.title}
            />
          </div>
          <div className=" absolute flex justify-center items-center top-2 left-0 px-1 py-[1px] bg-yellow-500 w-10 h-5">
            <div className="text-black text-sm font-bold">{item.rating}</div>
          </div>
          <h2 className={`mb-2 text-base font-semibold text-black`}>{item.title}</h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            {/* {item?.year} | фэнтези, драма, мелодрама */}
          </p>
        </Link>
      ))}
</div>

      <div className="mt-20">
        {/* Включите компонент Pagination здесь */}
        <Pagination
          totalItems={totalItems}
          itemsPerPage={limit}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default CardMini;
