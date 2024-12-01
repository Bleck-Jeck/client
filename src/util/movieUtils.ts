// movieUtils.ts

import { GetContentByIdDocument, GetContentByIdQuery, GetContentByIdQueryVariables } from "../graphql/operations";
import { getUrqlClient } from "../libs/urql";

export const getPropertyValue = async (id: number) => {
    const someAsyncFunction = async () => {
    
        const { client } = getUrqlClient();
        const result = await client.query<GetContentByIdQuery, GetContentByIdQueryVariables>(
            GetContentByIdDocument,
            {
                getContentByIdId: Number(id),
            }
        );
        
  	
        return result;
    };

    const moviesResult = await someAsyncFunction();
    const targetMovie = moviesResult.data?.getContentById

    // Если найден, возвращаем его, иначе возвращаем null
    return targetMovie || null;
};


// Ваша функция filterAndSortMovies и другие утилиты
