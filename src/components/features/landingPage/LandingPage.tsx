import { Flex, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { MainNavigation } from '../../shared/mainNavigation/MainNavigation';
import LandingPageWrapper from './components/LandingPageWrapper';

// Landing page component
export default function LandingPage() {
  // MAIN RENDER
  // -----------
  return (
    <LandingPageWrapper>
      <MainNavigation />
      <Flex
        height="calc(100vh - 110px)"
        justifyContent="center"
        alignItems="center"
      >
        <Heading as="h1" w="70%" textAlign="center">
          <Link href="https://www.marvel.com/" target="_blank">
            <Text as="b" color="secondaryColor" _hover={{ color: '#aa0000' }}>
              THE MARVEL UNIVERSE
            </Text>
          </Link>{' '}
          is at your fingertips with our web app! From classic comics to
          blockbuster movies, our app has everything you need to experience the
          magic of Marvel like never before.
        </Heading>
      </Flex>
    </LandingPageWrapper>
  );
}
