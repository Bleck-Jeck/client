import { Film } from "../util/types";


export const movies: Film[] = [
    {
        id: 123456,
        status: null,
        rating: {
            kp: 8.4,
            imdb: 8.4,
            shikimori: 8.84,
            await: null
        },
        votes: {
            kp: 270573,
            imdb: 310512,
            shikimori: 123139,
            await: 5
        },
        backdrop: {
            url: "https://example.com/backdrop.jpg",
            previewUrl: "https://example.com/backdrop-preview.jpg"
        },
        movieLength: 107,
        type: "movie",
        name: "Твое имя",
        description: "Токийский парень Таки и провинциальная девушка Мицуха обнаруживают, что между ними существует странная связь. Во сне они меняются телами и проживают жизни друг друга. Но однажды эта способность исчезает так же внезапно, как появилась. Таки решает во что бы то ни стало отыскать Мицуху.",
        year: 2016,
        poster: {
            url: "https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/62c6279b-a970-4de7-b403-4428b0004d00/1920x",
            previewUrl: "https://example.com/poster-preview.jpg"
        },
        genres: [
            { name: "аниме" },
            { name: "драма" },
            { name: "фэнтези" },
            { name: "мелодрама" },
            { name: "Сверхъестественное" }


        ],
        countries: [
            { name: "Япония" }
        ],
        typeNumber: 1,
        alternativeName: "Kimi no Na wa",
        enName: "Your Name",
        names: [
            { name: "Твое имя" },
            { name: "Kimi no Na wa" },
            { name: "Your Name" }
        ],
        ratingMpaa: "pg-13",
        shortDescription: "Захватывающий аниме-фильм о приключениях...",
        ageRating: 13,
        logo: {
            url: "https://example.com/logo.jpg"
        },
        top10: null
    },



    {
        id: 535341,
        status: null,
        rating: {
            kp: 8.819,
            imdb: 8.5,
            filmCritics: 6.8,
            russianFilmCritics: 100,
            await: null
        },
        votes: {
            kp: 1905100,
            imdb: 913027,
            filmCritics: 129,
            russianFilmCritics: 12,
            await: 15
        },
        backdrop: {
            url: "https://imagetmdb.com/t/p/original/bGksau9GGu0uJ8DJQ8DYc9JW5LM.jpg",
            previewUrl: "https://imagetmdb.com/t/p/w500/bGksau9GGu0uJ8DJQ8DYc9JW5LM.jpg"
        },
        movieLength: 112,

        type: "movie",
        name: "Desu noto",
        description: " Пострадав в результате несчастного случая, богатый аристократ Филипп нанимает в помощники человека, который менее всего подходит для этой работы, – молодого жителя предместья Дрисса, только что освободившегося из тюрьмы. Несмотря на то, что Филипп прикован к инвалидному креслу, Дриссу удается привнести в размеренную жизнь аристократа дух приключений.",
        year: 2011,
        poster: {
            url: "https://avatars.dzeninfra.ru/get-zen_doc/3828869/pub_60b32c03b86a7b140d2d6ea4_60b38b860fe5492d0ef9c71c/scale_1200",
            previewUrl: "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/bf93b465-1189-4155-9dd1-cb9fb5cb1bb5/x1000"
        },
        genres: [
            {
                name: "драма"
            },
            {
                name: "комедия"
            },

            {
                name: "биография"
            }
        ],
        countries: [
            {
                name: "Франция"
            }
        ],
        typeNumber: 1,
        alternativeName: "Intouchables",
        enName: "Intouchables",
        names: [
            {
                name: "Desu noto"
            },
            {
                name: "Intouchables"
            },

            {
                name: "Prijatelja",
                language: " SI",
                type: null
            },
            {
                name: "En oväntad vänskap",
                language: "SE",
                type: null
            },

        ],
        ratingMpaa: "r",
        shortDescription: "Аристократ на коляске нанимает в сиделки бывшего заключенного. Искрометная французская комедия с Омаром Си",
        ageRating: 18,
        logo: {
            url: "https://avatars.mds.yandex.net/get-ott/1531675/2a0000017f0262661cde61dc260cb86f7830/orig"
        },
        top10: null,
    },


    {
        id: 3,
        status: null,
        rating: { kp: 7.9, imdb: 8.1, filmCritics: 7.6, russianFilmCritics: 88, await: null },
        votes: { kp: 850000, imdb: 700000, filmCritics: 110, russianFilmCritics: 14, await: 12 },
        backdrop: { url: "https://example.com/movie3/backdrop.jpg", previewUrl: "https://example.com/movie3/backdrop-preview.jpg" },
        movieLength: 142,
        type: "movie",
        name: "The Shawshank Redemption",
        description: "Описание фильма Побег из Шоушенка",
        year: 1994,
        poster: { url: "https://senpai.cc/uploads/posts/2021-08/thumbs/1629156858_15.jpg", previewUrl: "https://example.com/movie3/poster-preview.jpg" },
        genres: [{ name: "драма" }, { name: "криминал" }],
        countries: [{ name: "США" }],
        typeNumber: 1,
        alternativeName: "Побег из Шоушенка",
        enName: "The Shawshank Redemption",
        names: [{ name: "Побег из Шоушенка" }, { name: "The Shawshank Redemption" }],
        ratingMpaa: "R",
        shortDescription: "История о дружбе в тюрьме и побеге",
        ageRating: 18,
        logo: { url: "https://example.com/movie3/logo.jpg" },
        top10: null,
    },
    {
        id: 4,
        status: null,
        rating: { kp: 8.1, imdb: 8.6, filmCritics: 8.0, russianFilmCritics: 92, await: null },
        votes: { kp: 1100000, imdb: 900000, filmCritics: 140, russianFilmCritics: 18, await: 15 },
        backdrop: { url: "https://example.com/movie4/backdrop.jpg", previewUrl: "https://example.com/movie4/backdrop-preview.jpg" },
        movieLength: 168,
        type: "movie",
        name: "The Godfather",
        description: "Описание фильма Крестный отец",
        year: 2024,
        poster: { url: "https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/3d272f5a-f1cc-43cf-afb4-e41c97d70f50/220x330", previewUrl: "https://example.com/movie4/poster-preview.jpg" },
        genres: [{ name: "криминал" }, { name: "драма" }],
        countries: [{ name: "США" }],
        typeNumber: 1,
        alternativeName: "Крестный отец",
        enName: "The Godfather",
        names: [{ name: "Крестный отец" }, { name: "The Godfather" }],
        ratingMpaa: "R",
        shortDescription: "Семейная сага о преступном мире",
        ageRating: 18,
        logo: { url: "https://example.com/movie4/logo.jpg" },
        top10: null,
    },

    {
        id: 6,
        status: null,
        rating: { kp: 9.2, imdb: 8.9, filmCritics: 9.0, russianFilmCritics: 96, await: null },
        votes: { kp: 1400000, imdb: 1200000, filmCritics: 180, russianFilmCritics: 25, await: 22 },
        backdrop: { url: "https://example.com/movie6/backdrop.jpg", previewUrl: "https://example.com/movie6/backdrop-preview.jpg" },
        movieLength: 152,
        type: "movie",
        name: "The Silence of the Lambs",
        description: "Описание фильма Молчание ягнят",
        year: 1991,
        poster: { url: "https://animego.org/media/cache/thumbs_300x420/upload/anime/images/65a424fd6dc7a775257048.jpg", previewUrl: "https://example.com/movie6/poster-preview.jpg" },
        genres: [{ name: "триллер" }, { name: "детектив" }, { name: "ужасы" }],
        countries: [{ name: "США" }],
        typeNumber: 1,
        alternativeName: "Молчание ягнят",
        enName: "The Silence of the Lambs",
        names: [{ name: "Молчание ягнят" }, { name: "The Silence of the Lambs" }],
        ratingMpaa: "R",
        shortDescription: "Психологический триллер о охоте на серийного убийцу",
        ageRating: 18,
        logo: { url: "https://example.com/movie6/logo.jpg" },
        top10: null,
    },
    {
        id: 5,
        status: null,
        rating: { kp: 7.4, imdb: 8.9, filmCritics: 9.0, russianFilmCritics: 94, await: null },
        votes: { kp: 950000, imdb: 800000, filmCritics: 160, russianFilmCritics: 22, await: 18 },
        backdrop: { url: "https://example.com/movie5/backdrop.jpg", previewUrl: "https://example.com/movie5/backdrop-preview.jpg" },
        movieLength: 154,
        type: "movie",
        name: "Pulp Fiction",
        description: "Описание фильма Криминальное чтиво",
        year: 2020,
        poster: { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM6YJ3a3usRyF_A_tlmVHyN9-9iWKgKt5eYTmV6AxBWHsfIjB8ojeNo2oQuoV-NOl_6tk&usqp=CAU", previewUrl: "https://example.com/movie5/poster-preview.jpg" },
        genres: [{ name: "криминал" }, { name: "драма" }],
        countries: [{ name: "США" }],
        typeNumber: 1,
        alternativeName: "Криминальное чтиво",
        enName: "Pulp Fiction",
        names: [{ name: "Криминальное чтиво" }, { name: "Pulp Fiction" }],
        ratingMpaa: "R",
        shortDescription: "Интригующая история из мира преступности",
        ageRating: 18,
        logo: { url: "https://example.com/movie5/logo.jpg" },
        top10: null,
    },
    {
        id: 7,
        status: null,
        rating: { kp: 9.5, imdb: 8.6, filmCritics: 8.5, russianFilmCritics: 92, await: null },
        votes: { kp: 1100000, imdb: 900000, filmCritics: 140, russianFilmCritics: 18, await: 15 },
        backdrop: { url: "https://example.com/movie7/backdrop.jpg", previewUrl: "https://example.com/movie7/backdrop-preview.jpg" },
        movieLength: 195,
        type: "movie",
        name: "Schindler's List",
        description: "Описание фильма Список Шиндлера",
        year: 2011,
        poster: { url: "https://animego.org/media/cache/thumbs_300x420/upload/anime/images/65a38895c2f94865691687.jpg", previewUrl: "https://example.com/movie7/poster-preview.jpg" },
        genres: [{ name: "драма" }, { name: "биография" }, { name: "история" }],
        countries: [{ name: "США" }],
        typeNumber: 1,
        alternativeName: "Список Шиндлера",
        enName: "Schindler's List",
        names: [{ name: "Список Шиндлера" }, { name: "Schindler's List" }],
        ratingMpaa: "R",
        shortDescription: "История о Рауле Шиндлере и его спасении евреев",
        ageRating: 18,
        logo: { url: "https://example.com/movie7/logo.jpg" },
        top10: null,
    },
    {
        id: 8,
        status: null,
        rating: { kp: 7.1, imdb: 9.0, filmCritics: 8.5, russianFilmCritics: 95, await: null },
        votes: { kp: 1300000, imdb: 1100000, filmCritics: 160, russianFilmCritics: 20, await: 18 },
        backdrop: { url: "https://example.com/movie8/backdrop.jpg", previewUrl: "https://example.com/movie8/backdrop-preview.jpg" },
        movieLength: 139,
        type: "movie",
        name: "Aight Club",
        description: "Описание фильма Бойцовский клуб",
        year: 2017,
        poster: { url: "https://animego.org/media/cache/thumbs_300x420/upload/anime/images/659c402217f2b423723144.jpg", previewUrl: "https://example.com/movie8/poster-preview.jpg" },
        genres: [{ name: "драма" }, { name: "триллер" }],
        countries: [{ name: "США" }],
        typeNumber: 1,
        alternativeName: "Бойцовский клуб",
        enName: "Fight Club",
        names: [{ name: "Бойцовский клуб" }, { name: "Fight Club" }],
        ratingMpaa: "R",
        shortDescription: "История о борьбе с системой и потере личности",
        ageRating: 18,
        logo: { url: "https://example.com/movie8/logo.jpg" },
        top10: null,
    },
    {
        id: 9,
        status: null,
        rating: { kp: 8.8, imdb: 8.8, filmCritics: 8.6, russianFilmCritics: 92, await: null },
        votes: { kp: 1000000, imdb: 850000, filmCritics: 130, russianFilmCritics: 15, await: 12 },
        backdrop: { url: "https://example.com/movie9/backdrop.jpg", previewUrl: "https://example.com/movie9/backdrop-preview.jpg" },
        movieLength: 142,
        type: "movie",
        name: "Forrest Gump",
        description: "Описание фильма Форрест Гамп",
        year: 2009,
        poster: { url: "https://animego.org/media/cache/thumbs_300x420/upload/anime/images/658f66f94cdce853523088.jpg", previewUrl: "https://example.com/movie9/poster-preview.jpg" },
        genres: [{ name: "драма" }, { name: "романтика" }],
        countries: [{ name: "США" }],
        typeNumber: 1,
        alternativeName: "Форрест Гамп",
        enName: "Forrest Gump",
        names: [{ name: "Форрест Гамп" }, { name: "Forrest Gump" }],
        ratingMpaa: "PG-13",
        shortDescription: "История об удивительной жизни Форреста Гампа",
        ageRating: 13,
        logo: { url: "https://example.com/movie9/logo.jpg" },
        top10: null,
    },
]

const films = [

    {
        id: 123456,
        status: null,
        rating: {
            kp: 8.9,
            imdb: 8.9,
            filmCritics: 9.0,
            russianFilmCritics: 95,
            shikimori: 9.1,
            await: null
        },
        votes: {
            kp: 500000,
            imdb: 800000,
            filmCritics: 150,
            russianFilmCritics: 20,
            shikimori: 1200,
            await: 5
        },
        backdrop: {
            url: "https://example.com/backdrop.jpg",
            previewUrl: "https://example.com/backdrop-preview.jpg"
        },
        movieLength: 107,
        type: "movie",
        name: "Твое имя",
        description: "Фильм рассказывает историю...",
        year: 2016,
        poster: {
            url: "https://example.com/poster.jpg",
            previewUr: "https://example.com/poster-preview.jpg"
        },
        genres: [
            { name: "аниме" },
            { name: "драма" },
            { name: "фэнтези" }
        ],
        countries: [
            { name: "Япония" }
        ],
        typeNumber: 1,
        alternativeName: "Kimi no Na wa",
        enName: "Your Name",
        names: [
            { name: "Твое имя" },
            { name: "Kimi no Na wa" },
            { name: "Your Name" }
        ],
        ratingMpaa: "pg-13",
        shortDescription: "Захватывающий аниме-фильм о приключениях...",
        ageRating: 13,
        logo: {
            url: "https://example.com/logo.jpg"
        },
        top10: null
    }



]