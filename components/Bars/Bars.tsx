import { Text } from '@chakra-ui/react'
import React from 'react'

export const Bars = () => {
    return (
        <>
            <Text
                as="span"
                fontSize="inherit"
                fontFamily="inherit"
                color="pirate.700"
                letterSpacing="-0.2em"
            >
                /
            </Text>
            <Text
                as="span"
                fontSize="inherit"
                fontFamily="inherit"
                color="knight.700"
                letterSpacing="-0.2em"
            >
                /
            </Text>
            <Text
                as="span"
                fontSize="inherit"
                fontFamily="inherit"
                color="wizard.700"
                letterSpacing="-0.2em"
            >
                /
            </Text>
        </>
    )
}
