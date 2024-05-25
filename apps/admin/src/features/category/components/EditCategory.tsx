import { CircularProgress, Paper } from "@mui/material";
import { useGetCategoryQuery } from "../category.api";
import { categoryIdRoute } from "../category.routes";
import { CategoryForm } from "./CategoryForm";

export function EditCategory() {
  const { categoryId } = categoryIdRoute.useParams();
  const { data, isSuccess, error, isLoading } = useGetCategoryQuery({
    id: categoryId!,
  });

  return (
    <Paper sx={{ padding: "1rem" }}>
      {data && isSuccess ? <CategoryForm formData={data} /> : null}
      {error ? JSON.stringify(error) : null}
      {isLoading ? <CircularProgress /> : null}
    </Paper>
  );
}
