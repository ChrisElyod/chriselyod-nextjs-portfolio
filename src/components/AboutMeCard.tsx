import React, { FC } from 'react';
import { Box, List, ListIcon, ListItem, Text } from '@chakra-ui/layout';
import { MdChevronRight } from 'react-icons/md';
import Image from 'next/image';

const AboutMeCard:FC = () => {
  return (
    <Box
      display="flex"
      flexDirection={{ base: 'column', sm: 'column', md: 'column', lg: 'row' }}
      justifyContent={{ base: 'center', sm: 'center', md: 'center', lg: 'space-between' }}
      alignItems="center"
    >
      <Image src="/images/ChrisDoyle.png" width="400px" height="400px" />
      <Box
        maxW={{ base: '75vw', sm: '75vw', md: '65vw', lg: '30vw' }}
        ml="20" color="whiteAlpha.900"
        mt="2"
        fontSize="lg"
        fontWeight="light"
        display="flex"
        flexDirection="column"
      >
        
        <Text fontWeight="semibold" fontSize="2xl">A little about me...</Text>
        <List mt="2">
          <ListItem>
            <ListIcon as={MdChevronRight}/>
            I&apos;ve developed projects at different scales, from company-wide systems to small-scale access tracking systems on bare metal
          </ListItem>
          <ListItem>
            <ListIcon as={MdChevronRight}/>
            Moving forward, I&apos;m most intrigued by exploring the NodeJS stack as micro-services and micro frontends
          </ListItem>
        </List>
        <Text color="whiteAlpha.900" mt="2" flexGrow={1} display="flex" alignItems="flex-end">Thanks for taking the time to take a look at my portfolio!</Text>
      </Box>
    </Box>
  )
}

export default AboutMeCard;