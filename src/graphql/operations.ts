import * as Types from 'types';

import gql from 'graphql-tag';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type GenresQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GenresQuery = { __typename?: 'Query', genres: Array<{ __typename?: 'Genre', id: string, name: string, en_name: string, summary?: string | null }> };

export type GetContentByIdQueryVariables = Types.Exact<{
  getContentByIdId: Types.Scalars['Int']['input'];
}>;


export type GetContentByIdQuery = { __typename?: 'Query', getContentById?: { __typename?: 'Content', content_id: number, title: string, original_title: string, release_date?: number | null, release_status: string, content_type: string, season_number?: number | null, age_rating: number, mpaa_rating?: string | null, rating?: number | null, summary?: string | null, poster_url?: string | null, img?: string | null, trailer_url?: string | null, country: string, player_url?: string | null, series_id?: number | null, updated_at: any, genres: Array<{ __typename?: 'Genre', id: string, name: string }>, studios: Array<{ __typename?: 'Studio', id: string, name: string }>, episodes: Array<{ __typename?: 'Episode', episode_id: number, episode_number: number, season_id: number, player_url?: string | null }> } | null };

export type GetContentByTypeQueryVariables = Types.Exact<{
  contentType: Types.ContentType;
  rating?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  limit?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  page?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type GetContentByTypeQuery = { __typename?: 'Query', getContentByType: Array<{ __typename?: 'Content', content_id: number, title: string, release_date?: number | null, age_rating: number, rating?: number | null, poster_url?: string | null, img?: string | null, genres: Array<{ __typename?: 'Genre', name: string }> }> };

export type ScheduledContentQueryVariables = Types.Exact<{
  limit?: Types.InputMaybe<Types.Scalars['Int']['input']>;
  sortByDate?: Types.InputMaybe<Types.Scalars['String']['input']>;
}>;


export type ScheduledContentQuery = { __typename?: 'Query', getScheduledContent: Array<{ __typename?: 'Content', content_id: number, title: string, next_episode?: string | null }> };

export type SearchContentQueryVariables = Types.Exact<{
  query: Types.Scalars['String']['input'];
}>;


export type SearchContentQuery = { __typename?: 'Query', searchContent: Array<{ __typename?: 'Content', content_id: number, title: string, original_title: string, release_date?: number | null, content_type: string, age_rating: number, mpaa_rating?: string | null, rating?: number | null, img?: string | null, poster_url?: string | null, genres: Array<{ __typename?: 'Genre', name: string }> }> };


export const GenresDocument = gql`
    query Genres {
  genres {
    id
    name
    en_name
    summary
  }
}
    `;
export const GetContentByIdDocument = gql`
    query GetContentById($getContentByIdId: Int!) {
  getContentById(id: $getContentByIdId) {
    content_id
    title
    original_title
    release_date
    release_status
    content_type
    season_number
    age_rating
    mpaa_rating
    rating
    summary
    poster_url
    img
    trailer_url
    country
    player_url
    series_id
    updated_at
    genres {
      id
      name
    }
    studios {
      id
      name
    }
    episodes {
      episode_id
      episode_number
      season_id
      player_url
    }
  }
}
    `;
export const GetContentByTypeDocument = gql`
    query GetContentByType($contentType: ContentType!, $rating: Int, $limit: Int, $page: Int) {
  getContentByType(
    contentType: $contentType
    rating: $rating
    limit: $limit
    page: $page
  ) {
    content_id
    title
    release_date
    age_rating
    rating
    poster_url
    img
    genres {
      name
    }
  }
}
    `;
export const ScheduledContentDocument = gql`
    query ScheduledContent($limit: Int, $sortByDate: String) {
  getScheduledContent(weekly: true, limit: $limit, sortByDate: $sortByDate) {
    content_id
    title
    next_episode
  }
}
    `;
export const SearchContentDocument = gql`
    query SearchContent($query: String!) {
  searchContent(query: $query) {
    content_id
    title
    original_title
    release_date
    content_type
    age_rating
    mpaa_rating
    rating
    img
    poster_url
    genres {
      name
    }
  }
}
    `;