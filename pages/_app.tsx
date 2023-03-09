// imported font
import '@fontsource/marvel/400.css';
import '@fontsource/marvel/700.css';

import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import chakraTheme from '../src/styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={chakraTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
