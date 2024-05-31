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
import { useSelector } from "react-redux";

const Categories_list = ({
  selectedIndices,
  setSelectedIndices,
  sub_selectedIndices,
  set_sub_SelectedIndices,
}) => {
  const { category, loading, all_sub_categores } = useSelector(
    (state) => state.allBlogCategore
  );

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

  const sub_changeHandler = (index) => {
    set_sub_SelectedIndices((prev) => {
      if (prev.includes(index)) {
        // If the index is already in the array, remove it (deselect)
        return prev.filter((i) => i !== index);
      } else {
        // If the index is not in the array, add it (select)
        return [...prev, index];
      }
    });
  };

  return (
    <Box>
      <Card
        className="cat-inbox-select"
        style={{ padding: "10px 25px" }}
        variant="outlined"
      >
        <FormGroup>
          {category &&
            category.map((Parent, i) => (
              <>
                <FormControlLabel
                  key={i}
                  size="small"
                  onChange={() => changeHandler(Parent._id)}
                  control={
                    <Checkbox checked={selectedIndices.includes(Parent._id)} />
                  }
                  label={Parent.blog_category_title}
                />

                {all_sub_categores &&
                all_sub_categores.filter(
                  (item) =>
                    item.blog_Parent_category === Parent.blog_category_uuid
                ).length > 0 ? (
                  <ul>
                    {all_sub_categores &&
                      all_sub_categores
                        .filter(
                          (item) =>
                            item.blog_Parent_category ===
                            Parent.blog_category_uuid
                        )

                        .map((item, i) => (
                          <li key={i}>
                            <FormControlLabel
                              size="small"
                              onChange={() => sub_changeHandler(item._id)}
                              control={
                                <Checkbox
                                  checked={sub_selectedIndices.includes(
                                    item._id
                                  )}
                                />
                              }
                              label={item.blog_category_title}
                            />
                          </li>
                        ))}
                  </ul>
                ) : null}
              </>
            ))}
        </FormGroup>
      </Card>
    </Box>
  );
};

export default Categories_list;
