import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    fonts: {
        heading: 'Poppins, sans-serif',
        body: 'Barlow Semi Condensed, sans-serif',
    },
    colors: {
        keefer: {
            black: '#0F000F',
            white: '#F8F8F8',
        },
        knight: {
            '50': '#FDF3E8',
            '100': '#F9DEBE',
            '200': '#F5C993',
            '300': '#F2B469',
            '400': '#EEA03F',
            '500': '#EA8B15',
            '600': '#BB6F11',
            '700': '#8C530D',
            '800': '#5E3708',
            '900': '#2F1C04',
        },
        wizard: {
            '50': '#E7F8FE',
            '100': '#BBEAFC',
            '200': '#8FDDFA',
            '300': '#63CFF8',
            '400': '#37C2F5',
            '500': '#0CB5F3',
            '600': '#0991C3',
            '700': '#076C92',
            '800': '#054861',
            '900': '#022431',
        },
        pirate: {
            '50': '#F4F0F4',
            '100': '#E0D5E1',
            '200': '#CDBACF',
            '300': '#B99FBC',
            '400': '#A684A9',
            '500': '#926996',
            '600': '#755478',
            '700': '#583F5A',
            '800': '#3A2A3C',
            '900': '#1D151E',
        },
    },
    styles: {
        global: {
            'html, body': {
                bg: 'keefer.white',
                color: 'keefer.black',
            },
            'themed-mdx': {
                color: 'white',
            },
            'h1, h2, h3, h4, h5, h6': {
                paddingTop: ['1.5rem', '2rem'],
                paddingBottom: ['0.1rem', '1rem'],
            },
            'h1, h2, h3': {
                color: 'wizard.700',
            },
            'h4, h5, h6': {
                color: 'pirate.300',
            },
            li: {
                marginLeft: '1rem',
            },

            hr: {
                paddingTop: '1rem',
                marginBottom: '1rem',
            },
            pre: {
                padding: '1rem',
            },

            'ul, ol': {
                paddingLeft: ['0.25rem', '1rem'],
                paddingBlock: ['0.25rem', '0.5rem'],
            },
            a: {
                color: 'wizard.500',
            },
            div: {
                '&::-webkit-scrollbar': {
                    borderRadius: '15px',
                    width: ['2px !important', '5px !important'],
                },
                '&::-webkit-scrollbar-thumb': {
                    borderRadius: '15px',
                },
            },
        },
    },
})
