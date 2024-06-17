import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
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

const Categories = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const { allcategroes } = useSelector((state) => state.allCategroe);
  const [parent_slug, set_parent_slug] = useState(null);

  const { all_sub_categores } = useSelector((state) => state.sub_Categore);
  const [is_visiable_cat_list, set_is_visiable_cat_list] = useState(true);
  const [is_visiable_sub_cat_list, set_is_visiable__sub_cat_list] = useState(
    []
  );
  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(get_all_sub_categories());
  }, [dispatch]);

  useEffect(() => {
    if (allcategroes) {
      allcategroes &&
        allcategroes.filter((item) => {
          if (item.slug === category) set_parent_slug(null);
        });
    }
  }, [category, allcategroes]);

  const toggleSubCategories = (index) => {
    const newVisibility = [...is_visiable_sub_cat_list];
    newVisibility[index] = !newVisibility[index];
    set_is_visiable__sub_cat_list(newVisibility);
  };
  const navigate_sub_cat_handler = (cat_id, sub_cat_id, slug, cat_slug) => {
    updated_product_data(dispatch, 1, [0, 1000], cat_id, sub_cat_id);
    Navigate(`/${slug}`);
    set_parent_slug(cat_slug);
  };
  const navigate_cat_handler = (cat_id, slug) => {
    updated_product_data(dispatch, 1, [0, 1000], cat_id, "");
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
          <Box style={{ padding: "10px 10px" }}>
            <List>
              {allcategroes &&
                allcategroes
                  .filter(
                    (item) =>
                      item.category_status === "Active" &&
                      item.slug ===
                        (parent_slug !== null ? parent_slug : category)
                  )
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
                      <Box component={"div"}>
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
                                  <ListItemText
                                    onClick={() =>
                                      navigate_sub_cat_handler(
                                        item._id,
                                        subItem._id,
                                        subItem.slug,
                                        item.slug
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
