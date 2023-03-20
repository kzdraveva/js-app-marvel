import useSWR from 'swr';
import { IStoriesList } from '../interfaces/IStoriesList';
import { fetcher } from '../libs/fetcher';

// Custom hook for fetching events list
export const useEventsList = () => {
  return useSWR<IStoriesList>(`/events?`, fetcher);
};
