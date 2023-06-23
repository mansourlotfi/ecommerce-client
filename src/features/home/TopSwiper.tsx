// import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import { Grid, useMediaQuery } from "@mui/material";

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
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Grid container maxHeight={500}>
            <img
              src={
                isMobile
                  ? "/images/mobileCover/cover1.jpg"
                  : "/images/slide3.jpg"
              }
              alt="baner01"
              className="img-fluid"
              width={!isMobile ? "100%" : undefined}
              height={!isMobile ? 500 : undefined}
            />
          </Grid>
        </SwiperSlide>
        <SwiperSlide>
          <Grid container maxHeight={500}>
            <img
              src={
                isMobile
                  ? "/images/mobileCover/cover2.jpg"
                  : "/images/slide2.jpg"
              }
              alt="baner03"
              className="img-fluid"
              width={!isMobile ? "100%" : undefined}
            />
          </Grid>
        </SwiperSlide>
        <SwiperSlide>
          <Grid container maxHeight={500}>
            <img
              src={
                isMobile
                  ? "/images/mobileCover/cover3.jpg"
                  : "/images/slide1.jpg"
              }
              alt="baner03"
              className="img-fluid"
              width={!isMobile ? "100%" : undefined}
            />
          </Grid>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default TopSwiper;
