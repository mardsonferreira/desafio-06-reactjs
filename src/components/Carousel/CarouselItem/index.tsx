import { Flex, Heading, LinkBox, Text, theme } from "@chakra-ui/react";
import Link from "next/link";

import { CarouselItemProps } from "./types";

export function CarouselItem({ id, title, subtitle, url }: CarouselItemProps) {
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
            <Link key={id} href={`/continent/${id}`} passHref>
                <LinkBox as="a">
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
                </LinkBox>
            </Link>
        </Flex>
    );
}
