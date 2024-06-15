import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useRef } from "react";
import customTheme from "./theme/theme.config";

const Category_MediaCard = ({ item, event_handler, index, active_index }) => {
  // const divRef = useRef();

  // if (divRef.current) {
  //   const newDiv = document.createElement("div");
  //   newDiv.classList.add("demoooooooooo");
  //   divRef.current.appendChild(newDiv);
  // }
  //css

  // .mySwiper .swiper-slide{
  //   position:unset;
  // }
  
  // .demoooooooooo{
  //     display:none;
  // }
  // .active_2t34 .demoooooooooo{
  //     background:#000;
  //     display:block;
  //     padding:10px 0;
  //     position:fixed;
  //     left:50%;
  //     transform:translateX(-50%);
  //     z-index:0;
  //     bottom:0px;
  //     width:100%;
  // }
  // //css



 
  return (
    <>
      <Card
        className={active_index === index ? "active_2t34" : null}
        sx={{
          maxWidth: 345,
          background: "transparent",
          boxShadow: "none",
          borderRadius:'20px',
          boxShadow: customTheme.themes.layout.boxShadows.bs_50,
        }}
      >
        <CardMedia
          sx={{
            height: 140,
            backgroundColor: [customTheme.themes.colors.white],
            backgroundSize: "80%",
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: [customTheme.themes.colors.white],
            },
          }}
          image={
            "https://www.upack.in/media/catalog/product/cache/53044a3cfd6bcac7163468e00689f8a8/u/p/upkj233p248_1.jpg"
          }
          title={"demo"}
        />
        <CardContent
          onClick={() => event_handler(index)}
          style={{
            padding: "10px 2px",
            background: "transparent",
          }}
        >
          <Typography
            // onClick={()=>handler()}
            // ref={divRef}
            gutterBottom
            variant="h5"
            style={{
              fontSize: [customTheme.themes.layout.fontSize.small],
              fontWeight: 600,
              textAlign: "center",
            }}
            component="div"
          >
            {"demp"}
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
