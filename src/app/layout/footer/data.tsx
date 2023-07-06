import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

export const links = [
  { id: 1, link: "/", title: "صفحه نخست" },
  { id: 2, link: "/about", title: "درباره ما" },
  { id: 3, link: "/catalog", title: "محصولات" },
  { id: 4, link: "/basket", title: "سبد خرید" },
  { id: 5, link: "/contact", title: "تماس با ما" },
];

export const socials = [
  {
    id: 1,
    link: "https://wa.me/+989113360715",
    icon: <WhatsAppIcon />,
  },
  {
    id: 3,
    icon: <TelegramIcon />,
    link: "https://telegram.me/mansourlotfi",
  },
  {
    id: 2,
    icon: <AlternateEmailIcon />,
    link: "mailto:mansourlotfi@gmail.com",
  },
];
