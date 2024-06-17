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

const Categorie_navigation = ({ toggleDrawer, open, setOpen }) => {
  const [visible, setVisible] = useState(null);
  const navigate = useNavigate();
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
    navigate(`/${slug}`);
    setOpen(false);
  };

  const navigate_cat_handler = (cat_id, slug) => {
    updated_product_data(dispatch, currentPage, price, cat_id, "");
    navigate(`/${slug}`);
    setOpen(false);
  };

  const handleClick = (i) => {
    setVisible((prevVisible) => (prevVisible === i ? null : i));
  };

  return (
    <Box sx={{ width: "40%" }}>
      <List
        className="mega-menu desk-nab-list"
        sx={{ display: "flex", width: "100%", position: "unset" }}
      >
        {!catLoading &&
          nav_categores &&
          nav_categores
            .filter((item) => item.category_status === "Active")
            .map((item, i) => (
              <ListItem
                key={i}
                sx={{ textAlign: "center", position: "unset" }}
                disablePadding
              >
                <ListItemButton>
                  <ListItemText
                    onClick={() => navigate_cat_handler(item._id, item.slug)}
                    primary={item.name}
                  />
                  <span onClick={() => handleClick(i)}>
                    {visible === i ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </span>
                </ListItemButton>
                {/* {visible === i && ( */}
                <Box
                  className={
                    visible === i
                      ? "mega-sub-menu list-active "
                      : "mega-sub-menu"
                  }
                  component={"div"}
                >
                  <List sx={{ display: "flex", width: "100%" }}>
                    {nav_sub_categores &&
                      nav_sub_categores
                        .filter(
                          (sub) =>
                            item.uuid === sub.Parent_category &&
                            sub.category_status === "Active"
                        )
                        .map((subItem, subIndex) => (
                          <ListItem key={subIndex}>
                            <img src="/box.webp" alt={subItem.name} />
                            <ListItemText
                              onClick={() =>
                                navigate_sub_cat_handler(
                                  item._id,
                                  subItem._id,
                                  subItem.slug
                                )
                              }
                              primary={subItem.name}
                            />
                          </ListItem>
                        ))}
                  </List>
                </Box>
                {/* // )} */}
              </ListItem>
            ))}
      </List>
    </Box>
  );
};

export default Categorie_navigation;
