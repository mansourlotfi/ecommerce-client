import {
  Divider,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { BasketItem } from "../../app/models/basket";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { Remove, Add, Delete } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { removeBasketItemAsync, addBasketItemAsync } from "./basketSlice";

interface Props {
  items: BasketItem[];
  isBasket?: boolean;
}

function BasketDetail({ items, isBasket = true }: Props) {
  const { status } = useAppSelector((state) => state.basket);
  const dispatch = useAppDispatch();

  return (
    <Grid container spacing={6}>
      {items.map((I) => (
        <>
          <Grid item xs={3} md={6}>
            <img src={I.pictureUrl} alt={I.name} style={{ width: "100%" }} />
          </Grid>

          <Grid item xs={9}>
            <Typography variant="h6">{I.name}</Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            {/* <Divider sx={{ mb: 2 }} /> */}
            <Typography variant="h4" color="secondary"></Typography>
            <TableContainer>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>قیمت</TableCell>
                    <TableCell>${(I.price / 100).toFixed(2)}</TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>تعداد</TableCell>
                    <TableCell align="center">
                      {isBasket && (
                        <LoadingButton
                          loading={
                            status === "pendingRemoveItem" + I.productId + "rem"
                          }
                          onClick={() =>
                            dispatch(
                              removeBasketItemAsync({
                                productId: I.productId,
                                quantity: 1,
                                name: "rem",
                              })
                            )
                          }
                          color="error"
                        >
                          <Remove />
                        </LoadingButton>
                      )}
                      {I.quantity}
                      {isBasket && (
                        <LoadingButton
                          loading={status === "pendingAddItem" + I.productId}
                          onClick={() =>
                            dispatch(
                              addBasketItemAsync({ productId: I.productId })
                            )
                          }
                          color="secondary"
                        >
                          <Add />
                        </LoadingButton>
                      )}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>جمع</TableCell>
                    <TableCell>
                      <TableCell align="right">
                        ${((I.price / 100) * I.quantity).toFixed(2)}
                      </TableCell>
                    </TableCell>
                    {isBasket && (
                      <TableCell align="right">
                        <LoadingButton
                          loading={
                            status === "pendingRemoveItem" + I.productId + "del"
                          }
                          onClick={() =>
                            dispatch(
                              removeBasketItemAsync({
                                productId: I.productId,
                                quantity: I.quantity,
                                name: "del",
                              })
                            )
                          }
                          color="error"
                        >
                          <Delete />
                        </LoadingButton>
                      </TableCell>
                    )}
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Divider sx={{ mb: 2 }} />
          </Grid>
        </>
      ))}
    </Grid>
  );
}

export default BasketDetail;
