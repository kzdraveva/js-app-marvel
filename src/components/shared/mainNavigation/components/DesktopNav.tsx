import { Flex } from '@chakra-ui/react';
import { AuthLogoutButton } from './AuthLogoutButton';
import { NavLink } from './NavLink';

// Desktop navigation (depending on user login status we are rendering authNav and unAuthNav)
export const DesktopNav = () => {
  // MAIN RENDER
  // ----------
  return (
    <Flex as="nav" alignItems="center">
      <NavLink href="/comics" title="Comics" />
      <NavLink href="/series" title="Series" />
      <NavLink href="/events" title="Events" />
      <AuthLogoutButton />
    </Flex>
  );
};
