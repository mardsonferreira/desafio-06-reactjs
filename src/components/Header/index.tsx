import { Flex, Image, theme } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import Link from "next/link";
import { useRouter } from "next/router";

export function Header() {
    const { asPath } = useRouter();

    return (
        <Link href="/" passHref>
            <Flex
                as="header"
                w="100%"
                h={["12", "24"]}
                align="center"
                justifyContent="center"
                marginY="4"
            >
                {asPath !== "/" && (
                    <ChevronLeftIcon
                        boxSize={[8, 12]}
                        cursor="pointer"
                        color={theme.colors.gray[300]}
                        position="absolute"
                        top={["7", "12"]}
                        left={["2", "28"]}
                    />
                )}
                <Image
                    src="../images/Logo.svg"
                    alt="logo"
                    width="46"
                    height={["8", "16"]}
                />
            </Flex>
        </Link>
    );
}
