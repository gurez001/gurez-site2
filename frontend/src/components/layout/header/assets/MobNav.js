import * as React from "react";
import {
  ListItemText,
  ListItemButton,
  ListItem,
  Drawer,
  List,
  Box,
  IconButton,
} from "@mui/material";
import { MdArrowBackIos } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import updated_product_data from "../../../../utils/Filter_product_handler";
import { useNavigate } from "react-router-dom";

export const MobNav = ({ toggleDrawer, open, setOpen }) => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [visible, setVisible] = React.useState(null);
  const { loading: catLoading, nav_categores } = useSelector(
    (state) => state.nav_parent_category
  );
  const { nav_sub_categores } = useSelector((state) => state.nav_sub_category);

  const currentPage = 1;
  const price = [0, 1000];
  const navigate_sub_cat_handler = (cat_id, sub_cat_id, slug) => {
    updated_product_data(dispatch, currentPage, price, cat_id, sub_cat_id);
    Navigate(`/${slug}`);
    setOpen(false);
  };
  const navigate_cat_handler = (cat_id, slug) => {
    updated_product_data(dispatch, currentPage, price, cat_id, "");
    Navigate(`/${slug}`);
    setOpen(false);
  };
  const handleClick = (i) => {
    setVisible((prevVisible) => (prevVisible === i ? null : i));
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <IconButton style={{ width: "50px", float: "right", marginTop: "10px" }}>
        <MdArrowBackIos />
      </IconButton>

      <Box style={{ padding: "50px 10px" }}>
        <List>
          {!catLoading
            ? nav_categores &&
              nav_categores
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
                      <span onClick={() => handleClick(i)}>
                        {visible === i ? <IoIosArrowUp /> : <IoIosArrowDown />}
                      </span>
                    </ListItemButton>
                    <Box
                      className={
                        visible === i
                          ? "child-navlist list-active"
                          : "child-navlist "
                      }
                      component={"div"}
                    >
                      <List sx={{ paddingLeft: "30px !important" }}>
                        {nav_sub_categores &&
                          nav_sub_categores
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
                ))
            : null}
        </List>
      </Box>
    </Box>
  );

  return (
    <>
      <div>
        {/* <Button >Open drawer</Button> */}
        <Drawer className="driver" open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>

      {/* <div
        id={isContentVisible === true ? "nav-trans" : "no-trans"}
        className="mob-nav"
      >
        <div className="mob-call">
          <div className="side-top-bar row space-between-center">
            <div className="col-md-10">
            <Search />
            </div>
            <div className="hab-remove col-md-3">
              <FaXmark onClick={toggleContentRemove} />
            </div>
          </div>
          <NavList toggleContentRemove={toggleContentRemove} />
        </div>
      </div> */}
    </>
  );
};
