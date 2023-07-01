import {
  Paper,
  Grid,
  MenuItem,
  Container,
  ListItemText,
  ListItemIcon,
  MenuList,
} from "@mui/material";
import { useCallback, useState } from "react";
import AdminInventory from "./inventory/Inventory";
import AdminCategory from "./category/Category";
import AdminBrands from "./brands/Brands";
import AdminBrokers from "./broker/Broker";

function AdminDashboard() {
  const [state, setState] = useState({
    showProducts: true,
    showCategories: false,
    showBrands: false,
    showBroker: false,
  });

  const handleOpenProducts = useCallback(() => {
    setState((prev) => ({
      ...prev,
      showProducts: true,
      showBrands: false,
      showCategories: false,
    }));
  }, []);

  const handleOpenCategories = useCallback(() => {
    setState((prev) => ({
      ...prev,
      showProducts: false,
      showBrands: false,
      showCategories: true,
    }));
  }, []);

  const handleOpenBrands = useCallback(() => {
    setState((prev) => ({
      ...prev,
      showProducts: false,
      showBrands: true,
      showCategories: false,
    }));
  }, []);

  const handleOpenBrokers = useCallback(() => {
    setState((prev) => ({
      ...prev,
      showProducts: false,
      showBrands: false,
      showCategories: false,
      showBroker: true,
    }));
  }, []);

  return (
    <Grid container minHeight={"90vh"} component={Paper}>
      <Grid item container xs={3}>
        <Paper sx={{ width: 250, maxWidth: "100%", minHeight: "90vh" }}>
          <MenuList>
            <MenuItem onClick={handleOpenProducts}>
              <ListItemIcon></ListItemIcon>
              <ListItemText>کالاها</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleOpenCategories}>
              <ListItemIcon></ListItemIcon>
              <ListItemText>دسته بندی ها</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleOpenBrands}>
              <ListItemIcon></ListItemIcon>
              <ListItemText>برند ها</ListItemText>
            </MenuItem>
            <MenuItem onClick={handleOpenBrokers}>
              <ListItemIcon></ListItemIcon>
              <ListItemText>فروشنده ها</ListItemText>
            </MenuItem>
          </MenuList>
        </Paper>
      </Grid>
      <Grid item container xs={9}>
        <Container>
          {state.showProducts ? (
            <AdminInventory />
          ) : state.showCategories ? (
            <AdminCategory />
          ) : state.showBrands ? (
            <AdminBrands />
          ) : state.showBroker ? (
            <AdminBrokers />
          ) : null}
        </Container>
      </Grid>
    </Grid>
  );
}

export default AdminDashboard;
