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
import Navigation from "./assets/Navigation";
import Categorie_navigation from "./assets/Categorie_navigation";
import customTheme from "../../../ui/theme/theme.config";

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
      {user && user.role === "admin" && !loading ? <AdminHeader /> : null}
      <Box
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: "1280px", textAlign: "center" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 0",
            }}
          >
            {windowWidth > 767 ? (
              <Categorie_navigation />
            ) : (
              <div
                style={{
                  width: "33.33%",
                  textAlign: "start",
                  paddingLeft: "10px",
                  fontSize: [customTheme.themes.layout.fontSize.X_large],
                }}
              >
                <RxHamburgerMenu onClick={toggleContentadd} />
                <MobNav
                  toggleContentRemove={toggleContentRemove}
                  isContentVisible={isContentVisible}
                />
              </div>
            )}
            <Logo />
            {windowWidth > 767 ? (
              <Navigation />
            ) : (
              <div style={{ width: "33.33%" }}></div>
            )}
          </Box>
          <Divider />
        </Box>
      </Box>
      {/* <header className={`header sticky ${isSticky ? "sticky" : ""}`}>
       

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
