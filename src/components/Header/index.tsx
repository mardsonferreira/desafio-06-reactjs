import { Flex, Image, Box } from "@chakra-ui/react";

export function Header() {
    return (
        <Flex
            as="header"
            w="100%"
            h={["12", "24"]}
            maxWidth={1440}
            align="center"
            justifyContent="center"
        >
            <Image src="../images/Logo.svg" alt="logo" width="46" height={["8", "16"]} />
        </Flex>
    );
}
