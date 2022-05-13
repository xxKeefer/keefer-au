import { Button, Heading, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

import { Event, MainLayout, Project, ProjectGrid, Timeline } from '~/components'

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>DJK // Home</title>
                <meta
                    name="description"
                    content="Daniel John Keefer - Professional Web Wizard"
                    lang="en"
                />
                <link rel="icon" href="/man-mage_google.ico" />
            </Head>
            <MainLayout>
                <VStack align="flex-start">
                    <Heading as="h1" size="4xl">
                        Daniel John Keefer
                    </Heading>
                    <HStack justify="flex-start">
                        <Text pb="3px" fontSize={{ base: '2xl', md: '3xl' }}>
                            🧙‍♂️
                        </Text>
                        <Text
                            fontWeight="600"
                            color="pirate.700"
                            fontSize={{ base: '2xl', md: '3xl' }}
                        >
                            Professional Web Wizard
                        </Text>
                    </HStack>
                    <HStack justify="flex-start">
                        <Text pb="3px" fontSize={{ base: '2xl', md: '3xl' }}>
                            💻
                        </Text>
                        <Text
                            fontWeight="600"
                            color="knight.700"
                            fontSize={{ base: '2xl', md: '3xl' }}
                        >
                            Enthusiastic Tech Utopian
                        </Text>
                    </HStack>
                    <HStack justify="flex-start">
                        <Text pb="3px" fontSize={{ base: '2xl', md: '3xl' }}>
                            ✨
                        </Text>
                        <Text
                            fontWeight="600"
                            color="wizard.700"
                            fontSize={{ base: '2xl', md: '3xl' }}
                        >
                            Husband, Father and Friend
                        </Text>
                    </HStack>
                </VStack>
                <Heading as="h2" fontSize={{ base: '3xl', md: '5xl' }}>
                    🧔 A little about me
                </Heading>
                <Text textAlign={{ base: 'justify', md: 'left' }}>
                    I love tech. They say any sufficiently advanced tech is like
                    magic to the uninitiated, and who doesn't want to be a
                    Wizard? I love to use React and Typescript to turn problems
                    into magic on the internet. Outside of tech, I have been
                    married to my highschool sweetheart for{' '}
                    {yearsSince('09-11-2013')} years and have two wonderful
                    daughters. I love to cook as a bit of a zen activity to
                    avoid burnout, my pickled onions are to die for. What's left
                    of my free time get spent telling stories with friends
                    through role playing games. Currently I enjoy helping one of
                    my best friends to develop a rules system for telling
                    stories called Omen.
                </Text>
                <Heading as="h2" fontSize={{ base: '3xl', md: '5xl' }}>
                    🚀 The Timeline
                </Heading>
                <Timeline>
                    <Event title="Today" emoji="🧔" color="pirate">
                        I am working as a Wizard for VaxApp, fixing up all
                        things frontend with a stellar team. I'm using React and
                        Typescript across multiple projects to help deliver
                        products that help Nurses and the Community streamline
                        the vaccination process.
                    </Event>
                    <Event right title="Jan 2022" emoji="🦵" color="wizard">
                        My wife broke her leg! And we have stairs in our house.
                        She and my daughters had to move into the in laws home
                        while I took care of the pets at home. It was five long
                        months of missing my family and I am very grateful to my
                        in laws for looking after them during that time..
                    </Event>
                    <Event title="Nov 2021" emoji="💉" color="knight">
                        I made the decision to take on bigger challenges at
                        VaxApp. It was a tough decision at the time but it has
                        paid off. I love the culture and the team, and I get to
                        help a lot of people with my dev skills whilst growing
                        my skills at a much faster pace.
                    </Event>
                    <Event right title="Mar 2021" emoji="🍊" color="pirate">
                        I finally arrived in the Tech world! I got my first real
                        industry position at Orange Digital. An agency full of
                        wonderful people and amazing ideas about how work
                        culture should be. I can't thank the friends I made
                        there during my time at Orange enough. Love you guys!
                    </Event>
                    <Event title="Feb 2021" emoji="🎓" color="wizard">
                        After a year of bustin' hump, working part time,
                        studying part time and juggling friends and family. I
                        had finished my boot camp at Coder Academy and I was
                        ready to take my new skills and kill it in Tech.
                    </Event>
                </Timeline>
                <Heading as="h2" fontSize={{ base: '3xl', md: '5xl' }}>
                    🧑‍💻 Side Projects
                </Heading>
                <ProjectGrid>
                    <Project
                        product={{
                            name: 'Omen Docs',
                            image: '/projects/omen-docs.png',
                            url: 'https://omen-docs.vercel.app/',
                            github: 'https://github.com/xxKeefer/omen-website-v2',
                        }}
                    >
                        My friend Ben is developing a new Table top RPG
                        influence by all the best parts of his favourite systems
                        designed to let the story be in the control of the
                        players and not the dice. It has already a very deep
                        rule set with lots of fun mechanics and I built him this
                        website so the rules could be easily accessed by our
                        friends who play. Built with Next.js and MDX
                    </Project>
                    <Project
                        product={{
                            name: 'Poke League Tool',
                            image: '/projects/plutility.png',
                            url: 'https://trainercard-maker.netlify.app/',
                            github: 'https://github.com/xxKeefer/plutility',
                        }}
                    >
                        My friends were running a couple of leagues amongst our
                        selves and wanted a tool to help them manage their
                        teams. I built this tool to primarily make it easier for
                        us to make a cool little trainer card that displayed the
                        pokemon on each team. Built with React, styled with Ant
                        Design and deployed to Netlify.
                    </Project>
                </ProjectGrid>
                <Heading as="h2" fontSize={{ base: '3xl', md: '5xl' }}>
                    🤙 Get in touch
                </Heading>
                <Text textAlign={{ base: 'justify', md: 'left' }}>
                    I love talking Star Trek, programming, table top role
                    playing games and philosophy. If you want to break ice, I'll
                    talk on these topics for hours. You can catch me on these
                    platforms:
                </Text>
                <Stack direction="column" spacing={4} p="8">
                    <Button
                        as="a"
                        size="lg"
                        leftIcon={<FaLinkedin />}
                        bg="pirate.500"
                        color="keefer.black"
                        _hover={{ bg: 'pirate.300' }}
                        variant="solid"
                        href="https://www.linkedin.com/in/xxkeefer/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </Button>
                    <Button
                        as="a"
                        size="lg"
                        leftIcon={<FaGithub />}
                        bg="knight.500"
                        color="keefer.black"
                        _hover={{ bg: 'knight.300' }}
                        variant="solid"
                        href="https://github.com/xxKeefer/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Github
                    </Button>
                    <Button
                        as="a"
                        size="lg"
                        leftIcon={<FaTwitter />}
                        bg="wizard.500"
                        color="keefer.black"
                        _hover={{ bg: 'wizard.300' }}
                        variant="solid"
                        href="https://twitter.com/xxKeefer"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Twitter
                    </Button>
                </Stack>
            </MainLayout>
        </>
    )
}

export default Home

function yearsSince(date: string) {
    const past = new Date(date)
    const now = new Date()
    return now.getFullYear() - past.getFullYear() - 1
}
