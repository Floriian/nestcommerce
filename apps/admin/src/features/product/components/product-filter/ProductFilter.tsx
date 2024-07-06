import { useNavigate } from "@tanstack/react-router";
import { useProductFilter, useProductFilterDispatch } from "./hooks";
import { BaseFilter } from "~types/BaseFilter";
import {
  Box,
  FormControl,
  Input,
  InputLabel,
  Paper,
  Select,
} from "@mui/material";
import { LimitFilter } from "~features/filter";

export function ProductFilter() {
  const productFilter = useProductFilter();
  const dispatch = useProductFilterDispatch();

  const navigate = useNavigate();
  const handleClick = () => navigate({ to: "/category/new" });

  const handleSearchTextChange = (value: string) => {
    dispatch({ action: "setSearchText", payload: { searchText: value } });
  };

  const handleActiveChange = (value: BaseFilter.Options) => {
    dispatch({ action: "setActive", payload: { active: value } });
  };
  return (
    <Paper
      sx={{
        width: "100%",
        padding: "0.5rem",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Input
        value={productFilter.searchText}
        onChange={(e) => handleSearchTextChange(e.target.value)}
      />
      <Box sx={{ display: "flex", gap: "0.5rem", width: "30%" }}>
        <LimitFilter />

        <FormControl fullWidth>
          <InputLabel>Active</InputLabel>
          <Select
            value={productFilter.active}
            label="Active"
            onChange={(e) =>
              handleActiveChange(e.target.value as BaseFilter.Options)
            }
          >
            {ACTIVE_OPTIONS.map((active, index) => (
              <MenuItem value={active.value} key={index}>
                {active.text}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button variant="outlined" onClick={handleClick}>
          <Add />
        </Button>
      </Box>
    </Paper>
  );
}
