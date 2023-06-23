import Typography from "@mui/material/Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import { Grid } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

function NewProducts() {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Grid container justifyContent="center" mt={10}>
      <Typography variant="h5">جدید ترین ها</Typography>
      <Grid container mt={10} spacing={5} p={isMobile ? 0 : 2}>
        <Swiper
          slidesPerView={isMobile ? 1 : 4}
          spaceBetween={30}
          slidesPerGroup={1}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay
          speed={1000}
          navigation={!isMobile ?? false}
          modules={[Pagination, Navigation, Autoplay]}
        >
          {Array(12)
            .fill(null)
            .map((A, i) => (
              <SwiperSlide>
                <Grid container maxHeight={500}>
                  <img
                    src="/images/products/p1.jpg"
                    alt="baner01"
                    width="100%"
                  />
                </Grid>
              </SwiperSlide>
            ))}
        </Swiper>
      </Grid>
    </Grid>
  );
}

export default NewProducts;
