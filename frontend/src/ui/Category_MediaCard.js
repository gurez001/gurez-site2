import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import customTheme from "./theme/theme.config";

const Category_MediaCard = ({ item }) => {
  return (
    <>
      <Card sx={{ maxWidth: 345,  background:'transparent',boxShadow:'none' }}>
        <CardMedia
          sx={{
            height: 140,
            backgroundColor: "rgba(27,27,23,.15)",
            backgroundSize: "contain",
            transition: 'background-color 0.3s ease',
            '&:hover': {
              backgroundColor: [customTheme.themes.colors.green.green_50]
            }
          }}
          image={item.img}
          title={item.text}
        />
        <CardContent
          style={{
            padding: "10px 2px",
            background:'transparent'
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            style={{
              fontSize: [customTheme.themes.layout.fontSize.small],
              fontWeight: 600,
              textAlign: "center",
            }}
            component="div"
          >
            {item.text}
          </Typography>
        </CardContent>
        {/* <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </Card>
    </>
  );
};

export default Category_MediaCard;
