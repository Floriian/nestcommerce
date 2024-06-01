import { Button, Input, Paper } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useNavigate } from "@tanstack/react-router";

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
      <Button variant="outlined" onClick={handleClick}>
        <Add />
      </Button>
    </Paper>
  );
}
