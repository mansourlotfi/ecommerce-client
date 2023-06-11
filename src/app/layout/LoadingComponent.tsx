import { Backdrop, Box, CircularProgress, Typography } from "@mui/material";

interface IProps {
  message?: string;
}
export default function LoadingComponent({ message = "loading ..." }: IProps) {
  return (
    <Backdrop open={true} invisible={true}>
      <Box display="flex" alignItems="center" height="100vh">
        <CircularProgress size={50} color="secondary" />
        <Typography
          variant="h6"
          sx={{
            justifyContent: "center",
            position: "fixed",
            top: "55%",
          }}
        >
          {message}
        </Typography>
      </Box>
    </Backdrop>
  );
}
