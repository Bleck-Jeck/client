import { GetContentByTypeDocument, GetContentByTypeQuery, GetContentByTypeQueryVariables } from "@/src/graphql/operations";
import { getUrqlClient } from "../../../libs/urql";
import Carousels from "./carus";

export async function Carousel({ limit, type, sortBy,style=false }: { limit?: number, type?: string, sortBy?: string, style?:boolean }) {
    try {
    
 
    
        const { client } = getUrqlClient();
        const result = await client.query<GetContentByTypeQuery, GetContentByTypeQueryVariables>(
        GetContentByTypeDocument,
        {
          contentType: type,
          limit,
          page: 1
        }
      );
      
      	
        const data = result.data.getContentByType;
        
        
        if (!data) {
            throw new Error("No data available");
        }



         // Определение класса для условного применения стилей
         const conditionalClass = style === true ? 'swiper-wrapper-hd' : 'default-styles';

        return (
            <div className={`mx-auto w-full sm:max-w-screen-sm pt-1 xl:max-w-7xl lg:max-w-5xl md:max-w-3xl`}>
                    <Carousels data={data}  conditionalClass={conditionalClass}/>
            </div>

        );
    } catch (error) {
        console.error("Error fetching data:", error);
        return <div>Error fetching data. Please try again later.</div>;
    }
}
