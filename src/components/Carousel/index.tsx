import { Flex, Heading, Text, theme } from "@chakra-ui/react";
import SwiperCore, { Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/scrollbar';

SwiperCore.use([Navigation, Pagination, Scrollbar]);

export function Carousel() {
    return (
        <Flex
            w="100%"
            h={["250px", "450px"]}
            maxW="1240px"
            mx="auto"
            mb={["5", "10"]}
        >
            <Swiper
                slidesPerView={1}
                navigation={true}
                pagination={true}
            >
                <SwiperSlide>
                    <Flex
                        w="100%"
                        h="100%"
                        align="center"
                        justify="center"
                        direction="column"
                        bgImage="url('/images/Background.svg')"
                        bgPosition="100% 30%"
                        bgRepeat="no-repeat"
                        bgSize="cover"
                    >
                        <Heading>Europa</Heading>
                        <Text>O continente mais antigo</Text>
                    </Flex>
                </SwiperSlide>

                <SwiperSlide>
                    <Flex
                        w="100%"
                        h="100%"
                        align="center"
                        justify="center"
                        direction="column"
                        bgImage="url('/images/Background.svg')"
                        bgPosition="100% 30%"
                        bgRepeat="no-repeat"
                        bgSize="cover"
                        textAlign="center"
                    >
                        <Heading>Slider</Heading>
                    </Flex>
                </SwiperSlide>
            </Swiper>
        </Flex>
    );
}
