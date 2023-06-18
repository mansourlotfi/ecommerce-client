import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
function Categories() {
  return (
    <Grid container justifyContent="center" mt={10}>
      <Typography variant="h5">دسته بندی کالاها</Typography>
      <Grid container mt={10} spacing={5} p={2}>
        {Array(12)
          .fill(null)
          .map((A, i) => (
            <Grid item xs={6} md={2}>
              <Card sx={{ borderRadius: 4 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image="/images/category.jpg"
                    alt="green iguana"
                  />
                  <CardContent sx={{ background: "transparent" }}>
                    <Typography gutterBottom variant="h6" component="div">
                      دسته بندی {i + 1}
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
