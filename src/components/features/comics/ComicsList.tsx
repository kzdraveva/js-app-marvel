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
import { useComics } from '../../../hooks/useComicsList';
import { useDebounce } from '../../../hooks/useDebounce';
import { ComicCard } from '../../core/comicCard/ComicCard';

export default function ComicsList() {
  const [inputValue, setInputValue] = useState('');
  const router = useRouter();
  const { title } = router.query;
  const { query } = router;

  const { data, isLoading } = useComics(title);

  const debouncedSearchInput = useDebounce(inputValue, 500);

  useEffect(() => {
    router.push({
      query: {
        ...query,
        title: debouncedSearchInput,
      },
    });
  }, [debouncedSearchInput]);

  const filterComics = (event) => {
    setInputValue(event.target.value);
  };

  const renderSpinner = () => {
    return (
      <Flex justifyContent="center" alignItems="center" h="calc(100vh - 180px)">
        <Spinner size="xl" color="secondaryColor" />
      </Flex>
    );
  };

  const renderEmptyScreen = () => {
    return (
      <Flex justifyContent="center" alignItems="center" h="calc(100vh - 180px)">
        <Text fontSize="xl">No items found with title: {title}</Text>
      </Flex>
    );
  };

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
        maxH="calc(100vh - 190px)"
        p="20px"
        zIndex="1"
        overflow="auto"
      >
        {isLoading
          ? renderSpinner()
          : data?.data.results.length < 1
          ? renderEmptyScreen()
          : data?.data.results.map((comic) => {
              const thumbnail = `${comic.thumbnail.path}.${comic.thumbnail.extension}`;

              return (
                <ComicCard
                  key={comic.id}
                  cardId={comic.id}
                  title={comic.title}
                  src={thumbnail}
                />
              );
            })}
      </Flex>
    </>
  );
}
