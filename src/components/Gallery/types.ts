interface Item {
    id: number;
    image: string;
    name: string;
    capital: string;
    flag: string;
}

export interface ItemProps {
    items: Item[];
}
