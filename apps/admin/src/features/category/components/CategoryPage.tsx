import {
  Box,
  CircularProgress,
  Pagination,
  Paper,
  Typography,
} from "@mui/material";
import { CategoryTable } from "./CategoryTable";
import { useGetCategoriesQuery } from "../category.api";
import { useEffect, useState } from "react";
import { useAppSelector } from "~app/store";
import { CategoryFilter, useCategoryFilter } from "./categoryfilter";

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
    <Paper
      elevation={5}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "0.5rem",
        height: "auto",
      }}
    >
      <Typography variant="h5">Categories</Typography>
      <CategoryFilter />
      {isLoading ? <CircularProgress /> : <CategoryTable data={data!.data} />}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Pagination
          count={data?.pages}
          onChange={(_, page) => handlePaginationClick(page)}
          page={page}
        />
      </Box>
    </Paper>
  );
}
