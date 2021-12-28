import { color, Flex } from "@chakra-ui/react";
import SwiperCore, { Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Continents } from "./types";

import { CarouselItem } from "./CarouselItem";

SwiperCore.use([Navigation, Pagination, Scrollbar]);

export function Carousel({ continents }: Continents) {
    return (
        <Flex
            w="100%"
            h={["250px", "450px"]}
            mx="auto"
            px="36"
            mb={["5", "10"]}
        >
            <Swiper className="mySwiper" slidesPerView={1} navigation={true} pagination={true}>
                {continents.map((continent) => (
                    <SwiperSlide key={continent.id}>
                        <CarouselItem
                            title={continent.title}
                            subtitle={continent.subtitle}
                            url={continent.url}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Flex>
    );
}
