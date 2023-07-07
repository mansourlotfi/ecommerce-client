import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CategoryIcon from "@mui/icons-material/Category";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import InventoryIcon from "@mui/icons-material/Inventory";
// import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";

export const UserLinks = [
  {
    id: 1,
    link: "/catalog",
    title: "محصولات",
    icon: <CategoryIcon color="primary" />,
  },
  {
    id: 2,
    link: "/basket",
    title: "سبد خرید",
    icon: <ShoppingCartIcon color="primary" />,
  },
  {
    id: 3,
    link: "/about",
    title: "درباره ما",
    icon: <InfoIcon color="primary" />,
  },
  {
    id: 4,
    link: "/contact",
    title: "تماس با ما",
    icon: <ConnectWithoutContactIcon color="primary" />,
  },
];

export const AdminLinks = [
  {
    id: 1,
    link: "/catalog",
    title: "محصولات",
    icon: <CategoryIcon color="primary" />,
  },
  {
    id: 2,
    link: "/basket",
    title: "سبد خرید",
    icon: <ShoppingCartIcon color="primary" />,
  },
  {
    id: 3,
    link: "/about",
    title: "درباره ما",
    icon: <InfoIcon color="primary" />,
  },
  {
    id: 4,
    link: "/contact",
    title: "تماس با ما",
    icon: <ConnectWithoutContactIcon color="primary" />,
  },
  {
    id: 5,
    link: "/admin-dashboard",
    title: "پنل ادمین",
    icon: <InventoryIcon color="primary" />,
  },
];

export const LogedInUserLinks = [
  { id: 1, link: "/", title: "خانه", icon: <HomeIcon color="primary" /> },
  // { id: 2, link: "/profile", title: "پروفایل", icon: <AccountBoxIcon /> },
  {
    id: 3,
    link: "/orders",
    title: "سفارشات",
    icon: <ShoppingBasketIcon color="primary" />,
  },
];

export const LogedOutUserLinks = [
  { id: 1, link: "/", title: "خانه", icon: <HomeIcon color="primary" /> },
  {
    id: 2,
    link: "/login",
    title: "ورود",
    icon: <VerifiedUserIcon color="primary" />,
  },
  {
    id: 3,
    link: "/register",
    title: "ثبت نام",
    icon: <HowToRegIcon color="primary" />,
  },
];
