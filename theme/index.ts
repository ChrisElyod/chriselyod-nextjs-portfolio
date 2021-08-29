import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools'

//COLORS FROM https://mycolor.space/?hex=%23365F85&sub=1

const colors = {
  primary: "#365f85",
  secondary: "#9170a7",
  warning: "#944344",
  highlight: "#e19e20"
};

const button = {
  components: {
    Button: {
      variants: {
        "primary": {
          bg: colors.primary,
          color: '#FFFFFF'
        },
        "secondary": {
          bg: colors.secondary,
          color: '#FFFFFF'
        }
      }
    }
  }
}

const styles = {
  global: (props) => ({
    "html, body": {
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('gray.500', 'red.100')(props),
    }
  })
}

const config: ThemeConfig = {
  initialColorMode: 'dark',
  cssVarPrefix: 'cdd',
}

const theme = extendTheme({ ...config, ...styles, ...colors, ...button })
export { theme };