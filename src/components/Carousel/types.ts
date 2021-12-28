export interface Continent {
    id: number;
    title: string;
    subtitle: string;
    url: string;
}

export interface Continents {
    continents: Continent[];
}