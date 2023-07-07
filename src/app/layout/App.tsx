import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./Header";
import "react-toastify/dist/ReactToastify.css";
import LoadingComponent from "./LoadingComponent";
import { useAppDispatch } from "../store/configureStore";
import { fetchBasketAsync } from "../../features/basket/basketSlice";
import { fetchCurrentUser } from "../../features/account/accountSlice";
import HomePage from "../../features/home/HomePage";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import VazirmatnRegular from "../assets/font/Vazirmatn-Regular.woff2";
import { grey } from "@mui/material/colors";
import Footer from "./footer/Footer";
import FloatingNav from "./floating-nav/FloatingNav";
// import VazirMatnSemiBold from "../assets/font/Vazirmatn-SemiBold.woff2"

function App() {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  // Create rtl cache
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  const initApp = useCallback(async () => {
    try {
      await dispatch(fetchCurrentUser());
      await dispatch(fetchBasketAsync());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    initApp().then(() => setLoading(false));
  }, [initApp]);

  const [darkMode, setDarkMode] = useState(false);
  const palleteType = darkMode ? "dark" : "light";
  const theme = createTheme({
    palette: {
      mode: palleteType,
      background: {
        default: palleteType === "light" ? "#eaeaea" : "#121212",
      },
      primary: {
        main: "#1F56A3",
        dark: "#153D76",
        light: "#7FA4D8",
        contrastText: "#F6F6FF",
      },
      secondary: {
        main: "#CB1150",
        dark: "#931846",
        light: "#E5437A",
        contrastText: "#F6F6FF",
      },
      error: {
        main: "#DC3545",
        light: "#FFEDEF",
      },
      info: {
        main: "#0DA7A7",
        light: "#EDFFFF",
      },
      success: {
        main: "#20BC7A",
        light: "#E9FFF6",
      },
      warning: {
        main: "#FAC641",
        light: "#FFF9EA",
      },
      grey: {
        ...grey,
      },
    },
    direction: "rtl",
    typography: {
      fontFamily: "Vazir,Arial",
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          @font-face {
            font-family: 'Vazir';
            font-style: normal;
            font-display: swap;
            font-weight: 400;
            src: local('Vazir'), local('Vazirmatn-Regular'), url(${VazirmatnRegular}) format('woff2');
            unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
          }
        `,
      },
    },
  });

  function handleThemeChange() {
    setDarkMode(!darkMode);
  }

  const mainRef = useRef<HTMLInputElement>(null);
  const [showFloatingNav, setShowFloatingNav] = useState(true);
  const [siteYPostion, setSiteYPosition] = useState(0);

  const showFloatingNavHandler = () => {
    setShowFloatingNav(true);
  };

  const hideFloatingNavHandler = () => {
    setShowFloatingNav(false);
  };

  useEffect(() => {
    const floatingNavToggleHandler = () => {
      // check if we scrolled up or down at least 20px

      if (mainRef?.current) {
        if (
          siteYPostion < mainRef?.current?.getBoundingClientRect().y - 20 ||
          siteYPostion > mainRef?.current?.getBoundingClientRect().y + 20
        ) {
          showFloatingNavHandler();
        } else {
          hideFloatingNavHandler();
        }

        setSiteYPosition(mainRef?.current?.getBoundingClientRect().y);
      }
    };
    const checkYPosition = setInterval(floatingNavToggleHandler, 2000);

    // cleanup function
    return () => clearInterval(checkYPosition);
  }, [siteYPostion]);

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <ToastContainer
          position="bottom-right"
          hideProgressBar
          theme="colored"
        />
        <CssBaseline />
        <main ref={mainRef}>
          <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
          {loading ? (
            <LoadingComponent message="در حال بارگزاری..." />
          ) : location.pathname === "/" ? (
            <>
              <HomePage />
              {showFloatingNav && <FloatingNav />}
              <Footer />
            </>
          ) : (
            <>
              <Container sx={{ mt: 4, minHeight: "90vh" }}>
                <Outlet />
              </Container>
              {showFloatingNav && <FloatingNav />}
              <Footer />
            </>
          )}
        </main>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
