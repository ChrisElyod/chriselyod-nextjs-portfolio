import React, { FC } from 'react';
import { Button, Box, Container, List, ListIcon, ListItem, Text, Link as ChakraLink, Icon } from '@chakra-ui/react';
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
  url?: string,
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
          {
            projectObj.url ? (
              <Button variant="primary" alignSelf="flex-start" mt="8" as={ChakraLink} isExternal href={`${projectObj.url}`}>
                  See it Live!
              </Button>
              ) : null
          }
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
      description: 'E-Commerce site created during the course Complete React Developer in 2021 (w/ Redux, Hooks, GraphQL) by Zero to Mastery on Udemy.',
      frameworks: ['Create React App'],
      languages: ['JavaScript'],
      notes: [
        'Completed as a refresher of existing knowledge and to be exposed to new ways of working with React',
        'Uses SASS for styling components',
        'Uses Redux for global state management, Firebase for User Authentication / User Data storage and Redux-Persist for caching of items currently in a users cart',
        'Integrates Stripe Payments in development mode to simulate customer checkout',
        'Deployed with Heroku'
      ],
      repo: {
        url: 'https://github.com/ChrisElyod/celyod-clothing',
        name: 'celyod-clothing'
      },
      name: 'CElyod Clothes',
      url: 'https://celyod-live.herokuapp.com'
    }
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
