import React, { useEffect, useState } from "react";
import Logo from "./assets/Logo";
import AdminHeader from "./AdminHeader";
import { useDispatch, useSelector } from "react-redux";
import { RxHamburgerMenu } from "react-icons/rx";
import { MobNav } from "./assets/MobNav";
import { Box } from "@mui/material";
import Navigation from "./assets/Navigation";
import Categorie_navigation from "./assets/Categorie_navigation";
import customTheme from "../../../ui/theme/theme.config";
import { nav_main_list, nav_sub_list } from "../../../actions/CategoreAction";

export const Header = () => {
  const [open, setOpen] = React.useState(false);
  const { user, loading } = useSelector((state) => state.user);
  const [isSticky, setIsSticky] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const dispatch = useDispatch();

  const toggleDrawer = (newOpen) => () => {
    console.log(newOpen);
    setOpen(newOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    dispatch(nav_main_list());
    dispatch(nav_sub_list());
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


  return (
    <>
      {user && user.role === "admin" && !loading ? <AdminHeader /> : null}

      <Box
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          position: isSticky ? "sticky" : "relative",
          top: "0px",
          zIndex: 1000,
          background: !isSticky
            ? ""
            : [customTheme.themes.colors.default.default_200],
          boxShadow: !isSticky ? "rgb(248, 241, 232)" : "",
        }}
        className={isSticky ? "h_sticky" : ""}
      >
        <Box sx={{ width: "1280px", textAlign: "center", position: "unset" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 0",
              position: "relative",
            }}
          >
            {windowWidth > 767 ? (
              <Categorie_navigation
                toggleDrawer={toggleDrawer}
                open={open}
                setOpen={setOpen}
              />
            ) : (
              <div
                style={{
                  width: "33.33%",
                  textAlign: "start",
                  paddingLeft: "10px",
                  fontSize: [customTheme.themes.layout.fontSize.X_large],
                }}
              >
                <RxHamburgerMenu onClick={toggleDrawer(true)} />
                <MobNav
                  open={open}
                  setOpen={setOpen}
                  toggleDrawer={toggleDrawer}
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
