import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import customTheme from "../theme/theme.config";

import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";

const Cards = ({ item }) => {
  return (
    <>
      <Card
        className="product-card"
        sx={{
          position: "relative",
          maxWidth: 345,
          background: "none",
          boxShadow: "none",
        }}
      >
        <Box style={{ position: "relative" }}>
          <CardMedia
            sx={{
              height: 250,
              backgroundColor: "#fff",
              backgroundSize: "contain",
              transition: "background-color 0.3s ease",
              "&:hover": {},
            }}
            image={item.img}
            title={item.title}
          />
          <Box
            style={{
              position: "absolute",
              bottom: "5px",
              left: "5px",
            }}
            component={"div"}
          >
            <Typography
              style={{
                padding: "2px 6px",
                background: "#ffffffa8",
                fontSize: [customTheme.themes.layout.fontSize.tiny],
                fontWeight: 600,
                display: "inline-block",
              }}
              component={"p"}
            >
              <span>4.4</span>
              <span style={{ marginLeft: "3px", paddingTop: "1px" }}>
                <FaStar />
              </span>
              <span style={{ marginLeft: "3px" }}>|</span>
              <span style={{ marginLeft: "3px" }}>322</span>
            </Typography>
          </Box>
        </Box>

        <CardActions
          style={{
            background: [customTheme.themes.colors.white],
            display: "none",
          }}
          className="product-card-action-btn"
        >
          <Button
            style={{
              color: [customTheme.themes.colors.font_color.color_50],
              border: `1px solid ${customTheme.themes.colors.font_color.color_50}`,
            }}
            size="small"
            variant="outlined"
          >
            <CiHeart style={{ fontSize: "20px" }} /> WISHLIST
          </Button>
          <Typography
            style={{
              fontSize: [customTheme.themes.layout.fontSize.small],
              padding: "5px 0px 5px",
            }}
          >
            Size: 4x4x4
          </Typography>
        </CardActions>
        <Box>
          <CardContent
            sx={{
              padding: "10px 0",
            }}
          >
            <Typography
              style={{
                fontSize: [customTheme.themes.layout.fontSize.small],
                fontWeight: 900,
              }}
              gutterBottom
              variant="p"
            >
              Category
            </Typography>
            <Typography
              className="single-line-ellipsis"
              style={{
                fontSize: [customTheme.themes.layout.fontSize.small],
                color: [customTheme.themes.colors.font_color.color_50],
                fontWeight: 600,
              }}
              gutterBottom
              variant="h3"
              component="div"
            >
              {item.title}
            </Typography>
            <Typography
              style={{
                fontSize: [customTheme.themes.layout.fontSize.small],
                display: "flex",
                gap: 5,
                fontWeight: 600,
              }}
              variant="p"
            >
              <span> ₹{item.price}</span>
              <span
                style={{
                  fontSize: [customTheme.themes.layout.fontSize.tiny],
                  textDecoration: "line-through",
                  color: [customTheme.themes.colors.font_color.color_25],
                }}
              >
                ₹5000
              </span>

              <span
                style={{
                  fontSize: [customTheme.themes.layout.fontSize.tiny],
                  color: [customTheme.themes.colors.font_color.color_75],
                }}
              >
                (60% Off)
              </span>
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </>
  );
};

export default Cards;
