import {
    Flex,
    Box,
    Text,
    Image,
    theme,
    Stack,
    Heading,
    useBreakpointValue,
} from "@chakra-ui/react";

export function Banner() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

    return (
        <Box
            w="100%"
            h={["40", "80"]}
            backgroundImage="url('/images/Background.svg')"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
        >
            <Flex
                maxWidth={1440}
                width="100%"
                height="100%"
                align="center"
                justifyContent="center"
                position="relative"
            >
                <Stack spacing="5" width="100%" px={["4", "28"]}>
                    <Heading
                        fontSize={["20","36"]}
                        fontWeight="medium"
                        color={theme.colors.gray[50]}
                    >
                        5 Continentes,
                        <br />
                        infinitas possibilidades.
                    </Heading>
                    <Text fontSize={["12","20"]} color={theme.colors.gray[300]}>
                        Chegou a hora de tirar do papel a viagem que você
                        <br />
                        sempre sonhou.
                    </Text>
                </Stack>
            </Flex>
            {isWideVersion && (
                <Image
                    src="../images/Airplane.svg"
                    alt="Airplane"
                    position="absolute"
                    right={["4","32"]}
                    top="40"
                />
            )}
        </Box>
    );
}
