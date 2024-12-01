
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

function getColorByNumber(number:any) {
  if (number >= 1 && number <= 4) {
    return '#8B0000'; // Темно-красный
  } else if (number >= 5 && number <= 6) {
    return '#808080'; // Серый
  } else if (number >= 7 && number <= 10) {
    return '#009000'; // Темно-зеленый
  } else {
    return '#000000'; // Черный цвет по умолчанию
  }
}

  
export default async function RelatedProducts({ handle }: { handle: string }) {

    const searchResults: Movie | any = await getPropertyValue(String(handle));
    const color = getColorByNumber(searchResults?.shikimori_rating);
    
    console.log(searchResults)
    if (!searchResults) {
      return (
        <div className="flex justify-center items-center min-h-screen mt-[-80px]">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Фильм не найден</h1>
            {/* <p className="text-gray-600">К сожалению, мы не смогли найти запрашиваемый фильм.</p> */}
          <p className="text-gray-600">Ой! Похоже, что фильм, который вы ищете, не существует.</p>
            <p className="text-gray-600">Попробуйте поискать что-то другое!</p>
          </div>
        </div>
      );
    }
    
    
  
    return (
          <div className="relative flex flex-col min-w-0 break-words bg-white rounded-2xl bg-clip-border mx-5">
            <div className="flex-auto px-4 pb-5 mb-10">
              <div className="flex flex-wrap justify-center -mx-3">
                <div className="max-w-full mt-1 flex justify-center text-center lg:w-1/4 lg:flex-none ">
               
                <div className="w-full relative flex items-start justify-center h-auto">
                  <div className=" rounded-xl w-full max-w-80">
                    <Image
                      src={`https://file.anifid.ru/images/movie/${searchResults.poster_url}`}
                      width={225}
                      height={400}
                      className="min-h-80 rounded-lg  z-10 max-h-[400px] h-12 object-cover sm:h-auto w-[225px]"
                      alt={searchResults.title} 
                     
                    />
                  </div>
                </div>
                  
                </div>
                <div className="max-w-full px-3 mt-5 lg:mt-0 lg:w-1/2 lg:flex-none">
                  <div className="flex flex-col h-full relative">
                    <h1 className=" mt-0 mb-3 text-4xl font-bold text-black">{searchResults.title}<div className={`absolute top-0 right-0`} style={{ color: color }}>{searchResults.shikimori_rating}</div></h1>
                    <h5 className="font-bold text-black/30">Описание</h5>
                    <p className="mb-12 text-black">{searchResults.summary}</p>
                    <table className="table-auto border-collapse w-full">
                      <thead>
                        <tr className="rounded-lg text-sm font-medium text-gray-700 text-left">
                          <th className="px-4 py-2 bg-gray-200 ">О {searchResults.content_type}</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm font-normal text-gray-700">
                        {/* Добавление строк с информацией о фильме */}
                        <tr className="hover:bg-gray-100 border-b border-gray-200 py-10">
                          <td className="px-4 py-4">Год выпуска</td>
                          <td className="px-4 py-4">{searchResults.release_date}</td>
                        </tr>
                        <tr className="hover:bg-gray-100 border-b border-gray-200 py-4">
                          <td className="px-4 py-4 flex items-center">
                            Английское название
                          </td>
                          <td className="px-4 py-4">{searchResults.original_title}</td>
                        </tr>

                        <tr className="hover:bg-gray-100 border-b border-gray-200 py-4">
                          <td className="px-4 py-4 flex items-center">
                          Статус
                          </td>
                          <td className="px-4 py-4">{searchResults.release_status || "null"}</td>
                        </tr>
                        <tr className="hover:bg-gray-100 border-b border-gray-200 py-4">
                          <td className="px-4 py-4 flex items-center">
                          Рейтинг MPAA
                          </td>
                          <td className="px-4 py-4">{searchResults.mpaa_rating || "null"}</td>
                        </tr>
                        
                        <tr className="hover:bg-gray-100 border-b border-gray-200 py-4">
                          <td className="px-4 py-4 flex items-center">
                            Возраст
                          </td>
                          <td className="px-4 py-4">+ {searchResults.age_rating || "null"}</td>
                        </tr>
                        {/*<tr className="hover:bg-gray-100 border-b border-gray-200 py-4">
                          <td className="px-4 py-4 flex items-center">
                          Продолжительность эпизода
                          </td>
                          <td className="px-4 py-4"> ~ {searchResults.duration+" мин." || "null"}</td>
                        </tr>

                        
                        

                         Добавление других строк с информацией о фильме */}
                      </tbody>
                    </table>
  
                    <a
                      className="mt-auto mb-0 font-semibold leading-normal text-sm group text-slate-500"
                      href="#"
                    >
                      <i
                        className="fas fa-arrow-right ease-bounce text-sm group-hover:translate-x-1.25 ml-1 leading-normal transition-all duration-200"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="bg-black pt-20 pb-20 mx-[-20px]">

            <div className="container w-full max-w-6xl mx-auto mt-8">
            <div className="aspect-video bg-white rounded overflow-hidden">
              <iframe
                className="w-full h-full"
                src={searchResults.player_url}
                title="Видео"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                sandbox="allow-same-origin allow-scripts"
              ></iframe>
            </div>
          </div>




            </div>
          </div>
  
    );
  }
