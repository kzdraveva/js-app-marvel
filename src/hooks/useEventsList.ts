import useSWR from 'swr';
import { IEventsList } from '../interfaces/IEventsList';
import { fetcher } from '../libs/fetcher';

// Custom hook for fetching events list
export const useEventsList = () => {
  return useSWR<IEventsList>(`/events?`, fetcher);
};
