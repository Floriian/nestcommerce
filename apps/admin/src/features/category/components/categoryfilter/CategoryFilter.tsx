import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Paper,
  Select,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import { useNavigate } from "@tanstack/react-router";
import { LimitFilter } from "~features/filter";
import { useCategoryFilter, useCategoryFilterDispatch } from "./hooks";
import type { ActiveOptions } from "~features/category/types";
import { ACTIVE_OPTIONS } from "~features/category/constants";

export function CategoryFilter() {
  const categoryFilter = useCategoryFilter();
  const dispatch = useCategoryFilterDispatch();

  const navigate = useNavigate();
  const handleClick = () => navigate({ to: "/category/new" });

  const handleSearchTextChange = (value: string) => {
    dispatch({ action: "setSearchText", payload: { searchText: value } });
  };

  const handleActiveChange = (value: ActiveOptions) => {
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
        value={categoryFilter.searchText}
        onChange={(e) => handleSearchTextChange(e.target.value)}
      />
      <Box sx={{ display: "flex", gap: "0.5rem", width: "30%" }}>
        <LimitFilter />

        <FormControl fullWidth>
          <InputLabel>Active</InputLabel>
          <Select
            value={categoryFilter.active}
            label="Active"
            onChange={(e) =>
              handleActiveChange(e.target.value as ActiveOptions)
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
