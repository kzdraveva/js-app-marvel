import { Button, Flex, useDisclosure } from '@chakra-ui/react';
import { LoginForm } from '../../../features/authForms/LoginForm';
import { RegisterForm } from '../../../features/authForms/RegisterForm';
import { CustomModal } from '../../modal/CustomModal';
import { NavLink } from './NavLink';

// Desktop navigation (depending on user login status we are rendering authNav and unAuthNav)
export const DesktopNav = () => {
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

  const isAuth = true;

  // MAIN RENDER
  // ----------
  return (
    <Flex as="nav">
      {isAuth ? (
        // Render authenticated desktop navigation
        <>
          <NavLink href="/comics" title="Comics" />
          <NavLink href="/series" title="Series" />
          <NavLink href="/stories" title="Stories" />

          <Button
            variant="outline"
            ml="15px"
            transition="all 0.1s"
            _hover={{ transform: 'scale(1.1)' }}
          >
            Logout
          </Button>
        </>
      ) : (
        // Render unAuthenticated desktop navigation
        <Flex gap="15px">
          <CustomModal
            buttonName="Login"
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
            buttonName="Register"
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
        </Flex>
      )}
    </Flex>
  );
};
