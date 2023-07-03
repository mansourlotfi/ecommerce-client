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

function FeturedProducts() {
  const isMobile = useMediaQuery("(max-width:600px)");
  const { featuredProducts } = useProducts();

  return (
    <Grid container justifyContent="center" mt={10}>
      <Typography variant="h5">پرفروش ترین ها</Typography>
      <Grid container mt={10} spacing={5} p={isMobile ? 0 : 2}>
        <Swiper
          slidesPerView={isMobile ? 1 : 4}
          spaceBetween={isMobile ? 0 : 30}
          slidesPerGroup={1}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay
          speed={800}
          navigation={isMobile ? false : true}
          modules={[Pagination, Navigation, Autoplay]}
          style={{
            width: "100%",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            marginRight: 40,
          }}
        >
          {featuredProducts.map((P, i) => (
            <SwiperSlide key={i}>
              <Grid
                container
                // height={400}
                // width={400}
                width="100%"
                component={NavLink}
                to={`/catalog/${P.id}`}
                justifyContent="center"
              >
                <div
                  style={{
                    backgroundImage: `url(${P.pictureUrl})`,
                    height: 400,
                    width: "100%",
                    aspectRatio: "auto",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    // objectFit: "fill",
                    backgroundSize: "cover",
                    overflow: "hidden",
                  }}
                ></div>
                {/* <img
                  src={P.pictureUrl}
                  alt={P.name}
                  width="100%"
                  style={{ borderRadius: 16 }}
                /> */}
              </Grid>
            </SwiperSlide>
          ))}
        </Swiper>
      </Grid>
    </Grid>
  );
}

export default FeturedProducts;
