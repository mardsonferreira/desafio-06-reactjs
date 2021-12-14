import { Flex, Image, Stack, Heading, theme } from "@chakra-ui/react";

import { TravelTypeProps } from "./types";

export const TravelType: React.FC<TravelTypeProps> = ({
    img,
    name,
}: TravelTypeProps) => {
    return (
        <Flex
            direction="column"
            justifyContent="space-between"
            align="center"
        >
            <Stack spacing="5">
                <Image src={img} alt={name} width="85" height="85" />

                <Heading
                    color={theme.colors.green[900]}
                    fontWeight="semibold"
                    fontSize="24"
                >
                    {name}
                </Heading>

            </Stack>

        </Flex>
    );
};
