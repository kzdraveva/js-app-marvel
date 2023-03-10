import { ArrowBackIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Image, Spinner, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSingleCharacter } from '../../../hooks/useSingleCharacter';

// Single character component
export default function SingleCharacter() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading } = useSingleCharacter(id);

  // HELPER FUNCTIONS
  // ----------------
  const hanldeBack = () => {
    router.back();
  };

  // HELPER RENDER FUNCTIONS
  // -----------------------
  const renderSpinner = () => {
    return (
      <Flex justifyContent="center" alignItems="center" h="calc(100vh - 190px)">
        <Spinner size="xl" color="secondaryColor" />
      </Flex>
    );
  };

  // Helper function for rendering information about comics, series and stories for each character
  const renderData = ({ title, data, href }) => {
    return (
      <>
        <Flex gap="30px">
          <Text>{title}</Text>
          <Flex flexWrap="wrap" gap="10px">
            {data.items.map((item) => {
              return (
                <Link
                  href={`${href}/${item.resourceURI.split('/').pop()}`}
                  key={item.resourceURI}
                  passHref
                >
                  <Text _hover={{ color: 'secondaryColor' }}>{item.name}</Text>
                </Link>
              );
            })}
          </Flex>
        </Flex>
      </>
    );
  };

  const name = data?.data.results[0].name;
  const thumbnail = `${data?.data.results[0].thumbnail.path}.${data?.data.results[0].thumbnail.extension}`;
  const description = data?.data.results[0].description;

  // MAIN RENDER
  // -----------
  return (
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
      {isLoading ? (
        renderSpinner()
      ) : (
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection={{ base: 'column', md: 'row' }}
          gap="40px"
          h="calc(100vh - 190px)"
        >
          <Box
            border="1px solid"
            borderColor="primaryColor"
            p="10px"
            borderRadius="5px"
          >
            <Image src={thumbnail} width="250px" />
            <Text w="100%" textAlign="center" mt="2">
              {name}
            </Text>
          </Box>
          <Box
            w={{ base: '90%', md: '60%' }}
            h="calc(100vh - 190px)"
            overflow="auto"
          >
            <Text>{description}</Text>
            {renderData({
              title: 'Comics',
              data: data?.data.results[0].comics,
              href: `/comics`,
            })}

            {renderData({
              title: 'Series',
              data: data?.data.results[0].series,
              href: `/series`,
            })}

            {renderData({
              title: 'Stories',
              data: data?.data.results[0].stories,
              href: `/stories`,
            })}
          </Box>
        </Flex>
      )}
    </>
  );
}
