import { Button, Flex } from '@chakra-ui/react';
import { NavLink } from './NavLink';
export const DesktopNav = () => {
  return (
    <Flex as="nav">
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
    </Flex>
  );
};
