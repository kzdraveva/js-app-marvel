import { extendTheme } from '@chakra-ui/react';
import { colors } from './foundations/colors';

import { styles } from './styles';

const overrides = {
  colors,
  styles,
  fonts: {
    body: 'Marvel',
    heading: 'Marvel',
  },

  // components: {
  //   Menu: menuTheme,
  // },
};

const theme = extendTheme(overrides);

export default theme;
