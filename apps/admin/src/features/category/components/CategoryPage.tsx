import { CategoryTable } from "./CategoryTable";
import { useGetCategoriesQuery } from "../category.api";
import { useEffect, useState } from "react";
import { useAppSelector } from "~app/store";
import { CategoryFilter, useCategoryFilter } from "./categoryfilter";
import { EntityPage } from "~features/entity";

export function CategoryPage() {
  const [page, setPage] = useState<number | undefined>(0);
  const categoryFilter = useCategoryFilter();

  const limit = useAppSelector((state) => state.filter.limit);
  const { data, isLoading, refetch } = useGetCategoriesQuery({
    page: page ? page : 1,
    limit,
    text: categoryFilter.searchText,
    active: categoryFilter.active,
  });

  const handlePaginationClick = (page: number) => {
    setPage(page);
    refetch();
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      refetch();
    }, 500);

    return () => {
      clearTimeout(timeOut);
    };
  }, [categoryFilter.active, categoryFilter.searchText, refetch]);

  useEffect(() => setPage(data?.page), [data?.page]);
  useEffect(() => console.log(page), [page]);

  return (
    <EntityPage
      filter={<CategoryFilter />}
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
