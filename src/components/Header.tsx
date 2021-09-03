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
    <nav style={{ position: 'fixed', top: 0, zIndex: 1000, background: scrollHeight === 0 ? 'transparent' : 'white' }}>
      <Box
        h={scrollHeight > 0 ? { sm: '20' } : { sm: '16' }}
        w="100vw"
        bg='transparent'
        boxShadow={scrollHeight > 0 ? "xl" : ''}
        px={{ sm: '8', md: '16', lg: '24' }}
        transition="750ms"
        display="flex"
        flexDirection="row"
        alignItems="center"
      >
        <Link href="/" ><Text fontWeight="bold" fontSize="2xl" cursor="pointer" color={scrollHeight === 0 ? 'white' : 'black'} passHref>CHRIS DOYLE</Text></Link>
        <Link href="/contact"><Text ml="auto" color={scrollHeight === 0 ? 'white' : 'black'} cursor="pointer" fontSize="lg" passHref>Contact Me</Text></Link>
      </Box>
    </nav>
  )
}

export default Header;