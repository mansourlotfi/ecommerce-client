import {
  Box,
  Button,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./checkoutValidation";
import agent from "../../app/api/agent";
import { LoadingButton } from "@mui/lab";
// import { clearBasket } from "../basket/basketSlice";
// import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { useAppSelector } from "../../app/store/configureStore";
import { useNavigate } from "react-router-dom";

const steps = ["آدرس ارسال", "مرور سفارش", "پرداخت"];

export default function CheckoutPage() {
  const navigate = useNavigate();

  // const dispatch = useAppDispatch();
  const { basket } = useAppSelector((state) => state.basket);
  const [activeStep, setActiveStep] = useState(0);
  const [orderNumber, setOrderNumber] = useState("");
  const [loading, setLoading] = useState(false);

  // const [paymentMessage, setPaymentMessage] = useState("");
  // const [paymentSucceeded, setPaymentSucceeded] = useState(false);

  const subtotal =
    basket?.items.reduce((sum, item) => sum + item.quantity * item.price, 0) ??
    0;
  const deliveryFee = subtotal > 300000 ? 0 : 30000;

  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return <AddressForm />;
      case 1:
        return <Review />;
      case 2:
        return <PaymentForm orderNumber={orderNumber} />;
      default:
        throw new Error("Unknown step");
    }
  }

  const currentValidationSchema = validationSchema[activeStep];

  const methods = useForm({
    mode: "all",
    resolver: yupResolver(currentValidationSchema),
  });

  useEffect(() => {
    agent.Account.fetchAddress().then((response) => {
      if (response) {
        methods.reset({
          ...methods.getValues(),
          ...response,
          saveAddress: false,
        });
      }
    });
  }, [methods]);

  async function submitOrder(data: FieldValues) {
    console.log("data", data);
    setLoading(true);
    try {
      const paymentResult = await agent.Payments.createPaymentIntent({
        api_key: "376de118-4aa6-451e-94c0-3cf1e848a6e6",
        order_id: orderNumber,
        amount: subtotal + deliveryFee,
        callback_uri: "https://www.blushgallery.com/checkout",
        customer_phone: +data.phoneNumber,
        payer_name: data.fullName,
        auto_verify: "yes",
      });
      console.log("p", paymentResult);
      console.log("JSON.parse(paymentResult)", JSON.parse(paymentResult));
      console.log("new URLSearchParams", new URLSearchParams(paymentResult));

      if (JSON.parse(paymentResult.code) === -1) {
        navigate(
          `https://nextpay.org/nx/gateway/payment/${JSON.parse(
            paymentResult.trans_id
          )}`
        );

        // setPaymentSucceeded(true);
        // setActiveStep(activeStep + 1);
        // dispatch(clearBasket());
        setLoading(false);
      } else {
        // setPaymentSucceeded(false);
        setLoading(false);
        // setActiveStep(activeStep + 1);
      }
    } catch (error) {
      console.log(error);

      setLoading(false);
    }
  }

  const handleNext = async (data: FieldValues) => {
    const { saveAddress, ...address } = data;
    if (activeStep === 1) {
      setLoading(true);
      const orderNumber = await agent.Orders.create({
        saveAddress,
        shippingAddress: address,
      });
      setOrderNumber(orderNumber);
      setActiveStep(activeStep + 1);
      // setPaymentSucceeded(true);
      // setPaymentMessage("Thank you - we have received your payment");
      // dispatch(clearBasket());
      setLoading(false);
    } else if (activeStep === steps.length - 1) {
      await submitOrder(data);
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  function submitDisabled(): boolean {
    if (activeStep === steps.length - 1) {
      return !methods.formState.isValid;
    } else {
      return !methods.formState.isValid;
    }
  }

  return (
    <FormProvider {...methods}>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Typography component="h1" variant="h4" align="center">
          تکمیل سفارش
        </Typography>
        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <>
          {activeStep === steps.length ? (
            <></>
          ) : (
            <form onSubmit={methods.handleSubmit(handleNext)}>
              {getStepContent(activeStep)}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}
                <LoadingButton
                  loading={loading}
                  disabled={submitDisabled()}
                  variant="contained"
                  type="submit"
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 || activeStep === 1
                    ? "پرداخت"
                    : "مرحله بعد"}
                </LoadingButton>
              </Box>
            </form>
          )}
        </>
      </Paper>
    </FormProvider>
  );
}
