import { useEffect, useState } from "react";
import { Flex, Box, theme, Heading } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { TravelTypes } from "../components/TravelTypes";
import { Carousel } from "../components/Carousel";

import { api } from "../services/api";
import { makeServer } from "../services/server";

if (process.env.NODE_ENV === "development") {
    makeServer({ environment: "development" });
}

export interface Continent {
    id: number;
    title: string;
    subtitle: string;
    url: string;
}

export default function Home() {
    const [continents, setContinents] = useState<Continent[]>([]);

    useEffect(() => {
        async function loadContinents() {
            const response = await api.get("/continents");
            const continents = response.data.continents;
            setContinents(continents);
        }

        loadContinents();
    }, []);

    return (
        <Flex direction="column">
            <Header />

            <Banner />

            <TravelTypes />

            <Box w="20" h="2px" bg={theme.colors.gray[900]} mx="auto" my="4" />

            <Box my="8">
                <Heading textAlign="center" fontSize={36} fontWeight="medium">
                    Vamos nessa?
                    <br />
                    Então escolha seu continente
                </Heading>
            </Box>

            <Carousel continents={continents} />
        </Flex>
    );
}
