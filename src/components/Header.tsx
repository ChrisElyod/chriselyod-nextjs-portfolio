import React, { FC, useEffect, useState } from 'react';
import {
  Box,
  Text,
  Icon,
  Link as ChakraLink,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton
} from '@chakra-ui/react';
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import Link from 'next/link';
import { GITHUB_URL, LINKEDIN_URL } from '../constants';

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
        px={{ base: '10', sm: '20', md: '28', lg: '34', xl: '40' }}
        transition="750ms"
        display="flex"
        flexDirection="row"
        alignItems="center"
      >
        <Link href="/" ><Text fontWeight="bold" fontSize={{ sm: 'xs', md: 'sm', xl: '2xl' }} cursor="pointer" color={scrollHeight === 0 ? 'white' : 'black'} passhref="true">CHRIS DOYLE</Text></Link>
        <Box ml="auto" display={{ base: "none", sm: "none", md: "none", lg: "flex" }}>
          <ChakraLink href={GITHUB_URL} isExternal mx="2"><Icon color={scrollHeight > 0 ? "blackAlpha.900" : "whiteAlpha.900"} aria-label="GitHub Account" as={AiOutlineGithub} h={8} w={8} /></ChakraLink>
          <ChakraLink href={LINKEDIN_URL} isExternal mx="2"><Icon color={scrollHeight > 0 ? "blackAlpha.900" : "whiteAlpha.900"} aria-label="LinkedIn Account" as={AiFillLinkedin} h={8} w={8} /></ChakraLink>
        </Box>
        <Box ml="auto"  display={{ base: "initial", lg: "none" }}>
          <Menu autoSelect={false}>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<Icon as={GiHamburgerMenu} w={5} h={5}/>}
              color={scrollHeight > 0 ? "blackAlpha.900" : "whiteAlpha.900"}
              variant="ghost"
            />
            <MenuList>
              <MenuItem icon={<Icon as={AiOutlineGithub} w={6} h={6}/>} as={ChakraLink} href={GITHUB_URL} isExternal>
                GitHub
              </MenuItem>
              <MenuItem icon={<Icon as={AiFillLinkedin} w={6} h={6}/>} as={ChakraLink} href={LINKEDIN_URL} isExternal>
                LinkedIn
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Box>
    </nav>
  )
}

export default Header;