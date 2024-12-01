// types.ts

interface Rating {
    kp?: number;
    imdb?: number;
    filmCritics?: number;
    russianFilmCritics?: number;
    shikimori?: number;
    await: number | null;
}

interface Votes {
    kp?: number;
    imdb?: number;
    filmCritics?: number;
    russianFilmCritics?: number;
    shikimori?: number;
    await: number | null;
}

interface Backdrop {
    url?: string;
    previewUrl?: string;
}

interface Poster {
    url: string;
    previewUrl: string;
}

interface Genre {
    name: string;
}

interface Country {
    name: string;
}

interface Name {
    name: string;
    language?: string;
    type?: string | null;
}

export interface Film {
    id: number;
    status: string | null;
    rating: Rating;
    votes: Votes;
    backdrop: Backdrop;
    movieLength: number;
    type: string;
    name: string;
    description: string;
    year: number;
    poster: Poster;
    genres: Genre[];
    countries: Country[];
    typeNumber: number;
    alternativeName: string;
    enName: string;
    names: Name[];
    ratingMpaa: string;
    shortDescription: string;
    ageRating: number;

    logo: {
        url: string;
    };
    top10: null;

}
// types.ts
interface Genre {
    id: number;
    name: string;
}

export interface Movie {
    id: number;
    type: string;
    poster_url: string | null;
    title: string;
    enTitle: string | null;
    year: number | null;
    shortDescription: string | null;
    description: string | null;
    rating_mpaa: string | null;
    status: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    [key: string]: any;
    genres: Genre[];
}

export interface Film1 {

}















// Добавьте другие интерфейсы или типы по мере необходимости
