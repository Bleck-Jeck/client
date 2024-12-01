





export type SortFilterItem = {
  name: string;
  slug: string | null;
  sortKey: 'updated_at' | 'rating' | 'year' | 'title';
  reverse: boolean;
};

export const defaultSort: SortFilterItem = {
  name: 'По актуальность',
  slug: null,
  sortKey: 'updated_at',
  reverse: false
};

export const sorting: SortFilterItem[] = [
  defaultSort,
  // { name: 'Популярные', slug: 'rating', sortKey: 'rating', reverse: true }, // asc
  { name: 'По дате выхода', slug: 'year', sortKey: 'year', reverse: true },
  { name: 'По названию', slug: 'title', sortKey: 'title', reverse: false }, // asc

];



export const defaultCollection: any = {
  id: 0,
  name: 'Все',
  slug: null,
  // sortKey: 'desc',
  reverse: false,
  path: "/search"
};


export const collection = [
  defaultCollection,
  { id: 1, name: "Безумие", path: "/search/madness" },
  { id: 2, name: "Боевые искусства", path: "/search/martial_arts" },
  { id: 3, name: "Вампиры", path: "/search/vampires" },
  { id: 4, name: "Военное", path: "/search/military" },
  { id: 5, name: "Гарем", path: "/search/harem" },
  { id: 6, name: "Демоны", path: "/search/demons" },
  { id: 7, name: "Детектив", path: "/search/detective" },
  { id: 8, name: "Детское", path: "/search/children" },
  { id: 9, name: "Дзёсей", path: "/search/josei" },
  { id: 10, name: "Драма", path: "/search/drama" },
  { id: 11, name: "Игры", path: "/search/games" },
  { id: 12, name: "Исторический", path: "/search/historical" },
  { id: 13, name: "Комедия", path: "/search/comedy" },
  { id: 14, name: "Космос", path: "/search/space" },
  { id: 15, name: "Машины", path: "/search/cars" },
  { id: 16, name: "Меха", path: "/search/mecha" },
  { id: 17, name: "Музыка", path: "/search/music" },
  { id: 18, name: "Пародия", path: "/search/parody" },
  { id: 19, name: "Повседневность", path: "/search/slice_of_life" },
  { id: 20, name: "Полиция", path: "/search/police" },
  { id: 21, name: "Приключения", path: "/search/adventure" },
  { id: 22, name: "Психологическое", path: "/search/psychological" },
  { id: 23, name: "Работа", path: "/search/work" },
  { id: 24, name: "Романтика", path: "/search/romance" },
  { id: 25, name: "Самураи", path: "/search/samurai" },
  { id: 26, name: "Сверхъестественное", path: "/search/supernatural" },
  { id: 27, name: "Спорт", path: "/search/sports" },
  { id: 28, name: "Супер сила", path: "/search/superpower" },
  { id: 29, name: "Сэйнэн", path: "/search/seinen" },
  { id: 30, name: "Сёдзё", path: "/search/shoujo" },
  { id: 31, name: "Сёдзё-ай", path: "/search/shoujo_ai" },
  { id: 32, name: "Сёнен", path: "/search/shounen" },
  { id: 33, name: "Сёнен-ай", path: "/search/shounen_ai" },
  { id: 34, name: "Триллер", path: "/search/thriller" },
  { id: 35, name: "Ужасы", path: "/search/horror" },
  { id: 36, name: "Фантастика", path: "/search/sci_fi" },
  { id: 37, name: "Фэнтези", path: "/search/fantasy" },
  { id: 38, name: "Хентай", path: "/search/hentai" },
  { id: 39, name: "Школа", path: "/search/school" },
  { id: 40, name: "Экшен", path: "/search/action" },
  { id: 41, name: "Эротика", path: "/search/erotica" },
  { id: 42, name: "Этти", path: "/search/ecchi" },
  { id: 43, name: "Юри", path: "/search/yuri" },
  { id: 44, name: "Яой", path: "/search/yaoi" },
];



export const genreMapping: { [key: string]: number } = {
  "madness": 1,
  "martial_arts": 2,
  "vampires": 3,
  "military": 4,
  "harem": 5,
  "demons": 6,
  "detective": 7,
  "children": 8,
  "josei": 9,
  "drama": 10,
  "games": 11,
  "historical": 12,
  "comedy": 13,
  "space": 14,
  "cars": 15,
  "mecha": 16,
  "music": 17,
  "parody": 18,
  "slice_of_life": 19,
  "police": 20,
  "adventure": 21,
  "psychological": 22,
  "work": 23,
  "romance": 24,
  "samurai": 25,
  "supernatural": 26,
  "sports": 27,
  "superpower": 28,
  "seinen": 29,
  "shoujo": 30,
  "shoujo_ai": 31,
  "shounen": 32,
  "shounen_ai": 33,
  "thriller": 34,
  "horror": 35,
  "sci_fi": 36,
  "fantasy": 37,
  "hentai": 38,
  "school": 39,
  "action": 40,
  "erotica": 41,
  "ecchi": 42,
  "yuri": 43,
  "yaoi": 44,
};

