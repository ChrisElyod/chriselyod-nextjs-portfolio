import React, { FC } from 'react';
import { Box, Container, List, ListIcon, ListItem, Text, Link as ChakraLink, Icon } from '@chakra-ui/react';
import { AiOutlineGithub } from 'react-icons/ai';
import { MdChevronRight } from 'react-icons/md';
import TabSection, { Tab } from './TabSection';

type ProjectObj = {
  description: string,
  frameworks?: Array<string>,
  languages?: Array<string>,
  notes?: Array<string>,
  repo?: {
    url: string,
    name: string,
  },
  name: string,
}

const DevelopmentProjects: FC = () => {

  const generatePersonalProjects = (projectObj: ProjectObj): Tab => {
    return {
      label: projectObj.name,
      content: (
        <Box w="100%" display="flex" flexDirection="column" p="8" justifyContent="space-between" border="solid gray 0.5px" borderRadius="3xl" boxShadow="dark-lg">
          <Box display="flex" flexDirection="column" alignItems="start">
            <Box display="flex" alignItems="center">
              {projectObj.repo ? (
                <ChakraLink isExternal display="flex" alignItems="center" href={projectObj.repo.url}>
                  <Icon as={AiOutlineGithub} w="10" h="10" />
                  <Text fontSize="lg" fontWeight="bold" pl="4">{projectObj.repo.name}</Text>
                </ChakraLink>
              ) : <Text fontSize="lg" fontWeight="bold">{projectObj.name}</Text>}
              {projectObj.languages ? (
                <Box display="flex" alignItems="center">
                  <Icon as={MdChevronRight} color="gray.500" />
                  <Text fontWeight="light">{projectObj.languages.join(', ')}</Text>
                </Box>) : null}
            </Box>
            {projectObj.frameworks ? <Box fontWeight="semibold" display="flex">Frameworks:&#160;<Text fontWeight="light">{projectObj.frameworks.join(', ')}</Text></Box> : null}
          </Box>
          <Box>
            <Text>{projectObj.description}</Text>
          </Box>
          {projectObj.notes ?
            <Box pt="2">
              <Text fontSize="lg" as="u">Notes:</Text>
              <List>
                {projectObj.notes.map((i, index) => <ListItem key={index}><ListIcon as={MdChevronRight}/>{i}</ListItem>)}
              </List> 
            </Box>
          : null}
        </Box>
      )
    }
  }

  const personalProjects: Array<ProjectObj> = [
    {
      description: 'The website you\'re viewing right now! Portfolio website to accompany my resume. First project with front-end written in TypeScript.',
      frameworks: ['Next.JS', 'Chakra UI'],
      languages: ['TypeScript'],
      notes: [
        'Built using Next.js as the development framework to utilize the integrated Server Side Rendering and Static Site generation features',
        'Currently static content within each .tsx component with plans to migrate to a NoSQL database and static site generation for static data',
        'ChakraUI used as the Front End component / theming library, following provided recommendations for a mobile first design'
      ],
      repo: {
        url: 'https://github.com/ChrisElyod/chriselyod-nextjs-portfolio',
        name: 'chriselyod-nexjs-portfolio'
      },
      name: 'CV / Portfolio',
    },
    {
      description: 'Application to ingest audio data and transform it into a viewable tab geared towards guitar and bass.',
      notes: [
        'Use Electron to build cross-platform support',
        'Use Node Addon API to integrate popular Audio I/O Stream libraries from C or C++ in NodeJS',
        'Allow for live recording/saving of audio and generated tabs'
      ],
      name: 'TabChart (WIP)',
    },
  ];
  return (
    <Box minw="100vw">
      <Container py="20" minW="75vw" bg="brand.dark">
        <Text fontSize="3xl" mb="4">Personal Projects</Text>
        <TabSection
          tabs={personalProjects.map(i => generatePersonalProjects(i))}
        />
      </Container>
    </Box>
  )
}

export default DevelopmentProjects;
