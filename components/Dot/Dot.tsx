import { BackgroundProps, Flex, FlexProps } from '@chakra-ui/react'
import React from 'react'

export type DotProps = {
    children?: React.ReactNode
    color: BackgroundProps['bg']
    size?: FlexProps['h']
} & FlexProps

export const Dot = ({
    children,
    color,
    size,
    _hover,
    onClick,
    ...props
}: DotProps) => (
    <Flex
        align="center"
        justify="center"
        h={size || '10px'}
        w={size || '10px'}
        borderRadius="full"
        bg={color}
        _hover={{ cursor: `${_hover ? 'pointer' : 'auto'}`, ..._hover }}
        onClick={onClick}
        {...props}
    >
        {children}
    </Flex>
)
