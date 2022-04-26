import { HStack } from '@chakra-ui/react'
import React from 'react'

import { DJKLogo } from './DJKLogo'

type Props = {}

export const Navbar = (props: Props) => {
    return (
        <HStack
            as="header"
            bg="keefer.black"
            color="keefer.white"
            h="80px"
            py="10px"
            position="fixed"
            top="0"
            w="full"
        >
            <DJKLogo />
        </HStack>
    )
}
