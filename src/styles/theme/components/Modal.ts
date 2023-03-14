import { modalAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

// Extended theme for Chakra UI Modal
const {
  definePartsStyle,
  defineMultiStyleConfig,
} = createMultiStyleConfigHelpers(modalAnatomy.keys);

const baseStyle = definePartsStyle({
  dialog: {
    borderRadius: 'md',
    bg: `tertiaryColor`,
  },
});

export const modalTheme = defineMultiStyleConfig({ baseStyle });
