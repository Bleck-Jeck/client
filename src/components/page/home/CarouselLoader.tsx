
import { GetContentByTypeDocument, GetContentByTypeQuery, GetContentByTypeQueryVariables } from "@/src/graphql/operations";
import { getUrqlClient } from "@/src/libs/urql";
import ContentCarouselDisplay from "./ContentCarouselDisplay"; // Переименованный компонент

interface CarouselLoaderProps {
  limit?: number;
  type?: string;
  sortBy?: string;
  style?: boolean;
}

export async function CarouselLoader({ limit, type, sortBy, style = false }: CarouselLoaderProps) {
  try {
    const { client } = getUrqlClient();
    const result = await client.query<GetContentByTypeQuery, GetContentByTypeQueryVariables>(
      GetContentByTypeDocument,
      { contentType: type, limit, page: 1 }
    );
    
    const data = result.data.getContentByType;
    
    if (!data) {
      throw new Error("No data available");
    }

    const conditionalClass = style ? 'swiper-wrapper-hd' : 'default-styles';

    return (
      <div className="mx-auto w-full sm:max-w-screen-sm pt-1 xl:max-w-7xl lg:max-w-5xl md:max-w-3xl">
        <ContentCarouselDisplay data={data} conditionalClass={conditionalClass} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error fetching data. Please try again later.</div>;
  }
}

