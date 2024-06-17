import React, { useEffect, useState, memo } from "react";
import SortProductFilter from "../../utils/SortProductFilter";
import { useSelector } from "react-redux";
// import ProductCard from "../home/assets/ProductCard";
import ProductAnimation from "../../utils/loader/ProductAnimation";
import ProductCard from "../../components/home/assets/ProductCard";
import { Box, Grid } from "@mui/material";

// import ProductAnimation from "../layout/loader/ProductAnimation";
// ProductAnimation
// ProductCard

const ProductContainor = ({ setFilter, filter }) => {
  const { loding, products } = useSelector((state) => state.products);
  const [loader, set_loader] = useState(true);
  const length = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      set_loader(false);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <Box component={"div"}>
        <SortProductFilter setFilter={setFilter} filter={filter} />
        <Box component={"div"}>
          {loding ? (
            length && length.map((item, i) => <ProductAnimation key={i} />)
          ) : (
            <>
              <Box component={"div"} sx={{ flexGrow: 1 }}>
                <Grid
                  container
                  spacing={{ xs: 2, md: 3 }}
                  // columns={{ xs: 4, sm: 8, md: 12 }}
                >
                  {products &&
                    products
                      .filter((item) => item.productstatus === "Active")
                      .map((product, i) => (
                        <Grid item key={i} xs={6} sm={4} md={3} lg={4}>
                          <ProductCard product={product} />
                        </Grid>
                      ))}
                </Grid>
              </Box>
            </>
          )}
        </Box>
      </Box>
    </>
  );
};

export default memo(ProductContainor);
