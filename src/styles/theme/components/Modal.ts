import { modalAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

// Extended theme for Chakra UI Modal
const {
  definePartsStyle,
  defineMultiStyleConfig,
} = createMultiStyleConfigHelpers(modalAnatomy.keys);

const baseStyle = definePartsStyle({
  dialog: {
    bg: 'primaryColor',
    color: 'tertiaryColor',
  },
});

const darkVariant = definePartsStyle({
  dialog: {
    bg: 'tertiaryColor',
    color: 'primaryColor',
  },
});

const variants = {
  dark: darkVariant,
};

export const modalTheme = defineMultiStyleConfig({ baseStyle, variants });
