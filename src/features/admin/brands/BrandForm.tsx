import { Box, Paper, Typography, Grid, Button } from "@mui/material";
import { FieldValues, useForm } from "react-hook-form";
import AppTextInput from "../../../app/components/AppTextInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./brandValidation";
import agent from "../../../app/api/agent";
import { useAppDispatch } from "../../../app/store/configureStore";
import { LoadingButton } from "@mui/lab";
import { Brand } from "../../../app/models/Brand";
import { setBrand } from "./brandSlice";

interface Props {
  cancel: () => void;
}

export default function BrandForm({ cancel }: Props) {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm({
    resolver: yupResolver<any>(validationSchema),
  });
  const dispatch = useAppDispatch();

  async function handleSubmitData(data: FieldValues) {
    try {
      let response: Brand;
      response = await agent.Admin.createBrand(data);
      dispatch(setBrand(response));
      cancel();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Box component={Paper} sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        افزودن برند
      </Typography>
      <form onSubmit={handleSubmit(handleSubmitData)}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <AppTextInput control={control} name="name" label="نام  برند" />
          </Grid>
        </Grid>
        <Box display="flex" justifyContent="space-between" sx={{ mt: 3 }}>
          <Button onClick={cancel} variant="contained" color="inherit">
            انصراف
          </Button>
          <LoadingButton
            loading={isSubmitting}
            type="submit"
            variant="contained"
            color="success"
          >
            ثبت
          </LoadingButton>
        </Box>
      </form>
    </Box>
  );
}
