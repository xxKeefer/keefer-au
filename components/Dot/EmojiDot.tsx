import { Text } from '@chakra-ui/react'
import React, { useState } from 'react'

import { Dot, DotProps } from './Dot'

type Props = {
    char: string
    emoji: string
} & Omit<DotProps, 'children'>

export const EmojiDot = ({ char, emoji, color }: Props) => {
    const [hover, setHover] = useState(false)
    return (
        <Dot
            color={color}
            size="40px"
            onMouseEnter={() => setHover(!hover)}
            onMouseLeave={() => setHover(!hover)}
        >
            <Text
                as="span"
                color="keefer.black"
                cursor="default"
                fontWeight="black"
                fontSize={hover ? 'xl' : '3xl'}
            >
                {hover ? emoji : char}
            </Text>
        </Dot>
    )
}
