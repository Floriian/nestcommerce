import { ProductTable } from "./ProductTable";
import { useGetProductsQuery } from "../product.api";
import { EntityPage } from "~features/entity";
import { ProductFilter } from "./product-filter";

export function ProductPage() {
  const { isLoading, data } = useGetProductsQuery();

  const handlePaginationChange = (page: number) => {};
  return (
    <EntityPage
      isLoading={isLoading}
      pages={data?.pages}
      currentPage={data?.page}
      title="Products"
      onPaginationChange={handlePaginationChange}
      filter={<ProductFilter />}
    >
      <ProductTable data={data?.data} />
    </EntityPage>
  );
}
