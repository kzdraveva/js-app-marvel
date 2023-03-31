import { ArrowBackIcon } from '@chakra-ui/icons';
import { Image, Flex, Spinner, Heading, Text, Button } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useSingleEvent } from '../../../../hooks/useSingleEvent';
import {
  IEventsListCharacters,
  IEventsListCreators,
} from '../../../../interfaces/IEventsList';
import { CustomModal } from '../../../shared/modals/CustomModal/CustomModal';

enum ModalTypes {
  Characters = 'Characterss',
  Creators = 'Creators',
}

const MAX_ITEMS_TO_SHOW = 10;

// Single event component
export default function SingleEvent() {
  const router = useRouter();
  const { id } = router.query;

  // Component state
  const [modalType, setModalType] = useState(null);

  // Custom hooks
  const { data, isLoading } = useSingleEvent(id);

  // HELPER FUNCTIONS
  // ----------------
  const hanldeBack = () => {
    window.history.back();
  };

  const handleBubbleBtnClick = (type: ModalTypes) => {
    // Set the modalType based on the type
    if (type === ModalTypes.Characters) {
      setModalType(ModalTypes.Characters);
    } else {
      setModalType(ModalTypes.Creators);
    }
  };

  const closeModal = () => {
    setModalType(null);
  };

  // HELPER RENDER FUNCTIONS
  // -----------------------
  const renderCharacters = () => {
    return (
      <>
        <Flex gap="20px">
          <Text>Characters:</Text>
          <Flex flexWrap="wrap" gap="10px">
            {data?.data.results[0].characters.items
              .slice(0, MAX_ITEMS_TO_SHOW)
              .map((character) => {
                return (
                  <Link
                    href={`/characters/${character.resourceURI
                      .split('/')
                      .pop()}`}
                    key={character.resourceURI}
                    passHref
                  >
                    <Text _hover={{ color: 'secondaryColor' }}>
                      {character.name}
                    </Text>
                  </Link>
                );
              })}
            {renderBubbleBtn(
              data?.data.results[0].characters,
              'Characters',
              ModalTypes.Characters,
              handleBubbleBtnClick,
              `/characters`,
            )}
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
            {data?.data.results[0].creators.items
              .slice(0, MAX_ITEMS_TO_SHOW)
              .map((creator) => {
                return <Text key={creator.resourceURI}>{creator.name}</Text>;
              })}
            {renderBubbleBtn(
              data?.data.results[0].creators,
              'Creators',
              ModalTypes.Creators,
              handleBubbleBtnClick,
            )}
          </Flex>
        </Flex>
      </>
    );
  };

  const renderBubbleBtn = (
    data: IEventsListCharacters | IEventsListCreators,
    title: string,
    type: ModalTypes,
    handleBubbleBtnClick: (type) => void,
    href?: string,
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
                if (!href) {
                  return <Text key={item.resourceURI}>{item.name}</Text>;
                }

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

  const renderSpinner = () => {
    return (
      <Flex justifyContent="center" alignItems="center" h="calc(100vh - 190px)">
        <Spinner size="xl" color="secondaryColor" />
      </Flex>
    );
  };

  const thumbnail = `${data?.data.results[0].thumbnail.path}.${data?.data.results[0].thumbnail.extension}`;
  const title = data?.data.results[0].title;
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
          <Image
            src={thumbnail}
            w={{ base: '200px', md: '350px' }}
            maxH={{ base: '250px', md: '450px' }}
          />
          <Flex
            w={{ base: '100%', md: '50%' }}
            maxH="calc(100vh - 200px)"
            overflow="auto"
            flexDirection="column"
            gap="10px"
            p="5px"
          >
            <Heading>{title}</Heading>
            <Text>{description}</Text>
            {data?.data.results[0].characters.items.length > 1 &&
              renderCharacters()}
            {data?.data.results[0].creators.items.length > 1 &&
              renderCreators()}
          </Flex>
        </Flex>
      )}
    </>
  );
}
