import { SearchIcon } from '@chakra-ui/icons';
import {
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Spinner,
  Text,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useComicsList } from '../../../hooks/useComicsList';
import { useDebounce } from '../../../hooks/useDebounce';
import { GetNewComicsListResult } from '../../../utils/comicsList';
import { Card } from '../../core/card/Card';
import { Pagination } from '../../shared/pagination/Pagination';

const LIMIT = 20;

// Comics list component
export default function ComicsList() {
  const router = useRouter();
  const { title } = router.query;
  const { query } = router;

  const [inputValue, setInputValue] = useState('');
  const [offsetValue, setOffsetValue] = useState(0);

  const { data, isLoading } = useComicsList(title, offsetValue, LIMIT);
  const newComics = GetNewComicsListResult(data);

  const debouncedSearchInput = useDebounce(inputValue, 500);
  useEffect(() => {
    router.push({
      query: {
        ...query,
        title: debouncedSearchInput,
      },
    });
  }, [debouncedSearchInput]);

  // HELPER FUNCTIONS
  // ---------------
  const filterComics = (event) => {
    setInputValue(event.target.value);
  };

  const handlePageChange = (pageNumber) => {
    const newOffsetValue = (pageNumber - 1) * newComics.data.limit;
    setOffsetValue(newOffsetValue);
    router.push({
      query: {
        ...query,
        offset: newOffsetValue,
        limit: LIMIT,
      },
    });
  };

  // HELPER RENDER FUNCTIONS
  // -----------------------
  const renderSpinner = () => {
    return (
      <Flex justifyContent="center" alignItems="center" h="calc(100vh - 270px)">
        <Spinner size="xl" color="secondaryColor" />
      </Flex>
    );
  };

  const renderEmptyScreen = () => {
    return (
      <Flex justifyContent="center" alignItems="center" h="calc(100vh - 270px)">
        <Text fontSize="xl">No items found with title: {title}</Text>
      </Flex>
    );
  };

  // MAIN RENDER
  // -----------
  return (
    <>
      <InputGroup alignItems="center" h="40px">
        <InputLeftElement
          pointerEvents="none"
          children={<SearchIcon color="primaryColor" />}
        />
        <Input
          type="text"
          placeholder="Search"
          variant="unstyled"
          value={inputValue}
          _focus={{
            borderBottom: '1px solid',
            borderColor: 'primaryColor',
            borderRadius: '0',
          }}
          onChange={filterComics}
        />
      </InputGroup>
      <Flex
        flexWrap="wrap"
        gap="25px"
        justifyContent="center"
        maxH="calc(100vh - 230px)"
        p="20px"
        mb="10px"
        zIndex="1"
        overflow="auto"
      >
        {isLoading
          ? renderSpinner()
          : data?.data.results.length < 1
          ? renderEmptyScreen()
          : newComics?.data.results.map((comic) => {
              const thumbnail = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;

              return (
                <Card
                  key={comic.id}
                  cardId={comic.id}
                  title={comic.composedTitle}
                  src={thumbnail}
                  href="/comics"
                />
              );
            })}
      </Flex>
      {newComics.data.results && (
        <Pagination
          currentPage={Math.floor(offsetValue / newComics.data.limit) + 1}
          pageRangeDisplayed={3}
          lastPage={Math.ceil(newComics.data.total / newComics.data.limit)}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
}
