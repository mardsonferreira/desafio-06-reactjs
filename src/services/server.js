import { createServer, Model } from "miragejs";

export function makeServer({ environment = "test" } = {}) {
    let server = createServer({
        environment,

        models: {
            continent: Model,
        },

        seeds(server) {
            server.db.loadData({
                continents: [
                    {
                        id: 1,
                        title: "Europa",
                        subtitle:
                            "É composto por 50 países e possui o maior bloco econômico do mundo.",
                        url: "/images/europa.svg",
                    },
                    {
                        id: 2,
                        title: "América do Norte",
                        subtitle:
                            "O terceiro maior continente da Terra cobre uma área de 24,7 milhões de km²",
                        url: "/images/north_america.jpg",
                    },
                    {
                        id: 3,
                        title: "América do Sul",
                        subtitle:
                            "A América do Sul faz fronteira com três oceanos e Mar do Caribe.",
                        url: "/images/south_america.jpg",
                    },
                    {
                        id: 4,
                        title: "Ásia",
                        subtitle:
                            "A Ásia cobre uma área que corresponde a cerca de 30% da área total da Terra.",
                        url: "/images/asia.jpg",
                    },
                    {
                        id: 5,
                        title: "África",
                        subtitle:
                            "A África é o segundo maior continente do mundo em área e população.",
                        url: "/images/africa.jpg",
                    },
                    {
                        id: 6,
                        title: "Oceania",
                        subtitle:
                            "A Oceania cobre uma área de aproximadamente 100 milhões de km².",
                        url: "/images/aceania.jpg",
                    }
                ]
            });
        },

        routes() {
            this.namespace = "api";

            this.get("/continents", () => {
                return this.schema.all("continent");
            });
        },
    });

    return server;
}
