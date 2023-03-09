import { Flex, useBreakpointValue } from '@chakra-ui/react';
import Link from 'next/link';
import { Logo } from '../../../assets/images/Logo';
import { DesktopNav } from './components/DesktopNav';
import { MobileNav } from './components/MobileNav';

export const MainNavigation = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Flex h="70px" alignItems="center" justifyContent="space-between">
      <Link href="/" passHref>
        <Logo width="100px" height="50px" />
      </Link>
      {isMobile ? <MobileNav /> : <DesktopNav />}
    </Flex>
  );
};
