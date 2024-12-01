// CardBig.tsx

import React from "react";
import Image from 'next/image';
import Link from "next/link";
const CardBig = ({ list }: any) => {

  
  return (
    <>

      {list?.map((item: any, i: any) => (
        <Link key={i} href={`/movie/${item.id}`}>
        <div className="p-1 rounded-2xl w-[360px] md:w-full  border-[4px] border-transparent hover:border-violet-600 cursor-pointer relative text-left bg-transparent">
          <div className="absolute top-1 right-1 left-1 bottom-1 library__item-gradient rounded-lg"></div>
          {item?.poster && (
            <Image 
            src={"https://file.anifid.ru/images/movie/"+item?.poster} 
            className="rounded-lg" 
            alt="img"
            width={550}
            height={450}
            />

          )}
          <div className="absolute top-0 left-0 p-6">
            <span>{item?.title}</span>
            <h3 className="text-2xl font-semibold">{item?.title}</h3>
          </div>
        </div>
        </Link>
        
      ))}
    </>
  );
};

export default CardBig;
