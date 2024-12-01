export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type Content = {
  __typename?: 'Content';
  age_rating: Scalars['Int']['output'];
  contentIds: Array<ContentIds>;
  content_id: Scalars['Int']['output'];
  content_type: Scalars['String']['output'];
  country: Scalars['String']['output'];
  /** Эпизоды, связанные с контентом */
  episodes: Array<Episode>;
  /** Genre, связанные с контентом */
  genres: Array<Genre>;
  img?: Maybe<Scalars['String']['output']>;
  mpaa_rating?: Maybe<Scalars['String']['output']>;
  next_episode?: Maybe<Scalars['String']['output']>;
  original_title: Scalars['String']['output'];
  player_url?: Maybe<Scalars['String']['output']>;
  poster_url?: Maybe<Scalars['String']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  release_date?: Maybe<Scalars['Int']['output']>;
  release_status: Scalars['String']['output'];
  season_number?: Maybe<Scalars['Int']['output']>;
  series_id?: Maybe<Scalars['Int']['output']>;
  /** Studio, связанные с контентом */
  studios: Array<Studio>;
  summary?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  trailer_url?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['DateTime']['output'];
  year?: Maybe<Scalars['Int']['output']>;
};

export type ContentIds = {
  __typename?: 'ContentIds';
  content: Content;
  contentId: Scalars['Int']['output'];
  externalId: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  idType: Scalars['String']['output'];
};

/** The type of content (e.g., movie, series) */
export enum ContentType {
  Movie = 'MOVIE',
  Ona = 'ONA',
  Ova = 'OVA',
  Series = 'SERIES',
  SeriesSpecial = 'SERIES_SPECIAL',
  Special = 'SPECIAL'
}

export type Episode = {
  __typename?: 'Episode';
  /** Контент (сезон), к которому относится эпизод */
  content: Content;
  duration?: Maybe<Scalars['Int']['output']>;
  episode_id: Scalars['Int']['output'];
  episode_number: Scalars['Int']['output'];
  player_url?: Maybe<Scalars['String']['output']>;
  release_date?: Maybe<Scalars['DateTime']['output']>;
  release_status?: Maybe<Scalars['String']['output']>;
  release_time?: Maybe<Scalars['String']['output']>;
  season_id: Scalars['Int']['output'];
  summary?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type Genre = {
  __typename?: 'Genre';
  /** Название жанра */
  en_name: Scalars['String']['output'];
  /** Идентификатор жанра */
  id: Scalars['ID']['output'];
  /** Название жанра */
  name: Scalars['String']['output'];
  summary?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  genres: Array<Genre>;
  getAllMovies: Array<Content>;
  getContentById?: Maybe<Content>;
  getContentByType: Array<Content>;
  getContentCountByType: Scalars['Int']['output'];
  getContentWithNextEpisode: Array<Content>;
  getRecentlyUpdatedContent: Array<Content>;
  getScheduledContent: Array<Content>;
  getWeeklySchedule: Array<Content>;
  searchContent: Array<Content>;
};


export type QueryGetAllMoviesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetContentByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetContentByTypeArgs = {
  contentType: ContentType;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetContentCountByTypeArgs = {
  contentType: ContentType;
};


export type QueryGetContentWithNextEpisodeArgs = {
  contentType?: InputMaybe<ContentType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortByDate?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetRecentlyUpdatedContentArgs = {
  contentType?: InputMaybe<ContentType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetScheduledContentArgs = {
  contentType?: InputMaybe<ContentType>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  sortByDate?: InputMaybe<Scalars['String']['input']>;
  timezoneOffset?: InputMaybe<Scalars['Int']['input']>;
  weekly?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryGetWeeklyScheduleArgs = {
  timezoneOffset?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySearchContentArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  query: Scalars['String']['input'];
};

export type Studio = {
  __typename?: 'Studio';
  /** Идентификатор студии */
  id: Scalars['ID']['output'];
  /** Название студии */
  name: Scalars['String']['output'];
};
