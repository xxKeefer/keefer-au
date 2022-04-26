import { HStack, Text, TextProps } from '@chakra-ui/react'
import React, { useState } from 'react'

import { EmojiDot } from '../Dot'

export const DJKLogo = () => {
    return (
        <HStack px="4">
            <EmojiDot color="pirate.500" char="K" emoji="🧙‍♂️" />
            <EmojiDot color="knight.500" char="E" emoji="💻" />
            <EmojiDot color="wizard.500" char="E" emoji="✨" />
            <EmojiDot color="pirate.500" char="F" emoji="🦄" />
            <EmojiDot color="knight.500" char="E" emoji="🌈" />
            <EmojiDot color="wizard.500" char="R" emoji="⚡" />
        </HStack>
    )
}
