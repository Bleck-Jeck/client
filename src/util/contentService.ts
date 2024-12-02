import {
  GetContentByIdDocument,
  GetContentByIdQuery,
  GetContentByIdQueryVariables,
} from "../graphql/operations";
import { getUrqlClient } from "../libs/urql";

// Получение данных контента по ID
export const getContentById = async (id: number) => {
  try {
    const { client } = getUrqlClient();
    const result = await client.query<GetContentByIdQuery, GetContentByIdQueryVariables>(
      GetContentByIdDocument,
      { getContentByIdId: id }
    );

    return result.data?.getContentById || null;
  } catch (error) {
    console.error("Ошибка при получении данных контента:", error);
    return null;
  }
};

// Дополнительные утилиты для обработки контента
export const filterAndSortContent = (content: any[], sortBy: string) => {
  // Пример сортировки и фильтрации (может быть изменено под нужды проекта)
  return content
    .filter((item) => item && item.title) // Убираем контент без заголовка
    .sort((a, b) => (a[sortBy] > b[sortBy] ? -1 : 1));
};

