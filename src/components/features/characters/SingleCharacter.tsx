import { ArrowBackIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Image, Spinner, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useSingleCharacter } from '../../../hooks/useSingleCharacter';
import {
  ISingleCharacterComics,
  ISingleCharacterSeries,
  ISingleCharacterStories,
} from '../../../interfaces/ISingleCharacter';
import { CustomModal } from '../../shared/modal/CustomModal';

enum ModalTypes {
  Comics = 'Comics',
  Series = 'Series',
  Stories = 'Stories',
}

const MAX_ITEMS_TO_SHOW = 5;

// Single character component
export default function SingleCharacter() {
  const [modalType, setModalType] = useState(null);

  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading } = useSingleCharacter(id);

  // HELPER FUNCTIONS
  // ----------------
  const hanldeBack = () => {
    router.back();
  };

  const handleBubbleBtnClick = (type: ModalTypes) => {
    // Set the modalType based on the type
    if (type === ModalTypes.Comics) {
      setModalType(ModalTypes.Comics);
    } else if (type === ModalTypes.Series) {
      setModalType(ModalTypes.Series);
    } else if (type === ModalTypes.Stories) {
      setModalType(ModalTypes.Stories);
    }
  };

  const closeModal = () => {
    setModalType(null);
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
  const renderData = (
    title: string,
    data:
      | ISingleCharacterComics
      | ISingleCharacterSeries
      | ISingleCharacterStories,
    href: string,
  ) => {
    let type: ModalTypes;
    if (title === 'Comics') {
      type = ModalTypes.Comics;
    } else if (title === 'Series') {
      type = ModalTypes.Series;
    } else {
      type = ModalTypes.Stories;
    }

    return (
      <>
        <Flex gap="20px" p="5px">
          <Text>{title}</Text>
          <Flex flexWrap="wrap" gap="10px">
            {data.items.slice(0, MAX_ITEMS_TO_SHOW).map((item) => {
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
            {renderBubbleBtn(data, title, type, handleBubbleBtnClick, href)}
          </Flex>
        </Flex>
      </>
    );
  };

  const renderBubbleBtn = (
    data:
      | ISingleCharacterComics
      | ISingleCharacterSeries
      | ISingleCharacterStories,
    title: string,
    type: ModalTypes,
    handleBubbleBtnClick: (type) => void,
    href: string,
  ) => {
    if (data && data.items.length > MAX_ITEMS_TO_SHOW) {
      return (
        <>
          <CustomModal
            variant="white"
            buttonName={`+ ${data.items.length - MAX_ITEMS_TO_SHOW}`}
            buttonHeight="25px"
            title={title}
            onModalOpen={() => handleBubbleBtnClick(type)}
            onModalClose={closeModal}
            isModalOpen={modalType === type}
          >
            <Flex flexDirection="column" maxH="350px" overflow="auto" gap="5px">
              {data.items.map((item) => {
                return (
                  <Link
                    href={`${href}/${item.resourceURI.split('/').pop()}`}
                    key={item.resourceURI}
                    passHref
                  >
                    <Text _hover={{ color: 'secondaryColor' }}>
                      {item.name}
                    </Text>
                  </Link>
                );
              })}
            </Flex>
          </CustomModal>
        </>
      );
    }

    return null;
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
          h="calc(100vh - 200px)"
        >
          <Box
            border="1px solid"
            borderColor="primaryColor"
            p="10px"
            borderRadius="5px"
          >
            <Image src={thumbnail} width="250px" maxH={{ base: '250px' }} />
            <Text w="100%" textAlign="center" mt="2">
              {name}
            </Text>
          </Box>
          <Flex
            w={{ base: '100%', md: '50%' }}
            maxH="calc(100vh - 200px)"
            overflow="auto"
            flexDirection="column"
            gap="10px"
          >
            <Text>{description}</Text>
            {renderData('Comics', data?.data.results[0].comics, `/comics`)}

            {renderData('Series', data?.data.results[0].series, `/series`)}

            {renderData('Stories', data?.data.results[0].stories, `/stories`)}
          </Flex>
        </Flex>
      )}
    </>
  );
}
