import HomeIcon from "@mui/icons-material/Home";
// import InfoIcon from "@mui/icons-material/Info";
// import CategoryIcon from "@mui/icons-material/Category";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
// import HowToRegIcon from "@mui/icons-material/HowToReg";
// import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import InventoryIcon from "@mui/icons-material/Inventory";
// import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Avatar from "@mui/material/Avatar";

export const UserLinks = [
  {
    id: 1,
    link: "/catalog",
    title: "محصولات",
    icon: (
      <Avatar variant="square" alt="محصولات" src="/assets/icons/catalog.png" />
    ),
  },
  {
    id: 2,
    link: "/basket",
    title: "سبد خرید",
    icon: (
      <Avatar variant="square" alt="سبد خرید" src="/assets/icons/cart.png" />
    ),
  },
  {
    id: 3,
    link: "/about",
    title: "درباره ما",
    icon: (
      <Avatar variant="square" alt="درباره ما" src="/assets/icons/about.png" />
    ),
  },
  {
    id: 4,
    link: "/contact",
    title: "تماس با ما",
    icon: (
      <Avatar
        variant="square"
        alt="تماس با ما"
        src="/assets/icons/contact.png"
      />
    ),
  },
];

export const AdminLinks = [
  {
    id: 1,
    link: "/catalog",
    title: "محصولات",
    icon: (
      <Avatar variant="square" alt="محصولات" src="/assets/icons/catalog.png" />
    ),
  },
  {
    id: 2,
    link: "/basket",
    title: "سبد خرید",
    icon: (
      <Avatar variant="square" alt="سبد خرید" src="/assets/icons/cart.png" />
    ),
  },
  {
    id: 3,
    link: "/about",
    title: "درباره ما",
    icon: (
      <Avatar variant="square" alt="درباره ما" src="/assets/icons/about.png" />
    ),
  },
  {
    id: 4,
    link: "/contact",
    title: "تماس با ما",
    icon: (
      <Avatar
        variant="square"
        alt="تماس با ما"
        src="/assets/icons/contact.png"
      />
    ),
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
  {
    id: 1,
    link: "/",
    title: "خانه",
    icon: <Avatar variant="square" alt="خانه" src="/assets/icons/home.png" />,
  },
  {
    id: 2,
    link: "/login",
    title: "ورود",
    icon: <Avatar variant="square" alt="ورود" src="/assets/icons/login.png" />,
  },
  {
    id: 3,
    link: "/register",
    title: "ثبت نام",
    icon: (
      <Avatar variant="square" alt="ثبت نام" src="/assets/icons/register.png" />
    ),
  },
];
