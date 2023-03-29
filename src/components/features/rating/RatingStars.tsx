import { StarIcon } from '@chakra-ui/icons';
import { Box, Stack } from '@chakra-ui/react';

interface IRatingStars {
  onChange(value): void;
  ratingValue: number;
}

// Rating stars component
export const RatingStars = ({ onChange, ratingValue }: IRatingStars) => {
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
          color={value <= ratingValue ? 'yellow' : 'primaryColor'}
          _hover={{ color: 'yellow' }}
        >
          <StarIcon w={4} h={4} />
        </Box>
      ))}
    </Stack>
  );
};
