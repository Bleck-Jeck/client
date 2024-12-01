import { GenresDocument, GenresQuery, GenresQueryVariables } from "../graphql/operations";
import { getUrqlClient } from "../libs/urql";


export default  async function AllGenres() {
    async function getAllGenres() {
        const { client } = getUrqlClient();
        const result = await client.query<GenresQuery, GenresQueryVariables>(
            GenresDocument,
          {
        
          }
        );
        return result;
      }
    
      const { data, error} = await getAllGenres();
    
      if(!data) return null

     
      
    

    return (
        <div className="max-w-7xl container mx-auto">
            <div className="flex">
            <div className=" w-full sm:max-w-screen-sm overflow-x-auto pb-24 pt-1 xl:max-w-7xl lg:max-w-5xl  md:max-w-3xl  px-4 mb-10">
                    <ul className="flex justify-start animate-carousel gap-4">
                    {data?.genres.slice(0, 19).map((item: any, i: any) => (
                        <li key={i}
                        className="relative aspect-square max-h-[273px] w-2/3 max-w-[273px] flex-none md:w-1/3"
                        >
                        <div className="flex justify-center items-center text-xl font-bold bg-[#141414] h-full w-full text-white">
                            {item.name}
                        </div>
                        </li>
                    
                    ))}

                    </ul>
                </div>
            </div>
        </div>
    )
    
}
