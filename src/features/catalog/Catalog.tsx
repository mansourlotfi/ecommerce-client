import { Grid, Paper } from "@mui/material";
import { useEffect } from "react";
import AppPagination from "../../app/components/AppPagination";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import {
  fetchFilters,
  fetchProductsAsync,
  productSelectors,
  setPageNumber,
} from "./catalogSlice";
import ProductList from "./ProductList";
import ProductSearch from "./ProductSearch";
import FilterAccordion from "./Filters";

function Catalog() {
  // const [products, setProducts] = useState<Product[]>([]);
  const products = useAppSelector(productSelectors.selectAll);
  const { productsLoaded, filtersLoaded, metaData } = useAppSelector(
    (state) => state.catalog
  );
  const dispatch = useAppDispatch();
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    // agent.Catalog.list()
    //   .then((products) => setProducts(products))
    //   .catch((error) => console.log(error))
    //   .finally(() => setLoading(false));
    if (!productsLoaded) dispatch(fetchProductsAsync());
  }, [productsLoaded, dispatch]);
  //to prevent twice api call becuse of dependency array
  useEffect(() => {
    if (!filtersLoaded) dispatch(fetchFilters());
  }, [dispatch, filtersLoaded]);

  // if (loading) return <LoadingComponent />;
  if (!filtersLoaded) return <LoadingComponent />;

  return (
    <Grid container columnSpacing={4}>
      <Grid item xs={12} md={3}>
        <Paper sx={{ mb: 2 }}>
          <ProductSearch />
        </Paper>
        <FilterAccordion />
      </Grid>
      <Grid item xs={12} md={9} mt={5}>
        <ProductList products={products} />
      </Grid>
      <Grid item xs={3} />
      <Grid item xs={12} md={9} sx={{ mb: 2 }}>
        {metaData && (
          <AppPagination
            metaData={metaData}
            onPageChange={(page: number) =>
              dispatch(setPageNumber({ pageNumber: page }))
            }
          />
        )}
      </Grid>
    </Grid>
  );
}

export default Catalog;
