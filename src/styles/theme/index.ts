import { extendTheme } from '@chakra-ui/react';
import { modalTheme } from './components/Modal';
import { colors } from './foundations/colors';

import { styles } from './styles';

const overrides = {
  colors,
  styles,
  fonts: {
    body: 'Marvel',
    heading: 'Marvel',
  },

  components: {
    Modal: modalTheme,
  },
};

const theme = extendTheme(overrides);

export default theme;
