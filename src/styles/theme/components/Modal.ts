import { modalAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

// Extended theme for Chakra UI Modal
const {
  definePartsStyle,
  defineMultiStyleConfig,
} = createMultiStyleConfigHelpers(modalAnatomy.keys);

const baseStyle = definePartsStyle({
  dialog: {
    variants: {
      black: {
        background: 'tertiaryColor',
      },
      white: {
        background: 'primaryColor',
      },
    },
  },
});

export const modalTheme = defineMultiStyleConfig({ baseStyle });
