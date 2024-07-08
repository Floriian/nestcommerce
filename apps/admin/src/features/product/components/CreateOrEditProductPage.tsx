import { Paper } from "@mui/material";
import { useGetProductQuery } from "../product.api";
import { createOrEditProduct } from "../product.routes";

export function CreateOrEditProductPage() {
  const { productId } = createOrEditProduct.useParams();
  const { data } = useGetProductQuery({ id: productId });
  return (
    <Paper sx={{ padding: "1rem" }}>
      <ProductForm formData={data || undefined} />
    </Paper>
  );
}
