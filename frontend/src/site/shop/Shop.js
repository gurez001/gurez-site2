import React, { useEffect, useState } from "react";
import "./style.css";
import { useSelector } from "react-redux";
import Asidebar from "../../components/layout/aside/Asidebar";
import { Paginations } from "../../utils/Paginations";
import ProductContainor from "./ProductContainor";
import { useParams } from "react-router-dom";
import ErrorPage from "../404Page/ErrorPage";
import { Box, Container } from "@mui/material";
import customTheme from "../../ui/theme/theme.config";
import { Filter_size_form } from "../../components/Filter_size_form";
// Asidebar
const Shop = () => {
  const { category } = useParams();
  const { productsCount, resultPerPage } = useSelector(
    (state) => state.products
  );
  const [filter, setFilter] = useState(false);
  const [error_page, set_error_page] = useState(false);
  const { allcategroes } = useSelector((state) => state.allCategroe);
  const { all_sub_categores } = useSelector((state) => state.sub_Categore);
  const new_cat = [...allcategroes, ...all_sub_categores];
  const filter_category =
    new_cat && new_cat.filter((item) => item.slug === category);
  const [currentPage, setCurrentPage] = useState(1);
  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  useEffect(() => {
    if (
      filter_category &&
      filter_category.length === 0 &&
      category !== "shop"
    ) {
      set_error_page(true);
    } else {
      set_error_page(false);
    }
    const handleResize = () => {
      setFilter(window.innerWidth < 980 ? true : false);
    };
    window.addEventListener("resize", handleResize);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [filter_category, category]);

  return (
    <>
      <Container
        style={{
          maxWidth: [customTheme.screens.S_2xl],
          }}
      >
        <Box component={"div"}>
          {!error_page ? (
            <>
              <Box sx={{ display: "flex", marginTop: 5, gap: 2 }}>
                <Box className='product-filter' sx={{ width: "20%" }}>
                  <Asidebar
                    setFilter={setFilter}
                    filter={filter}
                    currentPage={currentPage}
                  />
                </Box>
                <Box className="coll-12" sx={{ width: "80%" }}>
                  {category === "packing-material" && <Filter_size_form />}
                  <ProductContainor setFilter={setFilter} filter={filter} />
                </Box>
              </Box>
              {resultPerPage < productsCount && (
                <Paginations
                  totalItemsCount={productsCount}
                  activePage={currentPage}
                  itemsCountPerPage={resultPerPage}
                  handlePageChange={setCurrentPageNo}
                />
              )}{" "}
            </>
          ) : (
            <ErrorPage />
          )}
        </Box>
      </Container>
    </>
  );
};

export default Shop;
