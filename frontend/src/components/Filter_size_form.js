import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import customTheme from "../ui/theme/theme.config";
import Media_size_card from "../ui/cards/Media_size_card";

export const Filter_size_form = () => {
  const [unit_type, set_unit_type] = useState("");
  const [input_value, set_input_value] = useState({
    Length: "",
    Breadth: "",
    Height: "",
    Type: "Corrugated box",
  });

  const change_input_handler = (e) => {
    const { name, value } = e.target;
    set_input_value({ ...input_value, [name]: value });
  };

  const currencies = [
    {
      value: "Corrugated box",
      label: "",
    },
    {
      value: "Flap box",
      label: "",
    },
    {
      value: "MAILER BOXES",
      label: "",
    },
    {
      value: "WHITE SHIPPING BOXES",
      label: "",
    },
    {
      value: "HONEYCOMB PAPER BUBBLE",
      label: "",
    },
    {
      value: "MAILING TUBES",
      label: "",
    },
    {
      value: "BUBBLE ROLL WRAP",
      label: "",
    },
  ];

  const Products = [
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/s/e/self_seal1_1.jpg",
      title: "Bubble Bag - Self Seal 70 GSM - 4W X 6H Inch",
      price: 2.5,
      size: {
        l: 3.5,
        b: 3.5,
        h: 3.5,
      },
      type: "Corrugated box",
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/b/u/bubble_pouch_upack.jpg",
      title: "Bubble Bag - Self Seal 70 GSM - 7W X 8H Inch",
      price: 2.5,
      size: {
        l: 4,
        b: 4,
        h: 4,
      },
      type: "Corrugated box",
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/u/p/uptf1.jpg",
      title: "Kraft Mailer Box - 7 x 5.75 x 2 Inch",
      price: 2.5,
      size: {
        l: 5,
        b: 4,
        h: 2.5,
      },
      type: "Corrugated box",
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/u/p/uptf5.jpg",
      title: "Bubble Bag - Self Seal 70 GSM - 6W X 6H Inch",
      price: 2.5,
      size: {
        l: 7,
        b: 7,
        h: 7,
      },
      type: "Flap box",
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/t/h/thumbnail-cp002-1-b2_6.jpg",
      title: "Kraft Mailer Box - 6.25 x 3.25 x 2 Inch",
      price: 2.5,
      size: {
        l: 8,
        b: 5,
        h: 2,
      },
      type: "Flap box",
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/s/e/self_seal1_1.jpg",
      title: "Bubble Bag - Self Seal 70 GSM - 10W X 8H Inch",
      price: 2.5,
      size: {
        l: 9,
        b: 3,
        h: 3,
      },
      type: "Flap box",
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/s/e/self_seal1_1.jpg",
      title: "Bubble Bag - Self Seal 70 GSM - 4W X 6H Inch",
      price: 2.5,
      size: {
        l: 7,
        b: 5,
        h: 4,
      },
      type: "Flap box",
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/b/u/bubble_pouch_upack.jpg",
      title: "Bubble Bag - Self Seal 70 GSM - 7W X 8H Inch",
      price: 2.5,
      size: {
        l: 5.5,
        b: 5,
        h: 3,
      },
      type: "Flap box",
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/u/p/uptf1.jpg",
      title: "Kraft Mailer Box - 7 x 5.75 x 2 Inch",
      price: 2.5,
      size: {
        l: 12,
        b: 10,
        h: 8,
      },
      type: "Flap box",
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/u/p/uptf5.jpg",
      title: "Bubble Bag - Self Seal 70 GSM - 6W X 6H Inch",
      price: 2.5,
      size: {
        l: 9,
        b: 4,
        h: 2,
      },
      type: "Corrugated box",
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/t/h/thumbnail-cp002-1-b2_6.jpg",
      title: "Kraft Mailer Box - 6.25 x 3.25 x 2 Inch",
      price: 2.5,
      size: {
        l: 7.5,
        b: 4.5,
        h: 3.5,
      },
      type: "Corrugated box",
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/s/e/self_seal1_1.jpg",
      title: "Bubble Bag - Self Seal 70 GSM - 10W X 8H Inch",
      price: 2.5,
      size: {
        l: 11,
        b: 6,
        h: 5,
      },
      type: "Corrugated box",
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/s/e/self_seal1_1.jpg",
      title: "Bubble Bag - Self Seal 70 GSM - 4W X 6H Inch",
      price: 2.5,
      size: {
        l: 8,
        b: 5,
        h: 3,
      },
      type: "Corrugated box",
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/b/u/bubble_pouch_upack.jpg",
      title: "Bubble Bag - Self Seal 70 GSM - 7W X 8H Inch",
      price: 2.5,
      size: {
        l: 7,
        b: 3,
        h: 1,
      },
      type: "Corrugated box",
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/u/p/uptf1.jpg",
      title: "Kraft Mailer Box - 7 x 5.75 x 2 Inch",
      price: 2.5,
      size: {
        l: 10,
        b: 8,
        h: 3,
      },
      type: "Corrugated box",
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/u/p/uptf5.jpg",
      title: "Bubble Bag - Self Seal 70 GSM - 6W X 6H Inch",
      price: 2.5,
      size: {
        l: 9,
        b: 6,
        h: 5,
      },
      type: "Flap box",
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/t/h/thumbnail-cp002-1-b2_6.jpg",
      title: "Kraft Mailer Box - 6.25 x 3.25 x 2 Inch",
      price: 2.5,
      size: {
        l: 5,
        b: 4.5,
        h: 3,
      },
      type: "Flap box",
    },
    {
      img: "https://www.upack.in/media/catalog/product/cache/398f110320083b813f5710538a8fc23a/s/e/self_seal1_1.jpg",
      title: "Bubble Bag - Self Seal 70 GSM - 10W X 8H Inch",
      price: 2.5,
      size: {
        l: 12,
        b: 4,
        h: 3,
      },
      type: "Flap box",
    },
  ];

  const [products, setProducts] = useState(Products);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const filterProducts = () => {
      const { Length, Breadth, Height, Type } = input_value;
      console.log(Type);
      const plus = 1;
      const length = parseFloat(Length) || 0;
      const width = parseFloat(Breadth) || 0;
      const height = parseFloat(Height) || 0;

      const filter_product = Products.filter((product) => {
        const {
          l: productLength,
          b: productBreadth,
          h: productHeight,
        } = product.size;

        return (
          productLength >= length &&
          productLength <= length + plus &&
          productBreadth >= width &&
          productBreadth <= width + plus &&
          productHeight >= height &&
          productHeight <= height + plus
        );
      });

      filter_product.length > 0
        ? setFilteredProducts(filter_product)
        : setFilteredProducts([]);
      // // Check if length, width, or height are greater than 0
      // if (length > 0 || width > 0 || height > 0) {
      //   setFilteredProducts(filtered);
      // } else {
      //   setFilteredProducts([]);
      // }
    };

    filterProducts();
  }, [input_value]);

  return (
    <>
      <div
        style={{
          background: [customTheme.themes.colors.default.default_100],
          boxShadow: [customTheme.themes.layout.boxShadows.bs_100],
        }}
      >
        <Container
          maxWidth="lg"
          style={{
            padding: [customTheme.themes.layout.padding.screen_large],
          }}
        >
          <Box>
            <Typography component={"h2"}>Box Finder</Typography>
            <Box>
              <FormControl
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 3,
                }}
              >
                <FormLabel
                  sx={{ fontSize: "16px", fontWeight: 600, color: "#000" }}
                >
                  Measuring Units
                </FormLabel>
                <RadioGroup row name="row-radio-buttons-group">
                  <FormControlLabel
                    size="small"
                    value="INCH"
                    control={<Radio />}
                    label="INCH"
                  />
                  <FormControlLabel
                    size="small"
                    value="CM"
                    control={<Radio />}
                    label="CM"
                  />
                </RadioGroup>
              </FormControl>
            </Box>
          </Box>
          <Box
            component="form"
            className="filter_p_form_cont"
            noValidate
            sx={{
              maxWidth: [customTheme.screens.lg],
              mt: 1,
              display: "flex",
              alignItems: "center", // Align items in the center
              justifyContent: "center", // Justify content in the center
              gap: "3px", // Add some spacing between children
            }}
          >
            <Box>
              <Typography>Length</Typography>
              <TextField
                type="text"
                size="small"
                className="input-box-cont input-border--r-l"
                fullWidth
                name="Length"
                autoComplete="Length"
                autoFocus
                value={input_value.Length}
                onChange={(e) => change_input_handler(e)}
              />
            </Box>
            <Box>
              <Typography>Breadth</Typography>
              <TextField
                type="text"
                fullWidth
                id="Breadth"
                size="small"
                className="input-box-cont"
                name="Breadth"
                autoComplete="Breadth"
                autoFocus
                value={input_value.Breadth}
                onChange={(e) => change_input_handler(e)}
              />
            </Box>
            <Box>
              <Typography>Height</Typography>
              <TextField
                type="text"
                fullWidth
                className="input-box-cont"
                name="Height"
                size="small"
                autoComplete="Height"
                autoFocus
                value={input_value.Height}
                onChange={(e) => change_input_handler(e)}
              />
            </Box>
            <Box>
              <Typography>Type</Typography>
              <TextField
                required
                className="input-box-cont input-border--r-r"
                fullWidth
                select
                name="Type"
                defaultValue="Corrugated box"
                size="small"
                value={input_value.Type}
                onChange={(e) => change_input_handler(e)}
                SelectProps={{
                  native: true,
                }}
                inputProps={{
                  sx: {
                    fontSize: [customTheme.themes.layout.fontSize.small],
                  },
                }}
              >
                {currencies.map((option) => (
                  <option
                    style={{
                      fontSize: [customTheme.themes.layout.fontSize.tiny], // Adjust the size as needed
                    }}
                    key={option.value}
                    value={option.value}
                  >
                    {option.value}
                  </option>
                ))}
              </TextField>
            </Box>
            <Box>
              <Button
                variant="contained"
                sx={{
                  marginTop: 3,
                  padding: "8px 15px",
                  borderRadius: "15px",
                  border: `1px solid ${customTheme.themes.colors.default.default_900}`,
                  backgroundColor: [
                    customTheme.themes.colors.default.default_900,
                  ],
                  "&:hover": {
                    backgroundColor: [customTheme.themes.colors.white],
                    color: [customTheme.themes.colors.default.default_900],
                    border: `1px solid ${customTheme.themes.colors.default.default_900}`,
                  },
                }}
              >
                SEARCH
              </Button>
            </Box>
          </Box>

          <Box>
            {filteredProducts.length}
            {filteredProducts.map((product, index) => (
              // <Box key={index} sx={{ margin: 2 }}>
              //   <img src={product.img} alt={product.title} />
              //   <h3>{product.title}</h3>
              //   <p>Price: {product.price}</p>
              //   <p>
              //     Size: {product.size.l} x {product.size.b} x {product.size.h}{" "}
              //     inches
              //   </p>
              // </Box>
              <Media_size_card key={index} product={product} />
            ))}
          </Box>
        </Container>
      </div>
    </>
  );
};
