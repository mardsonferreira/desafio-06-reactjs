import {
    Flex,
    Image,
    Stack,
    Text,
    theme,
    Icon,
    useBreakpointValue,
} from "@chakra-ui/react";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";

import { TravelTypeProps } from "./types";

export const TravelType: React.FC<TravelTypeProps> = ({
    img,
    name,
}: TravelTypeProps) => {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

    return (
        <Flex justifyContent={isWideVersion ? "center" : "flex-start"}>
            <Stack
                direction={isWideVersion ? "column" : "row"}
                spacing="4"
                alignItems={["center", null]}
            >
                {isWideVersion ? (
                    <Image src={img} alt={name} width="85" height="85" />
                ) : (
                    <Icon
                        as={RiCheckboxBlankCircleFill}
                        color={theme.colors.yellow[900]}
                    />
                )}

                <Text
                    as="span"
                    color={theme.colors.green[900]}
                    fontWeight="semibold"
                    fontSize={["16", "24"]}
                >
                    {name}
                </Text>
            </Stack>
        </Flex>
    );
};
