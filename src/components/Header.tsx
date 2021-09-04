import { Box, Text } from '@chakra-ui/react';
import React, { FC, useEffect, useState } from 'react';
import { Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';

const Header: FC = () => {
  const [scrollHeight, setScrollHeight] = useState<number>(0);
  useEffect(() => {
    window.addEventListener('scroll', () => setScrollHeight(window.pageYOffset));
    return () => window.removeEventListener('scroll', () => setScrollHeight(window.pageYOffset));
  }, [])
  return (
    <nav style={{ position: 'fixed', zIndex: 1000, background: scrollHeight === 0 ? 'transparent' : 'white', width: '100%' }}>
      <Box
        h={scrollHeight > 0 ? '20' : '16'}
        w="container"
        bg='transparent'
        boxShadow={scrollHeight > 0 ? "xl" : ''}
        mx="15"
        px={{ base: '16', sm: '20', md: '28', lg: '34', xl: '40' }}
        transition="750ms"
        display="flex"
        flexDirection="row"
        alignItems="center"
      >
        <Link href="/" ><Text fontWeight="bold" fontSize={{ base: 'xl', sm: 'sm', md: 'md', xl: '2xl' }} cursor="pointer" color={scrollHeight === 0 ? 'white' : 'black'} passHref>CHRIS DOYLE</Text></Link>
        <Link href="/contact"><Text ml="auto" color={scrollHeight === 0 ? 'white' : 'black'} cursor="pointer" fontSize={{ base: 'lg', sm: 'sm', md: 'md' }} passHref>Contact Me</Text></Link>
      </Box>
    </nav>
  )
}

export default Header;