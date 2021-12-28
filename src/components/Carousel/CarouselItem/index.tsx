import { Flex, Heading, Text, theme } from "@chakra-ui/react";

import { CarouselItemProps } from "./types";

export function CarouselItem({ title, subtitle, url }: CarouselItemProps) {
    return (
        <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage={`url('${url}')`}
            bgPosition="100% 30%"
            bgRepeat="no-repeat"
            bgSize="cover"
        >
            <Heading
                fontSize={48}
                fontWeight="bold"
                color={theme.colors.gray[50]}
            >
                {title}
            </Heading>
            <Text
                fontSize={24}
                fontWeight="bold"
                mt="1"
                color={theme.colors.gray[50]}
            >
                {subtitle}
            </Text>
        </Flex>
    );
}
