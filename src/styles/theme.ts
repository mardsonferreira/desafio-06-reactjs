import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        black: "#000000",
        white: "#FFFFFF",
        yellow: {
            "500": "#FFBA08",
        },
        gray: {
            "50": "#F5F8FA", // Light Headings and Text
            "300": "#DADADA", // Light info
            "500": "#999999" // Dark info
        },
        green: {
            "900": "#47585B", // Dark Headings and Text
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