import { SimpleGrid } from "@chakra-ui/react";

import { Item } from "./Item";

import { ItemProps } from "./types";

export function Gallery({ items }: ItemProps) {
    return (
        <SimpleGrid width="100%" columns={[1, 4]} spacing="16" my="8">
            {items.map((item) => (
                <Item
                    key={item.id}
                    capital={item.capital}
                    name={item.name}
                    image={item.image}
                    flag={item.flag}
                />
            ))}
        </SimpleGrid>
    );
}
