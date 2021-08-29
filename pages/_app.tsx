// import '../styles/globals.css'
import { Button, ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app'
import Header from '../src/components/Header';
import { theme } from '../theme/index';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
export default MyApp
