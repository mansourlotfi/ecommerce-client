import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { useAppDispatch } from "../../app/store/configureStore";
import { setProductParams } from "../catalog/catalogSlice";
import { NavLink } from "react-router-dom";
import useBrands from "../../app/hooks/useBrands";

function Brands() {
  const { brands, brandsLoaded } = useBrands();
  const dispatch = useAppDispatch();
  const navStyles = {
    borderRadius: 4,
    color: "inherit",
    textDecoration: "none",
    typography: "h6",
    whiteSpace: "nowrap",
    "&:hover": {
      color: "grey.500",
    },
    "&.active": {
      color: "text.secondary",
    },
  };
  if (!brandsLoaded) return <LoadingComponent />;
  return (
    <Grid container justifyContent="center" mt={10}>
      <Typography variant="h5">برند ها</Typography>
      <Grid container spacing={5} p={2}>
        {brands.map((C, i) => (
          <Grid item xs={6} md={2} key={C.id}>
            <Card
              component={NavLink}
              to={"/catalog"}
              sx={navStyles}
              onClick={(e) => {
                dispatch(setProductParams({ brands: [C.name] }));
              }}
            >
              <CardActionArea>
                <CardMedia
                  sx={{ borderRadius: 4, objectFit: "contain" }}
                  component="img"
                  height={140}
                  width={140}
                  image={C.pictureUrl}
                  alt={C.name}
                />
                <CardContent sx={{ background: "transparent" }}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    style={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {C.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default Brands;
