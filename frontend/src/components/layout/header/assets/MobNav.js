import * as React from "react";
import { Drawer, Box, IconButton } from "@mui/material";
import { MdArrowBackIos } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import updated_product_data from "../../../../utils/Filter_product_handler";
import { useNavigate } from "react-router-dom";
import Categorie_navigation from "./Categorie_navigation";

export const MobNav = ({ open, setOpen, toggleDrawer }) => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const currentPage = 1;
  const price = [0, 1000];

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <IconButton style={{ width: "50px", float: "right", marginTop: "10px" }}>
        <MdArrowBackIos />
      </IconButton>
      <Box className="mob-cateory-containor">
        <Categorie_navigation
          toggleDrawer={toggleDrawer}
          open={open}
          setOpen={setOpen}
        />
      </Box>
      {/* <Box style={{ padding: "50px 10px" }}>
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
      </Box> */}
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
    </>
  );
};
