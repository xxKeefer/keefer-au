import {
    AspectRatio,
    Box,
    Button,
    Heading,
    HStack,
    Image,
    Skeleton,
    Stack,
    StackProps,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { FaGithub, FaGlobe } from 'react-icons/fa'

type Project = {
    name: string
    image: string
    url: string
    github: string
}

interface Props {
    product: Project
    rootProps?: StackProps
    children: ReactNode
}

export const Project = (props: Props) => {
    const { product, rootProps, children } = props
    const { name, image, url, github } = product
    return (
        <Stack dir="column" align="end" justify="end" {...rootProps}>
            <Stack w="full" pb="4" mb="auto">
                <Heading as="h3" fontWeight="medium" w="fit-content" p="0">
                    {name}
                </Heading>

                <HStack>
                    <Text textAlign="justify" pr="4">
                        {children}
                    </Text>
                </HStack>
            </Stack>

            <Box
                position="relative"
                w="full"
                as="a"
                cursor="pointer"
                href={url}
                target="_blank"
                rel="noopener noreferrer"
            >
                <AspectRatio ratio={4 / 3}>
                    <Image
                        src={image}
                        alt={name}
                        draggable="false"
                        fallback={<Skeleton />}
                        borderRadius={useBreakpointValue({
                            base: 'md',
                            md: 'xl',
                        })}
                    />
                </AspectRatio>
            </Box>
            <HStack w="full" pt={{ base: 0, md: 4 }}>
                <Button
                    bg="pirate.500"
                    color="keefer.black"
                    _hover={{ bg: 'pirate.300' }}
                    leftIcon={<FaGlobe />}
                    size="sm"
                    w="full"
                    as="a"
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    See it live
                </Button>
                <Button
                    bg="knight.500"
                    color="keefer.black"
                    _hover={{ bg: 'knight.300' }}
                    leftIcon={<FaGithub />}
                    size="sm"
                    w="full"
                    as="a"
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Read the code
                </Button>
            </HStack>
        </Stack>
    )
}
