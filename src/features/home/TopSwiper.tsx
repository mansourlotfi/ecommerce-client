// import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import { useMediaQuery } from "@mui/material";

// const settings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   rtl: false,
//   arrows: false,
// };
function TopSwiper() {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <>
      {/* <Slider {...settings}>
        <div>
          <img
            src="/images/slide1.jpg"
            alt="hero"
            style={{ display: "block", width: "100%", maxHeight: 500 }}
          />
        </div>
        <div>
          <img
            src="/images/slide2.jpg"
            alt="hero"
            style={{ display: "block", width: "100%", maxHeight: 500 }}
          />
        </div>
        <div>
          <img
            src="/images/slide3.jpg"
            alt="hero"
            style={{ display: "block", width: "100%", maxHeight: 500 }}
          />
        </div>
      </Slider> */}
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 8000,
        }}
        speed={1500}
        navigation={isMobile ? false : true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            style={{
              backgroundImage: isMobile
                ? "url(images/cover/cover1.jpg)"
                : "url(images/cover/slide1.jpg)",
              height: 400,
              width: "100%",
              aspectRatio: "auto",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              // objectFit: "fill",
              backgroundSize: "cover",
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: isMobile
                ? "url(images/cover/cover2.jpg)"
                : "url(images/cover/slide2.jpg)",
              height: 400,
              width: "100%",
              aspectRatio: "auto",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              // objectFit: "fill",
              backgroundSize: "cover",
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: isMobile
                ? "url(images/cover/cover3.jpg)"
                : "url(images/cover/slide3.jpg)",
              height: 400,
              width: "100%",
              aspectRatio: "auto",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              // objectFit: "fill",
              backgroundSize: "cover",
            }}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: isMobile
                ? "url(images/cover/cover4.jpg)"
                : "url(images/cover/slide4.jpg)",
              height: 400,
              width: "100%",
              aspectRatio: "auto",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              // objectFit: "fill",
              backgroundSize: "cover",
            }}
          ></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default TopSwiper;
