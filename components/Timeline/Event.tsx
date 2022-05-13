import { Box, HStack, Text, useBreakpoint, VStack } from '@chakra-ui/react'
import React from 'react'

import { Dot } from '../Dot'

type EventProps = {
    right?: boolean
    emoji?: string
    title: string
    children: React.ReactNode
    color?: 'pirate' | 'knight' | 'wizard'
}

export const Event = ({
    right,
    children,
    title,
    emoji,
    color = 'pirate',
}: EventProps) => {
    const screen = useBreakpoint('(max-width: 640px)')
    const isMobile = ['base', 'sm'].includes(screen ?? '')
    return (
        <Box
            zIndex={30}
            w={{ base: '100%', md: 'calc(50% + 29px)' }}
            alignSelf={right ? 'end' : 'start'}
            bg={{ base: `${color}.100`, md: 'transparent' }}
            border={{ base: '2px solid', md: 'none' }}
            borderColor="keefer.black"
            borderRadius="lg"
            p={{ base: '4', md: '1' }}
        >
            <HStack
                w="full"
                flexDirection={right ? 'row-reverse' : 'row'}
                gap="4"
            >
                <VStack align={right ? 'start' : 'end'}>
                    <Text fontFamily="Poppins" fontSize="xl">
                        {isMobile && emoji} {title}
                    </Text>
                    <Box fontSize="xl" textAlign={right ? 'left' : 'right'}>
                        {children}
                    </Box>
                </VStack>
                {!isMobile && (
                    <Box w="50px" m="0 !important">
                        <Dot size="50px" color={`${color}.500`}>
                            <Text fontSize="3xl">{emoji}</Text>
                        </Dot>
                    </Box>
                )}
            </HStack>
        </Box>
    )
}
