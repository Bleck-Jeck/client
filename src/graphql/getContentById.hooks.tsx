import * as Types from '../../hooks/types';

import * as Operations from './operations';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


export function useGetContentByIdQuery(options: Omit<Urql.UseQueryArgs<Operations.GetContentByIdQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.GetContentByIdQuery, Operations.GetContentByIdQueryVariables>({ query: Operations.GetContentByIdDocument, ...options });
};