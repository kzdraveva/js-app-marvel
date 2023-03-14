import { useMemo } from 'react';
import { IComicsList } from '../interfaces/IComicsList';

// Helper function for getting the new value for composing title and diamondCode into one variable
const getComposedValue = (title: string, diamondCode: string): string => {
  return `${title} ${diamondCode}`;
};

// Restructure the IComicsList interface to have new results type that includes the newly created value in the helper function above
export const GetNewComicsListResult = (
  comicsList: IComicsList,
): IComicsList => {
  const memoizedResults = useMemo(() => {
    return comicsList?.data.results.map((result) => {
      const { title, diamondCode } = result;
      const composedTitle = getComposedValue(title, diamondCode);

      return { ...result, composedTitle };
    });
  }, [comicsList?.data.results]);

  return {
    ...comicsList,
    data: {
      ...comicsList?.data,
      results: memoizedResults,
    },
  };
};
