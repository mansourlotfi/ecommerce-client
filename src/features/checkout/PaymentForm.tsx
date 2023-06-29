import { Typography } from "@mui/material";
// import AppTextInput from "../../app/components/AppTextInput";

interface Props {
  orderNumber: string;
}

export default function PaymentForm(props: Props) {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        شماره سفارش : {props.orderNumber}
      </Typography>

      <Typography variant="h6" gutterBottom>
        پرداخت با استفاده از درگاه پرداخت نکست پی
      </Typography>
    </>
  );
}
