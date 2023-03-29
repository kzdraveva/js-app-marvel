import {
  Button,
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import Link from 'next/link';
import useAuth from '../../../hooks/useAuth';
import { MainNavigation } from '../../shared/mainNavigation/MainNavigation';
import { LoginForm } from '../authForms/LoginForm';
import { RegisterForm } from '../authForms/RegisterForm';
import LandingPageWrapper from './components/LandingPageWrapper';

// Landing page component
export default function LandingPage() {
  const {
    isOpen: isLoginOpen,
    onOpen: onLoginOpen,
    onClose: onLoginClose,
  } = useDisclosure();
  const {
    isOpen: isRegisterOpen,
    onOpen: onRegisterOpen,
    onClose: onRegisterClose,
  } = useDisclosure();

  // Custom hooks
  const { isAuth } = useAuth();

  // MAIN RENDER
  // -----------
  return (
    <LandingPageWrapper>
      <MainNavigation isAuth={isAuth} />
      <Flex
        height="calc(100vh - 110px)"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
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
        {!isAuth ? (
          <Flex gap="20px" mt="20px">
            <>
              <Button onClick={onLoginOpen} colorScheme="red">
                Login
              </Button>

              <Modal
                isOpen={isLoginOpen}
                onClose={onLoginClose}
                isCentered
                variant="dark"
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader textAlign="center">Login</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <LoginForm onClose={onLoginClose} />
                  </ModalBody>
                </ModalContent>
              </Modal>
            </>

            <>
              <Button onClick={onRegisterOpen} colorScheme="red">
                Register
              </Button>

              <Modal
                variant="dark"
                isOpen={isRegisterOpen}
                onClose={onRegisterClose}
                isCentered
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader textAlign="center">Register</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <RegisterForm onClose={onRegisterClose} />
                  </ModalBody>
                </ModalContent>
              </Modal>
            </>
          </Flex>
        ) : null}
      </Flex>
    </LandingPageWrapper>
  );
}
