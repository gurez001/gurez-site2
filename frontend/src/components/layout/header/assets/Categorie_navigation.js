import React, { useEffect, useState } from "react";

import {
  Box,
  ListItem,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import {
  nav_main_list,
  nav_sub_list,
} from "../../../../actions/CategoreAction";
import updated_product_data from "../../../../utils/Filter_product_handler";
const navItems = ["Packaging", "Personal Care", "Pet Care"];
const Categorie_navigation = () => {
  const [visible, setVisible] = useState(null);
  const Navigate = useNavigate();
  const handleClick = (i) => {
    setVisible((prevVisible) => (prevVisible === i ? null : i));
  };
  const dispatch = useDispatch();

  const { loading: catLoading, nav_categores } = useSelector(
    (state) => state.nav_parent_category
  );
  const { nav_sub_categores } = useSelector((state) => state.nav_sub_category);

  useEffect(() => {
    dispatch(nav_main_list());
    dispatch(nav_sub_list());
  }, [dispatch]);

  const currentPage = 1;
  const price = [0, 1000];
  const navigate_sub_cat_handler = (cat_id, sub_cat_id, slug) => {
    updated_product_data(dispatch, currentPage, price, cat_id, sub_cat_id);
    Navigate(`/${slug}`);
  };
  const navigate_cat_handler = (cat_id, slug) => {
    updated_product_data(dispatch, currentPage, price, cat_id, "");
    Navigate(`/${slug}`);
  };

  return (
    <Box sx={{ width: "40%" }}>
      <List
        className="mega-menu"
        sx={{ display: "flex", width: "100%", position: "unset" }}
      >
        {!catLoading
          ? nav_categores &&
            nav_categores
              .filter((item) => item.category_status === "Active")
              .map((item, i) => (
                <ListItem
                  key={i}
                  sx={{ textAlign: "Center", position: "unset" }}
                  disablePadding
                >
                  {/* <ListItemButton sx={{ textAlign: "center" }}> */}
                  <ListItemText primary={item.name} />
                  {/* </ListItemButton> */}
                  <Box className="mega-sub-menu" component={"div"}>
                    <List sx={{ display: "flex", width: "100%" }}>
                      {nav_sub_categores &&
                        nav_sub_categores
                          .filter(
                            (sub) =>
                              item.uuid === sub.Parent_category &&
                              sub.category_status === "Active"
                          )
                          .map((subItem, i) => (
                            <ListItem>
                              <img src="/box.webp" />
                              <ListItemText primary={subItem.name} />
                            </ListItem>
                          ))}
                    </List>
                  </Box>
                </ListItem>
              ))
          : null}
      </List>
    </Box>
  );
};

export default Categorie_navigation;
