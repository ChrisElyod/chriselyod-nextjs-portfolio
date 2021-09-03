import React, { FC } from 'react';
import { Box, Container, Text } from '@chakra-ui/layout';

const Education: FC = () => {
  return (
    <Box minw="100vw" bg="#eaeaea">
      <Container py="20" minW="60vw">
        <Text fontSize="3xl" mb="4">Education</Text>
        <Box display="flex" justifyContent="space-between" py="8">
          <Box>
            <Text fontWeight="semibold">Centre of Geographic Sciences &#8211; Lawrencetown, Nova Scotia</Text>
            <Text>Diploma &#8211; Geographic Sciences (Geographic Information Systems)</Text>
          </Box>
          <Text fontWeight="semibold">Sep 2017 &#8211; Apr 2019</Text>
        </Box>
        <Box display="flex" justifyContent="space-between" py="8">
          <Box>
            <Text fontWeight="semibold">University of Guelph &#8211; Guelph, Ontario</Text>
            <Text>Bachelor of Arts &#8211; Geography Concentration</Text>
          </Box>
          <Text fontWeight="semibold">Sep 2013 &#8211; Apr 2016</Text>
        </Box>          
      </Container>
    </Box>
  )
}

export default Education;