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
import { useComics } from '../../../hooks/useComics';
import { useDebounce } from '../../../hooks/useDebounce';
import { ComicCard } from '../../core/comicCard/ComicCard';

export default function ComicsList() {
  const [title, setTitle] = useState('');
  const { comics, isLoading } = useComics();
  const router = useRouter();
  const { query } = router;

  const debouncedSearchInput = useDebounce(title, 500);

  useEffect(() => {
    router.push({
      query: {
        ...query,
        title: debouncedSearchInput,
      },
    });
  }, [debouncedSearchInput]);

  const filterComics = (event) => {
    setTitle(event.target.value);
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
          value={title}
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
          : comics?.data.results.length < 1
          ? renderEmptyScreen()
          : comics?.data.results.map((comic) => {
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
