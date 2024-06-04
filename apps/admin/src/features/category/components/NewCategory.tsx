import { Paper } from "@mui/material";
import { CategoryForm } from "./CategoryForm";

export function NewCategory() {
  return (
    <Paper sx={{ padding: "1rem" }}>
      <CategoryForm formData={undefined} />
    </Paper>
  );
}
