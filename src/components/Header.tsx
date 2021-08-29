import { Box } from '@chakra-ui/react';
import React, { FC, useEffect, useState } from 'react';

const Header: FC = () => {
  const [scrollHeight, setScrollHeight] = useState<number>(0);
  useEffect(() => {
    window.addEventListener('scroll', () => setScrollHeight(window.pageYOffset));
    return () => window.removeEventListener('scroll', () => setScrollHeight(window.pageYOffset));
  }, [])
  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
      <Box
        h={scrollHeight > 0 ? { sm: '16' } : { sm: '14' }}
        bg={scrollHeight > 0 ? "white" : 'transparent'}
        boxShadow={scrollHeight > 0 ? "xl" : ''}
        px={{ sm: '4', md: '16', lg: '24' }}
        transition="750ms"
        display="flex"
        flexDirection="row"
        alignItems="center"
      >
        CHRIS DOYLE
      </Box>
    </nav>
  )
}

export default Header;