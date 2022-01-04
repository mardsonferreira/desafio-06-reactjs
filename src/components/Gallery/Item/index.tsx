import { Flex, Image, Stack, Text, theme } from "@chakra-ui/react";

import { ItemProps } from "./types";

export function Item({ name, capital, image, flag }: ItemProps) {
    return (
        <Flex
            direction="column"
            border="1px"
            borderColor={theme.colors.yellow[500]}
            borderRadius="4"
        >
            <Image src={image} alt={name} h={173} />
            <Flex
                alignItems="center"
                justifyContent="space-between"
                p="4"
                color={theme.colors.gray[500]}
            >
                <Stack>
                    <Text fontSize="20" fontWeight="semibold">
                        {capital}
                    </Text>
                    <Text fontSize="16" fontWeight="medium">
                        {name}
                    </Text>
                </Stack>
                <Image borderRadius="full" boxSize={8} src={flag} alt={name} />
            </Flex>
        </Flex>
    );
}
