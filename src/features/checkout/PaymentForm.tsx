import { Typography, Grid, Box } from "@mui/material";
import { useEffect } from "react";
// import AppTextInput from "../../app/components/AppTextInput";

interface Props {
  orderNumber: string;
}

export default function PaymentForm(props: Props) {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://nextpay.org/nx/js-trust/58592";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Typography variant="h6" gutterBottom>
        شماره سفارش : {props.orderNumber}
      </Typography>

      <Typography variant="h6" gutterBottom>
        پرداخت با استفاده از درگاه پرداخت نکست پی
      </Typography>
      <Grid container>
        <Box>
          <div id="nextpay" style={{ margin: "auto", width: 80 }}></div>
        </Box>
      </Grid>
    </>
  );
}
