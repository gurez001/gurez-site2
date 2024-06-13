import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation } from "swiper/modules";
import Category_MediaCard from "../Category_MediaCard";
import customTheme from "../theme/theme.config";
import { Box, Container, Typography } from "@mui/material";
const Categorie_slider = ({ title }) => {
  return (
    <>
      <Container
        maxWidth="sm"
        className={"Categorie_slider_Swiper"}
        style={{
          maxWidth: [customTheme.screens.lg],
          padding: [customTheme.themes.layout.padding.screen_large],
        }}
      >
        <Typography style={{padding:'0px !important'}} component={"H2"}>{title}</Typography>

        <Box sx={{ marginTop: 4 }} component={"div"}>
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            speed={600}
            parallax={true}
            // pagination={{
            //   clickable: true,
            // }}
            navigation={true}
            modules={[Parallax, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide style={{ width: "350px !important" }}>
              <Category_MediaCard />
            </SwiperSlide>
            <SwiperSlide style={{ width: "350px" }}>
              <Category_MediaCard />
            </SwiperSlide>
            <SwiperSlide style={{ width: "350px" }}>
              <Category_MediaCard />
            </SwiperSlide>
            <SwiperSlide style={{ width: "350px" }}>
              <Category_MediaCard />
            </SwiperSlide>
            <SwiperSlide style={{ width: "350px" }}>
              <Category_MediaCard />
            </SwiperSlide>
            <SwiperSlide style={{ width: "350px" }}>
              <Category_MediaCard />
            </SwiperSlide>
            <SwiperSlide style={{ width: "350px" }}>
              <Category_MediaCard />
            </SwiperSlide>
            <SwiperSlide style={{ width: "350px" }}>
              <Category_MediaCard />
            </SwiperSlide>
            <SwiperSlide style={{ width: "350px" }}>
              <Category_MediaCard />
            </SwiperSlide>
            <SwiperSlide style={{ width: "350px" }}>
              <Category_MediaCard />
            </SwiperSlide>
          </Swiper>
        </Box>
      </Container>
    </>
  );
};

export default Categorie_slider;
