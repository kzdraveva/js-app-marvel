import { Flex, useBreakpointValue } from '@chakra-ui/react';
import Link from 'next/link';
import { Logo } from '../../../assets/images/Logo';
import { DesktopNav } from './components/DesktopNav';
import { MobileNav } from './components/MobileNav';

interface IMainNavigation {
  isAuth: boolean;
}
// Main navigation component
export const MainNavigation = ({ isAuth }: IMainNavigation) => {
  // Custom hooks
  const isMobile = useBreakpointValue({ base: true, md: false });

  // MAIN RENDER
  // ----------
  return (
    <Flex h="70px" alignItems="center" justifyContent="space-between">
      <Link href="/" passHref>
        <Logo width="100px" height="50px" />
      </Link>
      {isAuth ? isMobile ? <MobileNav /> : <DesktopNav /> : null}
    </Flex>
  );
};
