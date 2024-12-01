// useFilteredAndSortedMovies.ts
import { defaultSort, genreMapping, sorting } from "@/src/libs/contact";
import { movies } from "@/src/libs/data";
import { filterAndSortMovies } from "@/src/util/sortFilter";

export const useFilteredAndSortedMovies = ({
    navigator,
    searchParams,
}: {
    navigator: string;
    searchParams?: { [key: string]: string | string[] | undefined };
}) => {
    const { sort } = searchParams as { [key: string]: string };
    const { sortKey, reverse } =
        sorting.find((item) => item.slug === sort) || defaultSort;

    return filterAndSortMovies({
        movies,
        genre: genreMapping[navigator],
        sortKey,
        reverse,
    });
};
