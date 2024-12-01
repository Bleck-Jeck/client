import * as Types from '../../hooks/types';

import * as Operations from './operations';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


export function useGetContentByTypeQuery(options: Omit<Urql.UseQueryArgs<Operations.GetContentByTypeQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.GetContentByTypeQuery, Operations.GetContentByTypeQueryVariables>({ query: Operations.GetContentByTypeDocument, ...options });
};