import { Delete } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
  Box,
  Typography,
  Button,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  useTheme,
} from "@mui/material";
import { useState } from "react";
import agent from "../../../app/api/agent";
import { useAppDispatch } from "../../../app/store/configureStore";
import CategoryForm from "./CategoryForm";
import useCategories from "../../../app/hooks/useCategories";
import { removeCategory } from "./categorySlice";

export default function AdminCategory() {
  const theme = useTheme();

  const { categories, categoriesLoaded, status } = useCategories();
  const dispatch = useAppDispatch();
  //   const [editMode, setEditMode] = useState(false);
  const [createCategoryMode, setCreateCategoryMode] = useState(false);

  const [loading, setLoading] = useState(false);
  const [target, setTarget] = useState(0);

  function handleDeleteCategory(id: number) {
    setLoading(true);
    setTarget(id);
    agent.Admin.deleteCategory(id)
      .then(() => dispatch(removeCategory(id)))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }

  function cancelCreateCategory() {
    setCreateCategoryMode(false);
  }
  if (!categoriesLoaded && status === "idle")
    return <>something bad happened</>;
  if (createCategoryMode) return <CategoryForm cancel={cancelCreateCategory} />;

  return (
    <>
      <Box display="flex" justifyContent="space-between">
        <Typography sx={{ p: 2 }} variant="h4">
          لیست دسته بندی
        </Typography>
        <Button
          onClick={() => setCreateCategoryMode(true)}
          sx={{
            m: 2,
            background: theme.palette.secondary.main,
            "&:hover": {
              boxShadow: "none",
              background: theme.palette.secondary.main,
            },
            "&:active": {
              boxShadow: "none",
              background: theme.palette.secondary.main,
            },
          }}
          size="large"
          variant="contained"
        >
          دسته بندی جدید
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="left">نام</TableCell>
              <TableCell align="left">تصویر</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((category) => (
              <TableRow
                key={category.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {category.id}
                </TableCell>
                <TableCell align="left">
                  <Box display="flex" alignItems="center">
                    <span>{category.name}</span>
                  </Box>
                </TableCell>
                <TableCell align="left">
                  <Box display="flex" alignItems="center">
                    <img
                      src={category.pictureUrl}
                      alt={category.name}
                      style={{ height: 50, marginRight: 20 }}
                    />
                  </Box>
                </TableCell>

                <TableCell align="right">
                  {/* <Button
                    onClick={() => handleSelectProduct(category)}
                    startIcon={<Edit />}
                  /> */}
                  <LoadingButton
                    loading={loading && target === category.id}
                    onClick={() => handleDeleteCategory(category.id)}
                    startIcon={<Delete />}
                    color="error"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
