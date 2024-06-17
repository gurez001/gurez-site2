import React, { useEffect, useState, memo } from "react";
import FilterPrice from "./FilterPrice";
import Categories from "./Categories";
import "./style.css";
import { Button } from "@material-ui/core";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import updated_product_data from "../../../utils/Filter_product_handler";
import { Box } from "@mui/material";
import customTheme from "../../../ui/theme/theme.config";

const Asidebar = ({ setFilter, filter, currentPage }) => {
  const [price, setPrice] = useState([0, 1000]);
  const dispatch = useDispatch();
  const { category } = useParams();

  const [sub_cat_id, set_sub_cat_id] = useState("");
  const [cat_id, set_cat_id] = useState("");
  const { allcategroes } = useSelector((state) => state.allCategroe);
  const { all_sub_categores } = useSelector((state) => state.sub_Categore);
  const new_cat = [...allcategroes, ...all_sub_categores];

  const filter_category =
    new_cat && new_cat.filter((item) => item.slug === category);
  console.log(filter_category);
  const clearFilterHeandler = (e) => {
    // setCurrentPage(1);
    // setPrice([0, 1000]);
    // setCategories("");
    // setRatings(0);
    // setClearFilter(true);
    // setsideBarActive(false);
  };

  //current price
  const priceHeandler = (e, newPrice) => {
    setPrice(newPrice);
  };

  useEffect(() => {
    if (category === "shop") {
      updated_product_data(dispatch, currentPage, price, "", "");
    } else if (filter_category) {
      // updated_product_data(dispatch, currentPage, price, cat_id, sub_cat_id);
    }
  }, [
    dispatch,
    currentPage,
    price,
    cat_id,
    sub_cat_id,
    category,
    filter_category,
  ]);

  return (
    <>
      <Box
        style={{
          width: "100%",
          padding:10,
          background: [customTheme.themes.colors.default.default_100],
          boxShadow: [customTheme.themes.layout.boxShadows.bs_100],
        }}
        component={"aside"}
      >
        <Box style={{ width: "100%" }}>
          <Box sx={{ width: "100%" }}>
            {/* <Box className="aside-filter aside-hr">
              <div className="inner-aside-filter">
                <Button onClick={() => setFilter(!filter)} className="filter">
                  Filter
                  <IoIosArrowRoundBack className="filter-arrow" />
                </Button>

                <Button
                  style={{
                    marginTop: 5,
                    fontWeight: 600,
                    fontSize: "13px",
                    width: "130px",
                  }}
                  onClick={() => clearFilterHeandler()}
                >
                  Clean All
                </Button>
              </div>
            </Box> */}
            <Box>
              <Box>
                <Categories
                  set_sub_cat_id={set_sub_cat_id}
                  set_cat_id={set_cat_id}
                />
              </Box>
              <Box>
                <FilterPrice price={price} inputevent={priceHeandler} />
              </Box>
              {/* <RatingsFilter ratingsHeandle={ratingsHeandle} ratings={ratings} /> */}
              {/* <ClearFilter
          clearFilterHeandler={clearFilterHeandler}
          clearFilter={clearFilter}
        /> */}
            </Box>
            {/* )} */}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default memo(Asidebar);
