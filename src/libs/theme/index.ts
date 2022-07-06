import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import type { GlobalStyleProps } from '@chakra-ui/theme-tools';
import { Button } from './components/Button';
import colors from './colors';

const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: 'dark',
  },
  styles: {
    global: (props: GlobalStyleProps) => ({
      body: {
        color: mode('#171717', '#FFFFFF')(props),
        bg: mode('#FFFFFF', '#171717')(props),
      },
    }),
  },
  colors,
  components: {
    Button,
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
});

export default theme;
