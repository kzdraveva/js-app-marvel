export const styles = {
  global: () => ({
    '*, :before, *:after': {
      boxSizing: 'border-box',
    },
    'html, body, #__next': {
      fontFamily: 'Marvel',
      fontWeight: 'normal',
      color: 'primaryColor',
      backgroundColor: 'tertiaryColor',
      width: '100%',
      height: '100%',
      MozOsxFontSmoothing: 'grayscale',
      WebkitFontSmoothing: 'antialiased',
    },
  }),
};
