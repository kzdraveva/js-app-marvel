import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  IconButton,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';
import { Logo } from '../../../../assets/images/Logo';
import { LoginForm } from '../../../features/authForms/LoginForm';
import { RegisterForm } from '../../../features/authForms/RegisterForm';
import { CustomModal } from '../../modal/CustomModal';
import { NavLink } from './NavLink';

// Mobile navigation (depending on user login status we are rendering authNav and unAuthNav)
export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
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

  const isAuth = false;

  // HELPER FUNCTIONS
  // ----------------
  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  // MAIN RENDER
  // -----------
  return (
    <>
      <Box display={{ base: 'block', md: 'none' }}>
        <IconButton
          icon={<HamburgerIcon />}
          size="lg"
          variant="outline"
          onClick={onOpen}
          _hover={{ background: 'tertiaryColor' }}
          aria-label="Open mobile navigation menu"
        />
      </Box>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent color="tertiaryColor" p="20px">
          <DrawerCloseButton
            color="tertiaryColor"
            transition="all 0.2s"
            _hover={{ transform: 'scale(1.3)' }}
          />

          <Link href="/" passHref>
            <Logo width="100px" height="50px" />
          </Link>

          <VStack p="2" spacing="4">
            {isAuth ? (
              // Render authenticated mobile navigation
              <>
                <NavLink href="/comics" title="Comics" />
                <NavLink href="/series" title="Series" />
                <NavLink href="/stories" title="Stories" />
                <Button
                  width="100%"
                  bg="secondaryColor"
                  fontWeight="bold"
                  color="#ffff"
                  transition="all 0.2s"
                  _hover={{ transform: 'scale(1.1)' }}
                >
                  Logout
                </Button>
              </>
            ) : (
              // Render unauthenticated mobile navigation
              <>
                <CustomModal
                  variant="black"
                  buttonName="Login"
                  buttonWidth="100%"
                  title="LOGIN"
                  footerContent={
                    <Button colorScheme="red" mr={3} onClick={onLoginClose}>
                      Login
                    </Button>
                  }
                  isModalOpen={isLoginOpen}
                  onModalOpen={onLoginOpen}
                  onModalClose={onLoginClose}
                >
                  <LoginForm />
                </CustomModal>

                <CustomModal
                  variant="black"
                  buttonName="Register"
                  buttonWidth="100%"
                  title="REGISTER"
                  footerContent={
                    <Button colorScheme="red" mr={3} onClick={onRegisterClose}>
                      Register
                    </Button>
                  }
                  onModalOpen={onRegisterOpen}
                  isModalOpen={isRegisterOpen}
                  onModalClose={onRegisterClose}
                >
                  <RegisterForm />
                </CustomModal>
              </>
            )}
          </VStack>
        </DrawerContent>
      </Drawer>
    </>
  );
};
