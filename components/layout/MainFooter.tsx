import { HStack, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

import { ROUTES } from '~/constants'

import { Dot } from '../Dot'

export const MainFooter = () => {
    return (
        <HStack
            as="footer"
            bg="keefer.black"
            paddingBlock="3"
            justify="space-between"
            position="fixed"
            bottom="0"
            w="full"
            zIndex={999}
        >
            <Stack direction={{ base: 'column', md: 'row' }}>
                <HStack px="4">
                    <Dot color="pirate.500" size="10px" />
                    <Dot color="knight.500" size="10px" />
                    <Dot color="wizard.500" size="10px" />
                    <Dot color="pirate.500" size="10px" />
                    <Dot color="knight.500" size="10px" />
                    <Dot color="wizard.500" size="10px" />
                </HStack>
                <Text
                    color="keefer.white"
                    fontSize={{ base: 'xs', md: 'sm' }}
                    fontWeight={500}
                    pl={{ base: '4', md: '0' }}
                >
                    Daniel John Keefer, &copy; Copyright{' '}
                    {new Date().getFullYear()}
                </Text>
            </Stack>
            <HStack px="4">
                <Dot
                    color="pirate.500"
                    _hover={{ bg: 'pirate.200' }}
                    size="40px"
                    onClick={() => window.open(ROUTES.LINKEDIN, '_blank')}
                >
                    <Text as="span" fontSize="2xl">
                        <FaLinkedinIn />
                    </Text>
                </Dot>
                <Dot
                    color="knight.500"
                    _hover={{ bg: 'knight.200' }}
                    size="40px"
                    onClick={() => window.open(ROUTES.GITHUB, '_blank')}
                >
                    <Text as="span" fontSize="3xl">
                        <FaGithub />
                    </Text>
                </Dot>
                <Dot
                    color="wizard.500"
                    _hover={{ bg: 'wizard.200' }}
                    size="40px"
                    onClick={() => window.open(ROUTES.TWITTER, '_blank')}
                >
                    <Text as="span" fontSize="2xl">
                        <FaTwitter />
                    </Text>
                </Dot>
            </HStack>
        </HStack>
    )
}
