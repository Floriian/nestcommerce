import { Box, Button, Input, Paper } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useNavigate } from "@tanstack/react-router";
import { LimitFilter } from "~features/filter";

export function CategoryFilter() {
  const navigate = useNavigate();
  const handleClick = () => navigate({ to: "/category/new" });
  return (
    <Paper
      sx={{
        width: "100%",
        padding: "0.5rem",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Input />
      <Box sx={{ display: "flex", gap: "0.5rem" }}>
        <LimitFilter />
        <Button variant="outlined" onClick={handleClick}>
          <Add />
        </Button>
      </Box>
    </Paper>
  );
}
