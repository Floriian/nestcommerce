import { ProductTable } from "./ProductTable";
import { useGetProductsQuery } from "../product.api";
import { EntityPage } from "~features/entity";
import { useEffect, useState } from "react";
import { useAppSelector } from "~app/store";
import { EntityFilter } from "~components/common";

export function ProductPage() {
  const [name, setName] = useState<string>("");
  const [active, setActive] = useState<boolean | "ALL">("ALL");
  const [page, setPage] = useState<number>(1);

  const limit = useAppSelector((state) => state.filter.limit);
  const { isLoading, data, refetch, isUninitialized } = useGetProductsQuery({
    active,
    limit,
    page,
    text: name,
  });

  const handlePaginationChange = (page: number) => {
    setPage(page);
    refetch();
  };

  useEffect(() => {
    refetch();
  }, [name, active, page, refetch]);

  return (
    <EntityPage
      isLoading={isLoading}
      pages={data?.pages}
      currentPage={data?.page}
      title="Products"
      onPaginationChange={handlePaginationChange}
      filter={
        <EntityFilter
          refetch={refetch}
          active={active}
          entity="Products"
          onInputChange={(e) => setName(e)}
          onActiveChange={(e) => setActive(e)}
          searchTextField={name}
          isUninitialized={isUninitialized}
        />
      }
    >
      <ProductTable data={data?.data} />
    </EntityPage>
  );
}
