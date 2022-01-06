import { GetStaticProps } from "next";
import { Flex, Box, theme, Heading } from "@chakra-ui/react";

import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { TravelTypes } from "../components/TravelTypes";
import { Carousel } from "../components/Carousel";

import { api } from "../services/api";
export interface Continent {
    id: number;
    title: string;
    subtitle: string;
    url: string;
}

export interface HomeProps {
    continents: Continent[];
}

export default function Home({ continents }: HomeProps) {
    return (
        <Flex direction="column">
            <Header />

            <Banner />

            <TravelTypes />

            <Box w="20" h="2px" bg={theme.colors.gray[900]} mx="auto" my="4" />

            <Box my="8">
                <Heading
                    textAlign="center"
                    fontSize={["20", "36"]}
                    fontWeight="medium"
                >
                    Vamos nessa?
                    <br />
                    Então escolha seu continente
                </Heading>
            </Box>

            <Carousel continents={continents} />
        </Flex>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const response = await api.get("/continents");

    const continents = response.data.map((continent) => {
        return {
            id: continent.id,
            title: continent.title,
            subtitle: continent.subtitle,
            url: continent.url,
        };
    });

    return {
        props: {
            continents,
        },
    };
};
