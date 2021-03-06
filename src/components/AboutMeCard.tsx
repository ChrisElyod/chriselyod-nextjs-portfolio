import React, { FC } from 'react';
import { Box, List, ListIcon, ListItem, Text } from '@chakra-ui/layout';
import { MdChevronRight } from 'react-icons/md';
import Image from 'next/image';

const AboutMeCard:FC = () => {
  return (
    <Box
      display="flex"
      flexDirection={{ base: 'column', sm: 'column', md: 'row', lg: 'row' }}
      justifyContent={{ base: 'center', sm: 'center', md: 'center', lg: 'space-between' }}
      alignItems="center"
    >
      <Box w={{ base: 40, md: 80 }}>
        <Image src="/images/ChrisDoyle.png" width="416px" height="614px" />
      </Box>
      <Box
        maxW={{ base: '75vw', sm: '75vw', md: '65vw', lg: '30vw' }}
        ml={{ sm: "0", md: "20" }}
        color="whiteAlpha.900"
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
            I&apos;ve developed projects at different scales,from company-wide systems to small-scale access tracking systems on bare metal
          </ListItem>
          <ListItem>
            <ListIcon as={MdChevronRight}/>
            I have prodominantly worked as a NodeJS developer, having developed fullstack projects entirely on the Node runtime, though also have exposure to Python, Java and C#
          </ListItem>
        </List>
        <Text color="whiteAlpha.900" mt="2" flexGrow={1} display="flex" alignItems="flex-end">Thanks for taking the time to take a look at my portfolio!</Text>
      </Box>
    </Box>
  )
}

export default AboutMeCard;