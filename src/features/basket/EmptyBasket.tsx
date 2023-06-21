import { Grid, Typography } from "@mui/material";

function EmptyBasket() {
  return (
    <Grid container justifyContent="center">
      <Grid item container justifyContent="center">
        <img
          src="/images/products/empty-cart.svg"
          alt="empty basket"
          width={200}
          //   height={150}
        />
      </Grid>
      <Grid item container justifyContent="center" mt={5}>
        <Typography variant="h5" sx={{ justifyContent: "center" }}>
          سبد خرید شما خالی است!
        </Typography>
      </Grid>
    </Grid>
  );
}

export default EmptyBasket;