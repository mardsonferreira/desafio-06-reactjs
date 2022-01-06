import {
    Flex,
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
        md: false,
        lg: false,
        xl: true
    });

    return (
        <Flex
            width="100%"
            justifyContent="start"
            backgroundImage="url('/images/Background.svg')"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            align="center"
            px={["8", "36"]}
            py={["8", "16"]}
        >
            <Stack spacing="5" width="100%" maxW="512px">
                <Heading
                    fontSize={["20", "36"]}
                    fontWeight="medium"
                    color={theme.colors.gray[50]}
                >
                    5 Continentes,
                    <Text>infinitas possibilidades.</Text>
                </Heading>
                <Text
                    fontSize={["12", "20"]}
                    fontWeight="regular"
                    color={theme.colors.gray[300]}
                >
                    Chegou a hora de tirar do papel a viagem que você sempre
                    sonhou.
                </Text>
            </Stack>
            {isWideVersion && (
                <Image
                    src="../images/Airplane.svg"
                    alt="Airplane"
                    position="absolute"
                    right={["4", "36"]}
                    top="40"
                />
            )}
        </Flex>
    );
}
