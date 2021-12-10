import { Flex, SimpleGrid, Box, Text, theme } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { Banner } from "../components/Banner";

export default function Home() {
    return (
        <Flex direction="column" height="100vh">
            <Header />
            <Banner />
        </Flex>
    );
}
