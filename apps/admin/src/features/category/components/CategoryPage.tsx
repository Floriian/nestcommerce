import { CategoryTable } from "./CategoryTable";
import { useGetCategoriesQuery } from "../category.api";
import { useEffect, useState } from "react";
import { useAppSelector } from "~app/store";
import { EntityPage } from "~features/entity";
import { EntityFilter } from "~components/common";

export function CategoryPage() {
  const [name, setName] = useState<string>("");
  const [active, setActive] = useState<boolean | "ALL">("ALL");
  const [page, setPage] = useState<number | undefined>(1);

  const limit = useAppSelector((state) => state.filter.limit);
  const { data, isLoading, refetch, isUninitialized } = useGetCategoriesQuery({
    page: page ? page : 1,
    limit,
    text: name,
    active,
  });

  const handlePaginationClick = (page: number) => {
    setPage(page);
    refetch();
  };

  useEffect(() => {
    refetch();
  }, [name, active, page, refetch]);

  useEffect(() => setPage(data?.page), [data?.page]);
  useEffect(() => console.log(page), [page]);

  return (
    <EntityPage
      filter={
        <EntityFilter
          active={active}
          entity="category"
          isUninitialized={isUninitialized}
          onActiveChange={(val) => setActive(val)}
          onInputChange={(val) => setName(val)}
          refetch={refetch}
          searchTextField={name}
        />
      }
      currentPage={page}
      onPaginationChange={handlePaginationClick}
      isLoading={isLoading}
      pages={data?.pages}
      title="Category"
    >
      <CategoryTable data={data?.data} />
    </EntityPage>
  );
}
