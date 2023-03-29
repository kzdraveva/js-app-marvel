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
import { useDebounce } from '../../../hooks/useDebounce';
import { useSeriesList } from '../../../hooks/useSeriesList';
import { Card, CardType } from '../../core/card/Card';
import { Pagination } from '../../shared/pagination/Pagination';

const LIMIT = 20;

// Series list component
export default function SeriesList() {
  const router = useRouter();
  const { title } = router.query;
  const { query } = router;

  // Component state
  const [inputValue, setInputValue] = useState('');
  const [offsetValue, setOffsetValue] = useState(0);

  // Custom hooks
  const { data, isLoading } = useSeriesList(title, offsetValue, LIMIT);
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
  const filterSeries = (event) => {
    setInputValue(event.target.value);
  };

  const handlePageChange = (pageNumber) => {
    const newOffsetValue = (pageNumber - 1) * data?.data.limit;
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
          onChange={filterSeries}
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
          : data?.data.results.map((serie) => {
              const thumbnail = `${serie.thumbnail.path}.${serie.thumbnail.extension}`;

              return (
                <Card
                  key={serie.id}
                  cardId={serie.id}
                  title={serie.title}
                  src={thumbnail}
                  href="/series"
                  type={CardType.Serie}
                />
              );
            })}
      </Flex>
      {data?.data.results && (
        <Pagination
          currentPage={Math.floor(offsetValue / data?.data.limit) + 1}
          pageRangeDisplayed={3}
          lastPage={Math.ceil(data?.data.total / data?.data.limit)}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
}
