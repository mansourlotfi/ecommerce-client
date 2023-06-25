import Brands from "./Brands";
import Categories from "./Categories";
import FeturedProducts from "./FeturedProducts";
import TopSwiper from "./TopSwiper";
import NewProducts from "./newProducts ";

export default function HomePage() {
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
