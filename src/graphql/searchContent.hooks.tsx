import * as Types from '../../hooks/types';

import * as Operations from './operations';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


export function useSearchContentQuery(options: Omit<Urql.UseQueryArgs<Operations.SearchContentQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.SearchContentQuery, Operations.SearchContentQueryVariables>({ query: Operations.SearchContentDocument, ...options });
};