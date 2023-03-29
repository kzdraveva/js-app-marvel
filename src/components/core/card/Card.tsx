import { StarIcon } from '@chakra-ui/icons';
import { Flex, Text, Image } from '@chakra-ui/react';
import Link from 'next/link';
import { useComicsRatings } from '../../../hooks/useComicsRatings';
import { useSeriesRatings } from '../../../hooks/useSeriesRatings';

export enum CardType {
  Comic = 'Comic',
  Serie = 'Serie',
}

interface IComicCard {
  src: string;
  title: string;
  cardId: number | string;
  href: string;
  type: CardType;
}

// Card component
export const Card = ({ src, title, cardId, href, type }: IComicCard) => {
  const { averageRating: comicAverageRating } = useComicsRatings(cardId);
  const { averageRating: serieAverageRating } = useSeriesRatings(cardId);

  const averageRating =
    type === 'Comic' ? comicAverageRating : serieAverageRating;

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
        <Flex>
          <Text fontWeight="extrabold" fontSize="xl" noOfLines={1} w="145px">
            {title}
          </Text>
          <Flex alignItems="center" gap="5px">
            <StarIcon w={4} h={4} color="yellow" /> {averageRating || 0}
          </Flex>
        </Flex>
      </Flex>
    </Link>
  );
};
