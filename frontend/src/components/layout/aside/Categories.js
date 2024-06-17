import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import {
  getAllCategories,
  get_all_sub_categories,
} from "../../../actions/CategoreAction";
import updated_product_data from "../../../utils/Filter_product_handler";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Typography } from "@material-ui/core";

const Categories = ({ set_sub_cat_id, set_cat_id }) => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const { allcategroes } = useSelector((state) => state.allCategroe);

  const { all_sub_categores } = useSelector((state) => state.sub_Categore);
  const [is_visiable_cat_list, set_is_visiable_cat_list] = useState(true);
  const [is_visiable_sub_cat_list, set_is_visiable__sub_cat_list] = useState(
    []
  );
  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(get_all_sub_categories());
  }, [dispatch]);

  const toggleSubCategories = (index) => {
    const newVisibility = [...is_visiable_sub_cat_list];
    newVisibility[index] = !newVisibility[index];
    set_is_visiable__sub_cat_list(newVisibility);
  };
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
    <>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ width: "100%" }}>
          <Typography>
            <h3>
              <span>Product Categories</span>
              <span>
                {is_visiable_cat_list ? (
                  <FaMinus onClick={() => set_is_visiable_cat_list(false)} />
                ) : (
                  <FaPlus onClick={() => set_is_visiable_cat_list(true)} />
                )}
              </span>
            </h3>
          </Typography>
        </Box>
        <Box>
          <Box style={{ padding: "50px 10px" }}>
            <List>
              {allcategroes &&
                allcategroes
                  .filter((item) => item.category_status === "Active")
                  .map((item, i) => (
                    <ListItem
                      sx={{ display: "block !important" }}
                      key={i}
                      disablePadding
                    >
                      <ListItemButton>
                        <ListItemText
                          onClick={() =>
                            navigate_cat_handler(item._id, item.slug)
                          }
                          primary={item.name}
                        />
                                             <span
                        style={{ cursor: "pointer" }}
                        className="col-md-3"
                        onClick={() => toggleSubCategories(i)}
                      >
                        {is_visiable_sub_cat_list[i] ? (
                          <IoIosArrowForward />
                        ) : (
                          <IoIosArrowDown />
                        )}
                      </span>
                      </ListItemButton>
                      <Box
                      
                        // className={
                        //   visible === i
                        //     ? "child-navlist list-active"
                        //     : "child-navlist "
                        // }
                        component={"div"}
                      >
                        <List sx={{ paddingLeft: "30px !important" }}>
                          {all_sub_categores &&
                            all_sub_categores
                              .filter(
                                (sub) =>
                                  item.uuid === sub.Parent_category &&
                                  sub.category_status === "Active"
                              )
                              .map((subItem, i) => (
                                <ListItem sx={{ padding: 0 }}>
                                  {/* <img src="/box.webp" /> */}
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
                    </ListItem>
                  ))}
            </List>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Categories;
