import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import useCategories from "../../app/hooks/useCategories";
import LoadingComponent from "../../app/layout/LoadingComponent";
function Categories() {
  const { categories, categoriesLoaded } = useCategories();

  if (!categoriesLoaded) return <LoadingComponent />;
  return (
    <Grid container justifyContent="center" mt={10}>
      <Typography variant="h5">دسته بندی کالاها</Typography>
      <Grid container mt={10} spacing={5} p={2}>
        {categories.map((C, i) => (
          <Grid item xs={6} md={2} key={C.id}>
            <Card sx={{ borderRadius: 4 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={C.pictureUrl}
                  alt={C.name}
                />
                <CardContent sx={{ background: "transparent" }}>
                  <Typography gutterBottom variant="h6" component="div">
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

export default Categories;
