import { Heading, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'

import { MainLayout } from '~/components'

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
                <Heading as="h1">Daniel John Keefer</Heading>
                <Text>Professional Web Wizard</Text>
            </MainLayout>
        </>
    )
}

export default Home
