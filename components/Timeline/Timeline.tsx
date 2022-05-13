import { Box, VStack } from '@chakra-ui/react'
import React from 'react'

type Props = {
    children: React.ReactNode
}

export const Timeline = ({ children }: Props) => {
    return (
        <Box w="full" pos="relative" py="8">
            <Box
                pos="absolute"
                w="4px"
                h="100%"
                bg={{ base: 'keefer.black', md: 'keefer.black' }}
                left="calc(50% - 2px)"
                mt="-8"
                zIndex={20}
            />
            <VStack w="full" gap={{ base: '10', md: '4' }} align="center">
                {children}
            </VStack>
        </Box>
    )
}
