import React, { useEffect, useState } from "react";
import Logo from "./assets/Logo";
import { Search } from "./assets/Search";
import { Wishlist } from "./assets/Wishlist";
import Cart from "./assets/Cart";
import "./style.css";
import { BottomHeader } from "./assets/BottomHeader";
import CallAction from "./assets/CallAction";
import AdminHeader from "./AdminHeader";
import { useSelector } from "react-redux";
import { RxHamburgerMenu } from "react-icons/rx";
import { MobNav } from "./assets/MobNav";

import User_Status from "./assets/User_Status";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

export const Header = () => {
  //this state for mob nav togle
  const [isContentVisible, setIsContentVisible] = useState(false);
  const { user, loading } = useSelector((state) => state.user);
  const [isSticky, setIsSticky] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const toggleContentadd = () => {
    setIsContentVisible(!isContentVisible);
  };
  const toggleContentRemove = () => {
    setIsContentVisible(false);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);
    };
  }, []);
  const navItems = ["Home", "About", "Contact"];
  // function DrawerAppBar(props) {
  //   const { window } = props;
  //   const [mobileOpen, setMobileOpen] = React.useState(false);

  //   const handleDrawerToggle = () => {
  //     setMobileOpen((prevState) => !prevState);
  //   };
  return (
    <>
      <Box
        //</>onClick={handleDrawerToggle}
        sx={{ textAlign: "center", display: "flex" }}
      >
        <List sx={{ textAlign: "center", display: "flex" }}>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Typography variant="h6" sx={{ my: 2 }}>
          MUI
        </Typography>
        <Divider />
        <List sx={{ textAlign: "center", display: "flex" }}>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
      {/* <header className={`header sticky ${isSticky ? "sticky" : ""}`}>
        {user && user.role === "admin" && !loading ? <AdminHeader /> : null}

        <>
          <div
            className={
              user && user.role === "admin"
                ? "containor admin-header"
                : "containor"
            }
          >
            <div className="nav-area">
              {windowWidth < 767 && (
                <>
                  <div className="hamb-t">
                    <RxHamburgerMenu onClick={toggleContentadd} />

                    <MobNav
                      toggleContentRemove={toggleContentRemove}
                      isContentVisible={isContentVisible}
                    />
                  </div>
                </>
              )}
              <div className="h-left-col nav-mon-cont">
                <Logo />

                <Search />
              </div>
              <div className="h-right-col">
                <CallAction />
                <Wishlist />
                <Cart />
                <div className="header-login">
                  <User_Status user={user && user} />
                </div>
              </div>
            </div>
          </div>

          <BottomHeader />
        </>
      </header> */}
    </>
  );
};
