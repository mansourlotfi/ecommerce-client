import { Box, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import { socials } from "./data";
import { useState } from "react";
import "./styles.css";

// const navStyles = {
//   color: "inherit",
//   textDecoration: "none",
//   typography: "h6",
//   whiteSpace: "nowrap",
//   "&:hover": {
//     color: "grey.500",
//   },
//   "&.active": {
//     color: "text.secondary",
//   },
// };

const Footer = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const navigate = useNavigate();
  const [value, setValue] = useState("");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    navigate(`/${newValue}`);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer style={{ background: "primary" }}>
      {isMobile ? (
        <Box sx={{ width: "100%" }}>
          <BottomNavigation value={value} onChange={handleChange}>
            <BottomNavigationAction label="خانه" value="" icon={<HomeIcon />} />
            <BottomNavigationAction
              label="محصولات"
              value="catalog"
              icon={<CategoryIcon />}
            />
            <BottomNavigationAction
              label="تماس با ما"
              value="contact"
              icon={<ConnectWithoutContactIcon />}
            />

            <BottomNavigationAction
              label="سبد خرید"
              value="basket"
              icon={<ShoppingCartIcon />}
            />
          </BottomNavigation>
        </Box>
      ) : (
        <div className="footer__socials">
          <Box display="flex" justifyContent="center">
            <ul className="c-social-list">
              {socials.map((social) => (
                <li>
                  <a
                    key={social.id}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </Box>
        </div>
      )}
    </footer>
  );
};

export default Footer;
