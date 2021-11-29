import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        black: "#000000",
        white: "#FFFFFF",
        yellow: {
            "500": "#FFBA08",
        },
        gray: {
            "50": "#F5F8FA",
            "300": "#DADADA",
            "500": "#999999"
        },
        green: {
            "900": "#47585B",
        }
    },
    fonts: {
        heading: "Poppins",
        body: "Poppins",
    },
    styles: {
        global: {
            body: {
                bg: 'white'
            }
        }
    }
})