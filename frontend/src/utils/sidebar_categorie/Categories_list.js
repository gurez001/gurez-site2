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
import React from "react";

const Categories_list = ({ selectedIndices, setSelectedIndices }) => {
  const datasa = ["demi1", "demo2", "demo3", "demo4"];
  const changeHandler = (index) => {
    setSelectedIndices((prev) => {
      if (prev.includes(index)) {
        // If the index is already in the array, remove it (deselect)
        return prev.filter((i) => i !== index);
      } else {
        // If the index is not in the array, add it (select)
        return [...prev, index];
      }
    });
  };
  console.log(selectedIndices);
  return (
    <Box>
      <Card
        className="custom-select-input"
        style={{ padding: "10px 25px" }}
        variant="outlined"
      >
        <FormGroup>
          {datasa.map((item, i) => (
            <>
              <FormControlLabel
                key={i}
                size="small"
                onChange={() => changeHandler(i)}
                control={<Checkbox checked={selectedIndices.includes(i)} />}
                label={item}
              />
            </>
          ))}
        </FormGroup>
      </Card>
    </Box>
  );
};

export default Categories_list;
