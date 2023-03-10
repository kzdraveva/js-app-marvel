import { ArrowBackIcon } from '@chakra-ui/icons';
import { Image, Flex, Spinner, Heading, Text, Button } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSingleComic } from '../../../hooks/useSingleComic';

export default function () {
  const { comic, isLoading } = useSingleComic();
  const router = useRouter();

  const hanldeBack = () => {
    router.back();
  };

  const renderCharacters = () => {
    return (
      <>
        <Flex gap="20px">
          <Text>Characters:</Text>
          <Flex flexWrap="wrap" gap="10px">
            {comic?.data.results[0].characters.items.map((character) => {
              return (
                <Link
                  href={`/characters/${character.resourceURI.split('/').pop()}`}
                  key={character.resourceURI}
                  passHref
                >
                  <Text _hover={{ color: 'secondaryColor' }}>
                    {character.name}
                  </Text>
                </Link>
              );
            })}
          </Flex>
        </Flex>
      </>
    );
  };

  const renderCreators = () => {
    return (
      <>
        <Flex gap="32px">
          <Text>Creators:</Text>
          <Flex flexWrap="wrap" gap="10px">
            {comic?.data.results[0].creators.items.map((creator) => {
              return <Text key={creator.resourceURI}>{creator.name}</Text>;
            })}
          </Flex>
        </Flex>
      </>
    );
  };

  const renderSpinner = () => {
    return (
      <Flex justifyContent="center" alignItems="center" h="calc(100vh - 190px)">
        <Spinner size="xl" color="secondaryColor" />
      </Flex>
    );
  };

  const thumbnail = `${comic?.data.results[0].thumbnail.path}.${comic?.data.results[0].thumbnail.extension}`;
  const title = comic?.data.results[0].title;
  const description = comic?.data.results[0].description;

  return isLoading ? (
    renderSpinner()
  ) : (
    <>
      <Button
        leftIcon={<ArrowBackIcon color="secondaryColor" />}
        bg="tertiaryColor"
        border="1px solid transparent"
        h="40px"
        _hover={{
          background: 'tertiaryColor',
          border: '1px solid',
          borderColor: 'primaryColor',
          borderRadius: '5px',
        }}
        onClick={hanldeBack}
      >
        BACK
      </Button>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection={{ base: 'column', md: 'row' }}
        gap="40px"
        h="calc(100vh - 190px)"
      >
        <Image
          src={thumbnail}
          w={{ base: '200px', md: '350px' }}
          maxH={{ base: '300px', md: '450px' }}
        />
        <Flex w={{ base: '80%', md: '50%' }} flexDirection="column" gap="10px">
          <Heading>{title}</Heading>
          <Text>{description}</Text>
          {comic?.data.results[0].characters.items.length > 1 &&
            renderCharacters()}
          {comic?.data.results[0].creators.items.length > 1 && renderCreators()}
        </Flex>
      </Flex>
    </>
  );
}
