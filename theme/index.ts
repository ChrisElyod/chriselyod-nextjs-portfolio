import { extendTheme } from '@chakra-ui/react';

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

const theme = extendTheme({ ...colors, ...button })
export { theme };