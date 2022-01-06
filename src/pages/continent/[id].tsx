import {
    Flex,
    Text,
    Box,
    Stack,
    Heading,
    theme,
    Tooltip,
    useBreakpointValue,
} from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";

import { GetStaticPaths, GetStaticProps } from "next";

import { Header } from "../../components/Header";
import { Gallery } from "../../components/Gallery";

import { api } from "../../services/api";

interface Country {
    id: number;
    image: string;
    name: string;
    capital: string;
    flag: string;
}

export interface Continent {
    id: number;
    title: string;
    subtitle: string;
    url: string;
    description: string;
    totalCountries: number;
    totalLanguages: number;
    totalCities: number;
    banner: string;
    countries: Country[];
}

export interface ContinentProps {
    continent: Continent;
}

export default function Continent({ continent }: ContinentProps) {
    const isWideVersion = useBreakpointValue({
        base: false,
        md: false,
        lg: true,
    });

    return (
        <Flex direction="column">
            <Header />

            <Flex
                bgImage={`url(${continent.banner})`}
                bgRepeat="no-repeat"
                bgPosition="center"
                bgSize="cover"
                w="100%"
                h="500px"
                direction="column-reverse"
                justifyContent={["center", "flex-start"]}
                alignItems={["center", "flex-start"]}
            >
                <Heading
                    mb={[null, "16"]}
                    ml={[null, "32"]}
                    fontSize="48"
                    fontWeight="semibold"
                    color={theme.colors.gray[300]}
                >
                    {continent.title}
                </Heading>
            </Flex>

            <Flex direction="column" mx={["4", "32"]}>
                <Flex
                    direction={["column", "row"]}
                    justifyContent="space-between"
                    alignItems="center"
                    my={["8", "16"]}
                >
                    <Text
                        width={["100%", "50%"]}
                        textAlign="justify"
                        fontSize={["14", "24"]}
                        fontWeight="regular"
                        color={theme.colors.green[900]}
                    >
                        {continent.description}
                    </Text>

                    {!isWideVersion && <Box my="4" />}

                    <Stack direction="row" spacing="16">
                        <Box>
                            <Heading
                                fontSize={["24", "48"]}
                                fontWeight="semibold"
                                color={theme.colors.yellow[500]}
                            >
                                {continent.totalCountries}
                            </Heading>
                            <Text
                                fontSize={["18", "24"]}
                                fontWeight={["regular", "semibold"]}
                                color={theme.colors.green[900]}
                            >
                                países
                            </Text>
                        </Box>
                        <Box>
                            <Heading
                                fontSize={["24", "48"]}
                                fontWeight="semibold"
                                color={theme.colors.yellow[500]}
                            >
                                {continent.totalLanguages}
                            </Heading>
                            <Text
                                fontSize={["18", "24"]}
                                fontWeight={["regular", "semibold"]}
                                color={theme.colors.green[900]}
                            >
                                línguas
                            </Text>
                        </Box>
                        <Box>
                            <Heading
                                fontSize={["24", "48"]}
                                fontWeight="semibold"
                                color={theme.colors.yellow[500]}
                            >
                                27
                            </Heading>
                            <Flex alignItems="center">
                                <Text
                                    fontSize={["18", "24"]}
                                    fontWeight={["regular", "semibold"]}
                                    color={theme.colors.green[900]}
                                >
                                    cidades +100
                                </Text>
                                <Tooltip
                                    label={`${continent.totalCities} cidades`}
                                >
                                    <InfoOutlineIcon
                                        boxSize={4}
                                        cursor="pointer"
                                        color={theme.colors.gray[500]}
                                        ml="1"
                                    />
                                </Tooltip>
                            </Flex>
                        </Box>
                    </Stack>
                </Flex>

                <Heading
                    fontSize="36"
                    fontWeight="medium"
                    color={theme.colors.green[900]}
                    mb="8"
                >
                    Cidades +100
                </Heading>

                <Gallery items={continent.countries} />
            </Flex>
        </Flex>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: "blocking",
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    const { params } = context;

    const response = await api.get(`/continents/${params.id}`);

    const continent = response.data;

    return {
        props: {
            continent,
        },
    };
};
