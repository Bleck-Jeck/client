import Link from "next/link";

const collections = [
    "Лучшие фильмы всех времен",
    "Классические сериалы",
    "Новинки кино",
    "Семейные фильмы",
    "Топ-10 драм",
    "Комедийные сериалы",
    "Приключенческие фильмы",
    "Детективные сериалы",
    "Фантастические хиты"
  ];

  export const metadata = {
    title:"Каталог Anifid",
    openGraph: {
      type: 'website'
    }
  };
  
 export  const CollectionList = () => {
    return (
      <div className="max-w-7xl">
        <div className="w-[1050px]">
          <h2 className="text-xl font-bold my-3 text-black ">Коллекции</h2>
        <div className="gap-1 lg:grid-cols-3 sm:grid-cols-2/4 grid-cols-1 w-full grid ">
          {collections.map((collection, index) => (
            <div key={index} className="  h-60 bg-gray-400 flex justify-start items-start text-white m-2 text-xl font-bold p-5">
              {collection}
            </div>
          ))}
        </div>
        </div>
        
      </div>
    );
  };



export default async function AllPage() {
    
    return(
        <div className="max-w-7xl mx-auto">
            <div className="max-w-[1050px] w-full mx-auto text-black">
                <h1 className="text-3xl font-bold my-3">Категория</h1>
                <div className="flex w-full flex-row ">
                    <Link className="md:w-1/3 w-1/2 h-60 bg-gray-400 flex justify-center items-center m-2" href={'/film'} >
                    	<div className='' >Фильмы</div>
                    </Link>
                    <Link className="md:w-1/3 w-1/2 h-60 bg-gray-400 flex justify-center items-center m-2" href={'/tv'}>
                    	<div>Сериалы</div>
                    </Link>
                </div>
            
            <div>
               <CollectionList />
            </div>
            </div>
    </div>
    )
}
