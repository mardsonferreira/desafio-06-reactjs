import { Flex, Image, theme } from "@chakra-ui/react";

export function Header() {
    return (
        <Flex as="header"
            w="100%"
            h={["12", "24"]}
            align="center"
            justifyContent="center"
            marginY="4"
        >
            <Image src="../images/Logo.svg" alt="logo" width="46" height={["8", "16"]} />
        </Flex>
    );
}
