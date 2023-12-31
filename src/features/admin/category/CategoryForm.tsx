import { Box, Paper, Typography, Grid, Button } from "@mui/material";
import { FieldValues, useForm } from "react-hook-form";
import AppDropzone from "../../../app/components/AppDropzone";
import AppTextInput from "../../../app/components/AppTextInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./categoryValidation";
import agent from "../../../app/api/agent";
import { useAppDispatch } from "../../../app/store/configureStore";
import { LoadingButton } from "@mui/lab";
import { Category } from "../../../app/models/Category";
import { setCategory } from "./categorySlice";
import { useEffect } from "react";

interface Props {
  cancel: () => void;
}

export default function CategoryForm({ cancel }: Props) {
  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { isDirty, isSubmitting },
  } = useForm({
    resolver: yupResolver<any>(validationSchema),
  });
  const watchFile = watch("file", null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!watchFile && !isDirty) reset();
    return () => {
      if (watchFile) URL.revokeObjectURL(watchFile.preview);
    };
  }, [reset, watchFile, isDirty]);

  async function handleSubmitData(data: FieldValues) {
    try {
      let response: Category;
      response = await agent.Admin.createCategory(data);
      dispatch(setCategory(response));
      cancel();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Box component={Paper} sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        افزودن دسته بندی
      </Typography>
      <form onSubmit={handleSubmit(handleSubmitData)}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <AppTextInput control={control} name="name" label="نام دسته بندی" />
          </Grid>
          <Grid item xs={12}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <AppDropzone control={control} name="file" />
              {watchFile?.preview ? (
                <img
                  src={watchFile.preview}
                  alt="preview"
                  style={{ maxHeight: 200 }}
                />
              ) : null}
            </Box>
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
