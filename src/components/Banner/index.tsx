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
        <Flex
            width="100%"
            justifyContent="center"
            backgroundImage="url('/images/Background.svg')"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            align="center"
            px="36"
            py="16"
        >
            <Stack spacing="5" width="100%">
                <Heading
                    fontSize={["20", "36"]}
                    fontWeight="medium"
                    color={theme.colors.gray[50]}
                >
                    5 Continentes,
                    <br />
                    infinitas possibilidades.
                </Heading>
                <Text fontSize={["12", "20"]} color={theme.colors.gray[300]}>
                    Chegou a hora de tirar do papel a viagem que você
                    <br />
                    sempre sonhou.
                </Text>
            </Stack>
            {isWideVersion && (
                <Image
                    src="../images/Airplane.svg"
                    alt="Airplane"
                    position="absolute"
                    right={["4", "36"]}
                    top="32"
                />
            )}
        </Flex>
    );
}
