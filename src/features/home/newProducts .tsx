import Typography from "@mui/material/Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import { Grid } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import useProducts from "../../app/hooks/useProducts";
import { NavLink } from "react-router-dom";

function NewProducts() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const { products } = useProducts();

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
          navigation={isMobile ? false : true}
          modules={[Pagination, Navigation, Autoplay]}
          style={{ width: "100%" }}
        >
          {products.map((P, i) => (
            <SwiperSlide key={i}>
              <Grid
                container
                // height={400}
                // p={10}
                width="100%"
                component={NavLink}
                to={`/catalog/${P.id}`}
                justifyContent="center"
              >
                <img
                  src={P.pictureUrl}
                  alt={P.name}
                  width="100%"
                  style={{ borderRadius: 16 }}
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
