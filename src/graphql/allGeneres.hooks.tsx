import * as Types from '../../hooks/types';

import * as Operations from './operations';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


export function useGenresQuery(options?: Omit<Urql.UseQueryArgs<Operations.GenresQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.GenresQuery, Operations.GenresQueryVariables>({ query: Operations.GenresDocument, ...options });
};