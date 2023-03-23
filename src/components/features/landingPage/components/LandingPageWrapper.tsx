import { Box } from '@chakra-ui/react';

// Landing page wrapper component
export default function LandingPageWrapper({children}) {
  // MAIN RENDER
  // -----------
  return (
    <Box h="100vh" p="20px">
      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        zIndex="1"
        bgImage="/images/wallpaper.png"
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        _before={{
          content: '""',
          display: 'block',
          position: 'absolute',
          top: '0',
          left: '0',
          w: '100%',
          h: '100%',
          bgColor: 'rgba(0, 0, 0, 0.6)',
        }}
      />
      <Box position="relative" zIndex={2}>
        {children}
      </Box>
    </Box>
  );
}
