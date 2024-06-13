import { Box, Container, Typography } from "@mui/material";
import React from "react";
import customTheme from "../ui/theme/theme.config";

const Banner = ({ title, img }) => {
  return (
    <>
      <Container
        // maxWidth="lg"

        style={{
          maxWidth: [customTheme.screens.S_2xl],
          // padding: [customTheme.themes.layout.padding.screen_0_p_x],
        }}
      >
        <Box
          style={{
            maxWidth: [customTheme.screens.lg],
            margin: "auto auto",
            padding: [customTheme.themes.layout.padding.screen_0_p_y],
          }}
        >
          <Typography component={"H2"}>{title}</Typography>
        </Box>

        <Box
          sx={{
            backgroundImage: `url(${img})`, // Specify the path to your image
            backgroundSize: "cover", // Adjust the background size
            backgroundPosition: "center", // Adjust the background position
            height: "400px", // Set a fixed height or use your desired height
          }}
          component={"div"}
        >
          <Box
            style={{
              maxWidth: [customTheme.screens.lg],
              margin: "auto auto",
              padding: [customTheme.themes.layout.padding.screen_large],
              height: "100%",
            }}
          >
            <Box
              style={{
                width: "400px",
                padding: "10px",
                background: [customTheme.themes.colors.default.default_20],
                height: "100%",
              }}
            >
              <Typography
                style={{
                  color: [customTheme.themes.colors.white],
                }}
                component={"H3"}
              >
                {title}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Banner;
