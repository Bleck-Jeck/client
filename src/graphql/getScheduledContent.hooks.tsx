import * as Types from '../../hooks/types';

import * as Operations from './operations';
import * as Urql from 'urql';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


export function useScheduledContentQuery(options?: Omit<Urql.UseQueryArgs<Operations.ScheduledContentQueryVariables>, 'query'>) {
  return Urql.useQuery<Operations.ScheduledContentQuery, Operations.ScheduledContentQueryVariables>({ query: Operations.ScheduledContentDocument, ...options });
};