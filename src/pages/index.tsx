import { Flex, Box, theme, Heading } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { TravelTypes } from "../components/TravelTypes";
import { Carousel } from "../components/Carousel";

export default function Home() {
    return (
        <Flex direction="column">
            <Header />

            <Banner />

            <TravelTypes />

            <Box
                w="20"
                h="2px"
                bg={theme.colors.gray[900]}
                mx="auto"
                my="4"
            />

            <Box my="8">
                <Heading textAlign="center" fontSize={36} fontWeight="medium">
                    Vamos nessa?
                    <br />
                    Então escolha seu continente
                </Heading>
            </Box>

            <Carousel />
        </Flex>
    );
}
