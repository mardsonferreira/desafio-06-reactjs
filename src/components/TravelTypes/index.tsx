import { Box, Flex, Grid, GridItem } from "@chakra-ui/react";

import { TravelType } from "../TravelType";

export const TravelTypes = () => {
    const travelTypes = [
        { id: "1", name: "vida noturna", src: "../images/cocktail.svg" },
        { id: "2", name: "praia", src: "../images/surf.svg" },
        { id: "3", name: "moderno", src: "../images/building.svg" },
        { id: "4", name: "clássico", src: "../images/museum.svg" },
        { id: "5", name: "e mais...", src: "../images/earth.svg" },
    ];
    return (
        <Flex py="20">
            <Grid
                templateColumns="repeat(5, 1fr)"
                gap="4"width="100%"
                mx="auto"
                px="20"
            >
                {travelTypes.map((tp) => (
                    <GridItem key={tp.id}>
                        <TravelType key={tp.id} name={tp.name} img={tp.src} />
                    </GridItem>
                ))}
            </Grid>
        </Flex>
    );
};
