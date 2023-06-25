import {
  Box,
  Paper,
  Typography,
  Grid,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useEffect } from "react";
import { Controller, FieldValues, useForm } from "react-hook-form";
import AppDropzone from "../../../app/components/AppDropzone";
import AppSelectList from "../../../app/components/AppSelectList";
import AppTextInput from "../../../app/components/AppTextInput";
import { Product } from "../../../app/models/product";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./productValidation";
import agent from "../../../app/api/agent";
import { useAppDispatch } from "../../../app/store/configureStore";
import { setProduct } from "../../catalog/catalogSlice";
import { LoadingButton } from "@mui/lab";
import useCategories from "../../../app/hooks/useCategories";
import useBrands from "../../../app/hooks/useBrands";

interface Props {
  product?: Product;
  cancelEdit: () => void;
}

export default function ProductForm({ product, cancelEdit }: Props) {
  const {
    control,
    reset,
    handleSubmit,
    watch,
    formState: { isDirty, isSubmitting },
  } = useForm({
    resolver: yupResolver<any>(validationSchema),
  });
  const { brands } = useBrands();

  // const { brands, types } = useProducts();
  const { categories } = useCategories();

  const watchFile = watch("file", null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (product && !watchFile && !isDirty) reset(product);
    return () => {
      if (watchFile) URL.revokeObjectURL(watchFile.preview);
    };
  }, [product, reset, watchFile, isDirty]);

  async function handleSubmitData(data: FieldValues) {
    try {
      let response: Product;
      if (product) {
        response = await agent.Admin.updateProduct(data);
      } else {
        response = await agent.Admin.createProduct(data);
      }
      dispatch(setProduct(response));
      cancelEdit();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Box component={Paper} sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        افزودن کالا
      </Typography>
      <form onSubmit={handleSubmit(handleSubmitData)}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <AppTextInput control={control} name="name" label="نام کالا" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AppSelectList
              control={control}
              items={brands.map((B) => B.name)}
              name="brand"
              label="برند"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AppSelectList
              control={control}
              items={categories.map((C) => C.name) || []}
              name="type"
              label="دسته بندی"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AppTextInput
              type="number"
              control={control}
              name="price"
              label="قیمت"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <AppTextInput
              type="number"
              control={control}
              name="quantityInStock"
              label="تعداد موجود"
            />
          </Grid>
          <Grid item xs={12}>
            <AppTextInput
              control={control}
              multiline={true}
              rows={4}
              name="description"
              label="توضیحات"
            />
          </Grid>
          <Grid item xs={12}>
            <Box>
              <FormControlLabel
                control={
                  <Controller
                    name="isFeatured"
                    control={control}
                    render={({ field }) => <Checkbox {...field} />}
                  />
                }
                label="محصول پرفروش"
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <AppDropzone control={control} name="file" />
              {watchFile ? (
                <img
                  src={watchFile.preview}
                  alt="preview"
                  style={{ maxHeight: 200 }}
                />
              ) : (
                <img
                  src={product?.pictureUrl}
                  alt={product?.name}
                  style={{ maxHeight: 200 }}
                />
              )}
            </Box>
          </Grid>
        </Grid>
        <Box display="flex" justifyContent="space-between" sx={{ mt: 3 }}>
          <Button onClick={cancelEdit} variant="contained" color="inherit">
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
