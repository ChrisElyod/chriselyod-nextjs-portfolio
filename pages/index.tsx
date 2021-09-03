import type { NextPage } from 'next';
import Head from 'next/head';
import { Box, Container, Text } from "@chakra-ui/react";
import Image from 'next/image';
import WorkExperience from '../src/components/WorkExperience';
import DevelopmentProjects from '../src/components/DevelopmentProjects';
import Education from '../src/components/Education';
import AboutMeCard from '../src/components/AboutMeCard';
import torontoSkyline from '../public/images/TorontoSkyline.jpg';

const Home: NextPage = () => {

  return (
    <div>
      <Head>
        <title>Chris Doyle</title>
        <meta name="description" content="DoyleDev Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ display: 'flex', flexDirection: 'column' }}>
        <Box w="100%" position="relative">
          <Image src={torontoSkyline} width={2000} height={667} layout="responsive"/>
          <Box top={0} position="absolute" width="100%" height="100%" display="flex" justifyContent="center" alignItems="center" background="rgba(0, 0, 0, 0.5)">
            <Text
              color="whiteAlpha.900"
              fontSize="2xl"
              display="flex"
              flexDirection="column"
              alignItems="center"
              textAlign="center"
              maxW="75vw"
            >
              Hey
              <Text fontSize="2xl" fontWeight="semibold" py="10">
                I&apos;m Chris Doyle
              </Text>
              A Software Developer specializing in ReactJS development with a growing passion for UI/UX Design
            </Text>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" justifyContent="center" w="100%" h="100%" bg="#365f85" p="10">
          <AboutMeCard />
        </Box>
        <WorkExperience />
        <Education />
        <DevelopmentProjects />
      </main>
    </div>
  )
}

export default Home;
