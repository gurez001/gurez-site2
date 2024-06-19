import React, { useEffect, useState, memo } from "react";
import SortProductFilter from "../../utils/SortProductFilter";
import { useSelector } from "react-redux";
// import ProductCard from "../home/assets/ProductCard";
import ProductAnimation from "../../utils/loader/ProductAnimation";
import Cards from "../../ui/cards/Cards";
import { Box, Grid } from "@mui/material";



const ProductContainor = ({ setFilter, filter }) => {
  const { loding, 
    //products 
    } = useSelector((state) => state.products);
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


  const Products = [
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/s/e/self_seal1_1.jpg",
      title: "Bubble Bag - Self Seal 70 GSM - 4W X 6H Inch",
      price: 2.5,
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/b/u/bubble_pouch_upack.jpg",
      title: "Bubble Bag - Self Seal 70 GSM - 7W X 8H Inch",
      price: 2.5,
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/u/p/uptf1.jpg",
      title: "Kraft Mailer Box - 7 x 5.75 x 2 Inch",
      price: 2.5,
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/u/p/uptf5.jpg",
      title: "Bubble Bag - Self Seal 70 GSM - 6W X 6H Inch",
      price: 2.5,
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/t/h/thumbnail-cp002-1-b2_6.jpg",
      title: "Kraft Mailer Box - 6.25 x 3.25 x 2 Inch",
      price: 2.5,
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/s/e/self_seal1_1.jpg",
      title: "Bubble Bag - Self Seal 70 GSM - 10W X 8H Inch",
      price: 2.5,
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/s/e/self_seal1_1.jpg",
      title: "Bubble Bag - Self Seal 70 GSM - 4W X 6H Inch",
      price: 2.5,
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/b/u/bubble_pouch_upack.jpg",
      title: "Bubble Bag - Self Seal 70 GSM - 7W X 8H Inch",
      price: 2.5,
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/u/p/uptf1.jpg",
      title: "Kraft Mailer Box - 7 x 5.75 x 2 Inch",
      price: 2.5,
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/u/p/uptf5.jpg",
      title: "Bubble Bag - Self Seal 70 GSM - 6W X 6H Inch",
      price: 2.5,
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/t/h/thumbnail-cp002-1-b2_6.jpg",
      title: "Kraft Mailer Box - 6.25 x 3.25 x 2 Inch",
      price: 2.5,
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/s/e/self_seal1_1.jpg",
      title: "Bubble Bag - Self Seal 70 GSM - 10W X 8H Inch",
      price: 2.5,
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/s/e/self_seal1_1.jpg",
      title: "Bubble Bag - Self Seal 70 GSM - 4W X 6H Inch",
      price: 2.5,
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/b/u/bubble_pouch_upack.jpg",
      title: "Bubble Bag - Self Seal 70 GSM - 7W X 8H Inch",
      price: 2.5,
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/u/p/uptf1.jpg",
      title: "Kraft Mailer Box - 7 x 5.75 x 2 Inch",
      price: 2.5,
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/u/p/uptf5.jpg",
      title: "Bubble Bag - Self Seal 70 GSM - 6W X 6H Inch",
      price: 2.5,
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/t/h/thumbnail-cp002-1-b2_6.jpg",
      title: "Kraft Mailer Box - 6.25 x 3.25 x 2 Inch",
      price: 2.5,
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/s/e/self_seal1_1.jpg",
      title: "Bubble Bag - Self Seal 70 GSM - 10W X 8H Inch",
      price: 2.5,
    },
  ];
  
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
                  {Products &&
                    Products
                      // .filter((item) => item.productstatus === "Active")
                      .map((product, i) => (
                        <Grid item key={i} xs={6} sm={4} md={3} lg={4}>
                        <Cards key={i} item={product}/>
                          {/* <ProductCard product={product} /> */}
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
