import { useCookies } from "react-cookie";
import Brands from "./Brands";
import Categories from "./Categories";
import FeturedProducts from "./FeturedProducts";
import TopSwiper from "./TopSwiper";
import NewProducts from "./newProducts ";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

export default function HomePage() {
  const [searchParams] = useSearchParams();
  let ref = searchParams.get("ref");
  const [, setCookie] = useCookies(["ref"]);

  useEffect(() => {
    if (ref?.length) {
      setCookie("ref", ref, {
        path: "/",
        expires: new Date(new Date().setDate(new Date().getDate() + 7)),
        maxAge: 604800,
      });
    }
  }, [ref, setCookie]);

  return (
    <>
      <TopSwiper />
      <Categories />
      <Brands />
      <FeturedProducts />
      <NewProducts />
    </>
  );
}
