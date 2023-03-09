import { Flex, Text, Image } from '@chakra-ui/react';

interface IComicCard {
  src: string;
  title: string;
}
export const ComicCard = ({ src, title }) => {
  return (
    <Flex
      flexDirection="column"
      border="1px solid"
      borderColor="primaryColor"
      borderRadius="2px"
      p="15px"
      transition="all 0.4s"
      _hover={{ transform: 'scale(1.1)' }}
    >
      <Image src={src} w="170px" h="300px" mb="10px" />
      <Text fontWeight="extrabold" fontSize="xl" noOfLines={1} w="170px">
        {title}
      </Text>
    </Flex>
  );
};
