// import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import { Grid } from "@mui/material";

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
              src="/images/slide3.jpg"
              alt="baner01"
              className="img-fluid"
              height={500}
              width="100%"
            />
          </Grid>
        </SwiperSlide>
        <SwiperSlide>
          <Grid container maxHeight={500}>
            <img
              src="/images/slide2.jpg"
              alt="baner01"
              className="img-fluid"
              height={500}
              width="100%"
            />
          </Grid>
        </SwiperSlide>
        <SwiperSlide>
          <Grid container maxHeight={500}>
            <img
              src="/images/slide1.jpg"
              alt="baner01"
              className="img-fluid"
              height={500}
              width="100%"
            />
          </Grid>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default TopSwiper;
