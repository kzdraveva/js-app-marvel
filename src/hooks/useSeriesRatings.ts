import useSWR from 'swr';
import { database } from '../libs/firebase';

interface IRatingData {
  averageRating: number;
  ratings: {
    [userId: string]: {
      stars: number;
    };
  };
}

// Custom hook for fetching or updating the ratings
export const useSeriesRatings = (id: string | string[] | number) => {
  const { data, mutate } = useSWR(`series/${id}`, (path) =>
    database
      .ref(path)
      .once('value')
      .then((snapshot) => snapshot.val()),
  );

  const addRating = (rating: number = 0, userId: string) => {
    const newRef = database.ref(`series/${id}`);

    // Get the current ratings from Firebase
    return newRef.once('value').then((snapshot) => {
      const currentData: IRatingData = snapshot.val();
      const currentRatings = currentData?.ratings || {};

      // Add the new rating for the user
      const newRatings = {
        ...currentRatings,
        [userId]: { stars: rating },
      };

      // Calculate the new average rating based on all ratings
      const allRatings = Object.values(newRatings);
      const sum = allRatings.reduce((acc, r) => acc + r.stars, 0);
      const average = sum / allRatings.length;

      // Update the rating data with the new ratings and average
      const newRatingData: IRatingData = {
        averageRating: average,
        ratings: newRatings,
      };

      return newRef.set(newRatingData).then(() => {
        // Update the local cache after adding the new rating
        mutate((prevData) => {
          const updatedData = { ...prevData };
          updatedData.averageRating = average;
          updatedData.ratings = newRatings;
          return updatedData;
        });
      });
    });
  };

  return {
    ratings: data?.ratings,
    averageRating: data?.averageRating,
    addRating,
  };
};
