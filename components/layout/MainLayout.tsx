import { Box, Container } from '@chakra-ui/react'
import React from 'react'

import { Navbar } from '../nav'
import { MainFooter } from './MainFooter'

type Props = {
    children: React.ReactNode
}

export const MainLayout = ({ children }: Props) => {
    return (
        <>
            <Navbar />
            <Container
                as="main"
                bg="keefer.white"
                color="keefer.black"
                py="100px"
            >
                {children}
            </Container>
            <MainFooter />
        </>
    )
}
