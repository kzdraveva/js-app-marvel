import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  IconButton,
  VStack,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';
import { Logo } from '../../../../assets/images/Logo';
import { NavLink } from './NavLink';
import useAuth from '../../../../hooks/useAuth';
import { useRouter } from 'next/router';

// Mobile navigation (depending on user login status we are rendering authNav and unAuthNav)
export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { isAuth, logout } = useAuth();

  // HELPER FUNCTIONS
  // ----------------
  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  const handleLogout = async () => {
    await logout();
    router.push('/');
  };

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
            <>
              <NavLink href="/comics" title="Comics" />
              <NavLink href="/series" title="Series" />
              <NavLink href="/events" title="Events" />
              <Button
                width="100%"
                bg="secondaryColor"
                fontWeight="bold"
                color="#ffff"
                transition="all 0.2s"
                _hover={{ transform: 'scale(1.1)' }}
                onClick={handleLogout}
              >
                Logout
              </Button>
            </>
          </VStack>
        </DrawerContent>
      </Drawer>
    </>
  );
};
