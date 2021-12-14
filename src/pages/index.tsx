import { Flex, Box, theme, Heading } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
    return (
        <Flex direction="column" height="100vh">
            <Header />
            <Banner />

            <TravelTypes />

            <Box
                w={{ base: "60px", xl: "90px" }}
                h="2px"
                bg={theme.colors.gray[900]}
                mx="auto"
            />

            <Box mt="20">
                <Heading textAlign="center" fontSize="32" fontWeight="medium">
                    Vamos nessa?
                    <br />
                    Então escolha seu continente
                </Heading>
            </Box>
        </Flex>
    );
}
