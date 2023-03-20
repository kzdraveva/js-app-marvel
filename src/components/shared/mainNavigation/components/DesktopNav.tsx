import { Button, Flex, useDisclosure } from '@chakra-ui/react';
import { LoginForm } from '../../../features/authForms/LoginForm';
import { RegisterForm } from '../../../features/authForms/RegisterForm';
import { CustomModal } from '../../modal/CustomModal';
import { NavLink } from './NavLink';
import useAuth from '../../../../hooks/useAuth';

// Desktop navigation (depending on user login status we are rendering authNav and unAuthNav)
export const DesktopNav = () => {
  const { user, logout } = useAuth();
  const isAuth = user !== null;

  // HELPER FUNCTIONS
  // ---------------
  const handleLogout = async () => {
    await logout();
  };

  // MAIN RENDER
  // ----------
  return (
    <Flex as="nav">
      <>
        <NavLink href="/comics" title="Comics" />
        <NavLink href="/series" title="Series" />
        <NavLink href="/events" title="Events" />

        {isAuth ? (
          <Button
            variant="outline"
            ml="15px"
            transition="all 0.1s"
            _hover={{ transform: 'scale(1.1)' }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        ) : null}
      </>
    </Flex>
  );
};
