import { Flex, Text, Image } from '@chakra-ui/react';
import Link from 'next/link';

interface IComicCard {
  src: string;
  title: string;
}

// Card component
export const Card = ({ src, title, cardId, href }) => {
  // MAIN RENDER
  // -----------
  return (
    <Link href={`${href}/${cardId}`}>
      <Flex
        flexDirection="column"
        border="1px solid"
        borderColor="primaryColor"
        borderRadius="5px"
        p="10px"
        transition="all 0.4s"
        _hover={{ transform: 'scale(1.1)' }}
      >
        <Image src={src} w="170px" h="300px" mb="10px" />
        <Text fontWeight="extrabold" fontSize="xl" noOfLines={1} w="170px">
          {title}
        </Text>
      </Flex>
    </Link>
  );
};
