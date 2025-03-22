import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import your hero images
import slide1 from "../../assets/hero1.jpg";
import slide2 from "../../assets/hero2.jpg";
import slide3 from "../../assets/hero3.jpg";

const slides = [
    { id: 1, image: slide1, alt: "Medical Consultation" },
    { id: 2, image: slide2, alt: "Advanced Surgery" },
    { id: 3, image: slide3, alt: "Patient Care" },
];

export default function HeroSlider() {
    return (
        <Box sx={{ width: "100%", position: "relative", overflow: "hidden" }}>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                style={{ width: "100%", height: "500px" }} // Adjust height as needed
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <Box
                            component="img"
                            src={slide.image}
                            alt={slide.alt}
                            sx={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
}
