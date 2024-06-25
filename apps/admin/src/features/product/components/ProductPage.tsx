import { EntityPage } from "~components/layout";
import { ProductTable } from "./ProductTable";
import { useGetProductsQuery } from "../product.api";

export function ProductPage() {
  const { isLoading, data } = useGetProductsQuery();
  return (
    <EntityPage
      isLoading={isLoading}
      pages={data?.pages}
      currentPage={data?.page}
      title="Products"
    >
      <ProductTable data={data?.data} />
    </EntityPage>
  );
}
