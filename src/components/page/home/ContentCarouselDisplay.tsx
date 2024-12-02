"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

interface ContentCarouselDisplayProps {
  data: { content_id: string; img: string; title: string }[];
  conditionalClass: string;
}

const ContentCarouselDisplay = ({ data, conditionalClass }: ContentCarouselDisplayProps) => {
  const contentBaseUrl = process.env.NEXT_PUBLIC_CONTENT_BASE_URL;

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      navigation
      breakpoints={{
        320: { slidesPerView: 2, spaceBetween: 10 },
        640: { slidesPerView: 3, spaceBetween: 30 },
        768: { slidesPerView: 4, spaceBetween: 30 },
        1024: { slidesPerView: 6, spaceBetween: 10 },
      }}
      className={conditionalClass}
    >
      {data.map((item, i) => (
        <SwiperSlide
          key={i}
          className={conditionalClass === "swiper-wrapper-hd" ? "lg:w-1/5 h" : "ok"}
        >
          <div className="relative h-[450px] w-full flex-none">
            <Link href={`content/${item.content_id}`}>
              <div className="block overflow-hidden hover:shadow-lg p-2">
                <div className="w-full h-[300px]">
                  {item.img ? (
                    <Image
                      className="object-cover w-full h-full"
                      src={`${contentBaseUrl}${item.img}`}
                      alt={item.title}
                      width={300}
                      height={450}
                      priority
                    />
                  ) : (
                    <div className="flex justify-center items-center bg-gray-200 w-full h-full">
                      <span className="text-gray-600">No Image Available</span>
                    </div>
                  )}
                </div>
                <div className="pt-2">
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                </div>
              </div>
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ContentCarouselDisplay;


