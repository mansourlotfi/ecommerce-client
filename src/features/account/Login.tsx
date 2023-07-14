import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Paper, useTheme } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FieldValues, useForm } from "react-hook-form";
import { LoadingButton } from "@mui/lab";
import { useAppDispatch } from "../../app/store/configureStore";
import { signInUser } from "./accountSlice";

export default function Login() {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors, isValid },
  } = useForm({
    mode: "all",
  });

  async function submitForm(data: FieldValues) {
    try {
      await dispatch(signInUser(data));
      navigate(location.state?.from || "/catalog");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container
      component={Paper}
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 4,
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        ورود
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit(submitForm)}
        noValidate
        sx={{ mt: 1 }}
      >
        <TextField
          margin="normal"
          fullWidth
          label="نام کاربری"
          autoFocus
          size="small"
          {...register("username", { required: "Username is required" })}
          error={!!errors.username}
          helperText={<>{errors?.username?.message}</>}
        />
        <TextField
          margin="normal"
          fullWidth
          label="کلمه عبور"
          type="password"
          size="small"
          {...register("password", { required: "Password is required" })}
          error={!!errors.password}
          helperText={<>{errors?.password?.message}</>}
        />
        <LoadingButton
          disabled={!isValid}
          loading={isSubmitting}
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            mb: 2,
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
        >
          ورود
        </LoadingButton>
        <Grid container>
          <Grid item>
            <Link to="/register">{"ثبت نام"}</Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
