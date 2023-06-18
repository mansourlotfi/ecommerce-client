import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Grid, IconButton, MenuItem, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../store/configureStore";
import {
  AdminLinks,
  LogedInUserLinks,
  LogedOutUserLinks,
  UserLinks,
} from "./data";
import { signOut } from "../../../features/account/accountSlice";
import { clearBasket } from "../../../features/basket/basketSlice";
import { NavLink } from "react-router-dom";

export default function ResponsiveDrawer() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { user } = useAppSelector((state) => state.account);
  const dispatch = useAppDispatch();

  const toggleDrawer = React.useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      {user ? (
        <Grid container p={5}>
          <Typography>{user?.email}</Typography>
        </Grid>
      ) : null}

      <List>
        {user
          ? LogedInUserLinks.map((item) => (
              <ListItem
                key={item.id}
                disablePadding
                component={NavLink}
                to={item.link}
              >
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            ))
          : LogedOutUserLinks.map((item) => (
              <ListItem
                key={item.id}
                disablePadding
                component={NavLink}
                to={item.link}
              >
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            ))}
      </List>
      <Divider />
      <List>
        {user && user.roles?.includes("Admin")
          ? AdminLinks.map((item) => (
              <ListItem
                key={item.id}
                disablePadding
                component={NavLink}
                to={item.link}
              >
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            ))
          : UserLinks.map((item) => (
              <ListItem
                key={item.id}
                disablePadding
                component={NavLink}
                to={item.link}
              >
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            ))}
      </List>
      <Divider />

      {user ? (
        <MenuItem
          onClick={() => {
            dispatch(signOut());
            dispatch(clearBasket());
          }}
        >
          خروج
        </MenuItem>
      ) : null}
    </Box>
  );

  return (
    <Grid container justifyContent="flex-end">
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        sx={{ mr: 2 }}
        onClick={toggleDrawer}
      >
        <MenuIcon />
      </IconButton>

      <Drawer anchor={"left"} open={isOpen} onClose={toggleDrawer}>
        {list()}
      </Drawer>
    </Grid>
  );
}
