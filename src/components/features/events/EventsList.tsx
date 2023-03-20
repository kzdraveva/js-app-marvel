import { Flex, Spinner } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useEventsList } from '../../../hooks/useEventsList';
import { Card } from '../../core/card/Card';
import { Pagination } from '../../shared/pagination/Pagination';

const LIMIT = 20;

// Events list component
export default function EventsList() {
  const router = useRouter();
  const [offsetValue, setOffsetValue] = useState(0);

  const { query } = router;

  const { data, isLoading } = useEventsList();

  // HELPER FUNCTIONS
  // ---------------
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

  // MAIN RENDER
  // -----------
  return (
    <>
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
          : data?.data.results.map((event) => {
              const thumbnail = `${event.thumbnail.path}.${event.thumbnail.extension}`;
              return (
                <Card
                  key={event.id}
                  cardId={event.id}
                  title={event.title}
                  src={thumbnail}
                  href="/events"
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
