import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import {
  IconButton,
  Box,
  useCallbackRef,
  Flex,
  ButtonGroup,
} from '@chakra-ui/react';
import { useMemo } from 'react';
import { NumberedPageButton } from './components/NumberedPageButton';

interface IPagination {
  currentPage: number;
  lastPage: number;
  pageRangeDisplayed: number;
  onPageChange: (pageNumber: number) => void;
}

// Pagination component
export const Pagination = ({
  currentPage,
  lastPage,
  pageRangeDisplayed,
  onPageChange,
}: IPagination) => {

  // HELPER FUNCTIONS
  // ----------------
  const handlePrevious = useCallbackRef(() => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  }, [currentPage]);

  const handleNext = useCallbackRef(() => {
    if (lastPage > currentPage) {
      onPageChange(currentPage + 1);
    }
  }, [currentPage, lastPage]);

  const showPrevLabel = useMemo(() => {
    return currentPage - pageRangeDisplayed > 0;
  }, [currentPage, pageRangeDisplayed]);

  const showNextLabel = useMemo(() => {
    return lastPage - currentPage > pageRangeDisplayed;
  }, [currentPage, pageRangeDisplayed, lastPage]);

  const numberedPagesArray = useMemo(() => {
    const startInterval = Math.floor(currentPage / pageRangeDisplayed);
    const endInterval = (startInterval + 1) * pageRangeDisplayed;
    const numberedPagesArray: number[] = [];

    for (let i = startInterval * pageRangeDisplayed; i < endInterval; i++) {
      if (i <= lastPage && Boolean(i)) {
        numberedPagesArray.push(i);
      }
    }
    return numberedPagesArray;
  }, [currentPage, pageRangeDisplayed, lastPage]);

  // MAIN RENDER
  // ----------
  return (
    <Flex
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      columnGap="2"
    >
      <IconButton
        disabled={currentPage <= 1}
        aria-label="chevron-left-icon"
        size="sm"
        icon={<ArrowBackIcon />}
        onClick={handlePrevious}
        bg="secondaryColor"
        borderRadius="50px"
        mr="4"
        transition="all 0.4s"
        _hover={{ transform: 'scale(1.1)' }}
      />

      {showPrevLabel && (
        <>
          <NumberedPageButton
            onClick={() => onPageChange(1)}
            isActive={currentPage === 1}
          >
            1
          </NumberedPageButton>
          <Box> {'...'} </Box>
        </>
      )}
      <ButtonGroup>
        {numberedPagesArray.map((i) => (
          <NumberedPageButton
            onClick={() => onPageChange(i)}
            key={i}
            isActive={currentPage === i}
          >
            {i}
          </NumberedPageButton>
        ))}
      </ButtonGroup>

      {showNextLabel && (
        <>
          <Box>{'...'}</Box>
          <NumberedPageButton
            onClick={() => onPageChange(lastPage)}
            isActive={currentPage === lastPage}
          >
            {lastPage}
          </NumberedPageButton>
        </>
      )}
      <IconButton
        disabled={lastPage <= currentPage}
        aria-label="chevron-right-icon"
        size="sm"
        icon={<ArrowForwardIcon />}
        onClick={handleNext}
        background="secondaryColor"
        borderRadius="50px"
        ml="4"
        transition="all 0.4s"
        _hover={{ transform: 'scale(1.1)' }}
      />
    </Flex>
  );
};
