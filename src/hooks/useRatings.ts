import useSWR from 'swr';
import { database } from '../libs/firebase';

// Custom hook for fetching or updating the ratings
export const useRatings = (id) => {
  const { data, mutate } = useSWR(`comics/${id}`, (path) =>
    database
      .ref(path)
      .once('value')
      .then((snapshot) => snapshot.val()),
  );

  const addRating = (rating: number = 0) => {
    const newRef = database.ref(`comics/${id}`);
    const ratingData = { id: id, stars: rating };
    return newRef.set(ratingData).then(() => {
      // Update the local cache after adding the new rating
      mutate((prevData) => ({ ...prevData, [rating]: rating }));
    });
  };

  return {
    ratings: data,
    addRating,
  };
};
