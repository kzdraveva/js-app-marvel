import { StarIcon } from '@chakra-ui/icons';
import { Box, Stack } from '@chakra-ui/react';

// Rating stars component
export const RatingStars = ({ onChange, rating }) => {
  // HELPER FUNCTIONS
  // ----------------
  const handleClick = (value) => {
    onChange(value);
  };

  // MAIN RENDER
  // ----------
  return (
    <Stack direction="row" spacing={2} align="center">
      {[1, 2, 3, 4, 5].map((value) => (
        <Box
          key={value}
          as="button"
          onClick={() => handleClick(value)}
          color={value <= rating ? 'yellow.500' : 'gray.300'}
          _hover={{ color: 'yellow.500' }}
        >
          <StarIcon w={4} h={4} />
        </Box>
      ))}
    </Stack>
  );
};
