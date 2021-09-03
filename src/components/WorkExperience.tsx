import React, { FC } from 'react';
import { Box, Container, List, ListIcon, ListItem, Text } from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';
import TabSection, { Tab } from './TabSection';

type ExperienceObj = {
  employer: string,
  title: string,
  startDate: Date,
  endDate: Date,
  workExperience: Array<string>,
}

const WorkExperience: FC = () => {

  const generateExperienceList = (experienceObj: ExperienceObj): Tab => {
    return {
      label: experienceObj.title,
      content: (
      <Box w="100%" display="flex" flexDirection="column" p="8" justifyContent="space-between" border="solid gray 0.5px" borderRadius="3xl" boxShadow="dark-lg">
        <Box display="flex" justifyContent="space-evenly" flexWrap="wrap">
          <Box display="flex"><Text fontWeight="semibold">Title:&#160;</Text><Text>{experienceObj.title}</Text></Box>
          <Box display="flex"><Text fontWeight="semibold">Dates:&#160;</Text><Text>{experienceObj.startDate.toLocaleString('default', { month: 'short' }) + ' ' + experienceObj.startDate.getUTCFullYear()} &#8211; {experienceObj.endDate.toLocaleString('default', { month: 'short' }) + ' ' + experienceObj.endDate.getUTCFullYear()}</Text></Box>
        </Box>
        <Box pt="6">
          <Text fontWeight="semibold" fontSize="md">Responsibilities &amp; Projects</Text>
          <List spacing={3} pt="2">
            {experienceObj.workExperience ? experienceObj.workExperience.map((item: string, index) => <ListItem key={index}><ListIcon as={MdCheckCircle} color="green.500" w="5" h="5" />{item}</ListItem>) : null}
          </List>
        </Box>
      </Box>
    )}
  };

  const workExperience: Array<ExperienceObj> = [
    {
      employer: 'SS&C',
      title: 'Software Developer',
      startDate: new Date(2019, 7, 2),
      endDate: new Date(2021, 7, 15),
      workExperience: [
        'Developed a Time Tracking system used by internal resources using ReactJS with Redux and ExpressJS',
        'Created an On Call tracking module for resources to integrate with previously developed Time Tracking system. Resource permissioning, approval workflows and email notifications were included',
        'Led a project to develop an internal system managing new hire on-boarding, new client on-boarding and user/client SSRS report permissions using ReactJS and ExpressJS',
        'Developed REST API’s using Spring Boot and Spring Data JPA as part of a more modern and scalable TA Services Infrastructure',
        'Configured Apache NiFi to ingest multiple file types and output to an Apache Kafka Consumer',
        'Developed and maintained C# and JavaScript SharePoint based on user / internal client requirements'
      ],
    },
    {
      employer: 'Pinnacle IP Solutions',
      title: 'IT Administration and Support',
      startDate: new Date(2017, 0, 4),
      endDate: new Date(2017, 3, 31),
      workExperience: [
        'Assisted with organization of product and installation coordination',
        'Tasked with the creation of documentation to be presented to franchisees',
        'Managed an inventory spreadsheet to allow for efficient tracking of where inventory was used and what was in stock'
      ],
    }
  ];
  return (
    <Container py="20" minW="75vw">
      <Text fontSize="3xl" mb="4">Experience</Text>
      <TabSection
        tabs={workExperience.map(i => generateExperienceList(i))}
      />
    </Container>
  )
}

export default WorkExperience;
