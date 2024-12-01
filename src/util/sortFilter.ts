import { Film } from "./types";

// sortFilter.ts
export type MovieSortKey = keyof Film;

export const filterAndSortMovies = ({
    movies,
    genre,
    sortKey,
    reverse,
}: {
    movies: Film[];
    genre?: string;
    sortKey: string;
    reverse: boolean;
}) => {
    const filteredMovies = genre
        ? movies.filter((movie) =>
            movie.genres.some((genr) => genr.name === genre)
        )
        : [...movies];

    return filteredMovies.sort((a, b) => {
        let aValue = getPropertyValue(a, sortKey);
        let bValue = getPropertyValue(b, sortKey);

        switch (sortKey) {
            case "rating":
                aValue = a[sortKey].kp;
                bValue = b[sortKey].kp;
                break;
            case "year":
                aValue = a.year;
                bValue = b.year;
                break;
            case "name":
                aValue = a.names[0]?.name;
                bValue = b.names[0]?.name;
                break;
            default:
                // Handle other sorting cases if needed
                break;
        }

        if (typeof aValue === 'number' && typeof bValue === 'number') {
            return reverse ? bValue - aValue : aValue - bValue;
        } else if (typeof aValue === 'string' && typeof bValue === 'string') {
            return reverse ? bValue.localeCompare(aValue) : aValue.localeCompare(bValue);
        } else {
            // Добавьте логику для других типов данных при необходимости
            return 0;
        }
    });
};

// Вспомогательная функция для получения значения свойства объекта по строке ключа
const getPropertyValue = (obj: Record<string, any>, key: string): any => {
    const keys = key.split('.');
    let value = obj;
    keys.forEach((k) => {
        value = value[k];
    });
    return value;
};

