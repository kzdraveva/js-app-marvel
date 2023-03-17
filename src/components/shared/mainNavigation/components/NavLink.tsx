import { border, Box } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface INavLink {
  href: string;
  title: string;
  isAuth: boolean;
}

// Navigation link component
export const NavLink = ({ href, title, isAuth }: INavLink) => {
  const router = useRouter();
  const isCurrent = router.asPath.includes(href);

  // MAIN RENDER
  // -----------
  return (
    <Link href={href} passHref>
      <Box
        p="8px"
        fontSize="xl"
        fontWeight="700"
        borderBottom={isCurrent ? '3px solid #f0141e' : '3px solid transparent'}
        _hover={{ borderBottom: '3px solid', borderColor: 'secondaryColor' }}
      >
        {title.toUpperCase()}
      </Box>
    </Link>
  );
};
