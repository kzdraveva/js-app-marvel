import useSWR from 'swr';
import { IEventsList } from '../interfaces/IEventsList';
import { fetcher } from '../libs/fetcher';

// Custom hook for fetching single event
export const useSingleEvent = (id) => {
  return useSWR<IEventsList>(`/events/${id}?`, fetcher);
};
