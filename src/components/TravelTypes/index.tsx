import { SimpleGrid, useBreakpointValue } from "@chakra-ui/react";

import { TravelType } from "../TravelType";

export const TravelTypes = () => {
    const travelTypes = [
        { id: "1", name: "vida noturna", src: "../images/cocktail.svg" },
        { id: "2", name: "praia", src: "../images/surf.svg" },
        { id: "3", name: "moderno", src: "../images/building.svg" },
        { id: "4", name: "clássico", src: "../images/museum.svg" },
        { id: "5", name: "e mais...", src: "../images/earth.svg" },
    ];

    const isWideVersion = useBreakpointValue({
        base: false,
        md: false,
        lg: true,
    });

    return (
        <SimpleGrid
            columns={isWideVersion ? 5 : 2}
            spacing="8"
            px={["8", "36"]}
            py={["8", "16"]}
        >
            {travelTypes.map((tp) => (
                <TravelType key={tp.id} name={tp.name} img={tp.src} />
            ))}
        </SimpleGrid>
    );
};
