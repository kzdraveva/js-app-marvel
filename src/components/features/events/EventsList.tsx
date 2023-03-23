import { Flex, Spinner, Image, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useEventsList } from '../../../hooks/useEventsList';
import { useInterval } from '../../../hooks/useInterval';
import { IEventsList } from '../../../interfaces/IEventsList';
import { EventsSlide } from './EventsSlide';

// Events list component
export default function EventsList() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { data, isLoading } = useEventsList();
  const router = useRouter();

  // Define the slide duration and advance the slide automatically
  const slideDuration = 5000; // 5 seconds
  useInterval(() => {
    const nextSlide = (currentSlide + 1) % events.length;
    setCurrentSlide(nextSlide);
  }, slideDuration);

  // HELPER FUNCTIONS
  // ---------------
  const splitArray = (arr: IEventsList, size: number) => {
    const result = [];
    for (let i = 0; i < arr?.data.results.length; i += size) {
      result.push(arr?.data.results.slice(i, i + size));
    }
    return result;
  };

  const events = splitArray(data, 4);

  // HELPER RENDER FUNCTIONS
  // -----------------------
  const renderSpinner = () => {
    return (
      <Flex justifyContent="center" alignItems="center" h="calc(100vh - 270px)">
        <Spinner size="xl" color="secondaryColor" />
      </Flex>
    );
  };

  // MAIN RENDER
  // -----------
  return (
    <Flex
      height={{ base: '', md: 'calc(100vh - 150px)' }}
      alignItems="center"
      justifyContent="center"
    >
      {isLoading
        ? renderSpinner()
        : events.map((event, index) => (
            <EventsSlide key={index} isActive={index === currentSlide}>
              <Flex flexDirection={{ base: 'column', md: 'row' }} gap="20px">
                {event.map((image) => {
                  return (
                    <Flex
                      key={image.id}
                      flexDirection="column"
                      w={{ base: '100%', md: '25%' }}
                      p="10px"
                      border="1px solid"
                      borderColor="primaryColor"
                      borderRadius="5px"
                      transition="all 0.2s"
                      _hover={{ transform: 'scale(1.1)' }}
                      onClick={() => {
                        router.push(`/events/${image.id}`);
                      }}
                    >
                      <Image
                        src={`${image.thumbnail.path}.${image.thumbnail.extension}`}
                        alt={image.title}
                        h="300px"
                      />
                      <Text mt="5px">{image.title}</Text>
                    </Flex>
                  );
                })}
              </Flex>
            </EventsSlide>
          ))}
    </Flex>
  );
}
