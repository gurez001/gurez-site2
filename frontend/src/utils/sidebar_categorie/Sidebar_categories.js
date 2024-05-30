import React, { useState } from "react";
import { GrLocationPin } from "react-icons/gr";
import { FaRegEye } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import {
  Typography,
  Button,
  Box,
  Card,
  CardActions,
  CardContent,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import Categories_list from "./Categories_list";
import Add_New_categorie_list from "./Add_New_categorie_list";

const Sidebar_categories = () => {
  const [selectedIndices, setSelectedIndices] = useState([]);

  return (
    <Box sx={{ minWidth: 275,marginTop:5 }}>
      <Card variant="outlined">
        <CardContent sx={{ padding: 0 }}>
          <Typography
            sx={{
              fontSize: 14,
              padding: 1,
              borderBottom: "1px solid",
              borderColor: "text.secondary",
            }}
            color="text.secondary"
            gutterBottom
          >
            Categories
          </Typography>

          <Typography style={{ padding: "10px 25px" }} component="div">
            <Button
              size="small"
              style={{ width: "130px", fontSize: "11px", padding: "3px 5px" }}
              variant="outlined"
            >
              All Categories
            </Button>
            <Categories_list
              selectedIndices={selectedIndices}
              setSelectedIndices={setSelectedIndices}
            />
          </Typography>
        </CardContent>
        <CardActions>
          <Add_New_categorie_list />
        </CardActions>
      </Card>
    </Box>
  );
};

export default Sidebar_categories;
