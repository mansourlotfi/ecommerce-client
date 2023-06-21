import { ShoppingCart, DarkMode, Home } from "@mui/icons-material";
import {
  AppBar,
  Badge,
  IconButton,
  List,
  ListItem,
  Switch,
  Toolbar,
} from "@mui/material";
import { Box } from "@mui/system";
import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../store/configureStore";
import SignedInMenu from "./SignedInMenu";
import useMediaQuery from "@mui/material/useMediaQuery";
import ResponsiveDrawer from "./responsiveDrawer/ResponsiveDrawer";

const midLinks = [
  { title: "محصولات", path: "/catalog" },
  { title: "درباره ما", path: "/about" },
  { title: "تماس با ما", path: "/contact" },
];

const rightLinks = [
  { title: "ورود", path: "/login" },
  { title: "ثبت نام", path: "/register" },
];

const navStyles = {
  color: "inherit",
  textDecoration: "none",
  typography: "h6",
  whiteSpace: "nowrap",
  "&:hover": {
    color: "grey.500",
  },
  "&.active": {
    color: "text.secondary",
  },
};

interface Props {
  darkMode: boolean;
  handleThemeChange: () => void;
}

export default function Header({ handleThemeChange, darkMode }: Props) {
  const { basket } = useAppSelector((state) => state.basket);
  const { user } = useAppSelector((state) => state.account);
  const itemCount = basket?.items.reduce((sum, item) => sum + item.quantity, 0);
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {!isMobile ? (
          <>
            <Box display="flex" alignItems="center">
              <DarkMode />
              <Switch checked={darkMode} onChange={handleThemeChange} />
              <IconButton component={NavLink} to={"/"}>
                <Home />
              </IconButton>
            </Box>
            <List sx={{ display: "flex" }}>
              {midLinks.map(({ title, path }) => (
                <ListItem
                  component={NavLink}
                  to={path}
                  key={path}
                  sx={navStyles}
                >
                  {title.toUpperCase()}
                </ListItem>
              ))}
              {user && user.roles?.includes("Admin") && (
                <ListItem component={NavLink} to={"/inventory"} sx={navStyles}>
                  انبار
                </ListItem>
              )}
            </List>
          </>
        ) : (
          <Box display="flex" alignItems="center">
            <ResponsiveDrawer
              darkMode={darkMode}
              handleThemeChange={handleThemeChange}
            />
          </Box>
        )}

        <Box display="flex" alignItems="center">
          <IconButton
            component={Link}
            to="/basket"
            size="large"
            edge="start"
            color="inherit"
            sx={{ mr: 2 }}
          >
            <Badge badgeContent={itemCount} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>

          {!isMobile ? (
            <>
              {user ? (
                <SignedInMenu />
              ) : (
                <List sx={{ display: "flex" }}>
                  {rightLinks.map(({ title, path }) => (
                    <ListItem
                      component={NavLink}
                      to={path}
                      key={path}
                      sx={navStyles}
                    >
                      {title.toUpperCase()}
                    </ListItem>
                  ))}
                </List>
              )}
            </>
          ) : null}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
