import {
  Box,
  CircularProgress,
  Pagination,
  Paper,
  Typography,
} from "@mui/material";
import { CategoryTable } from "./CategoryTable";
import { CategoryFilter } from "./CategoryFilter";
import { useGetCategoriesQuery } from "../category.api";
import { useState } from "react";

export function CategoryPage() {
  const [page, setPage] = useState<number | undefined>(0);
  const { data, isLoading, refetch } = useGetCategoriesQuery({
    page,
    limit: 15, //TODO: in slice
  });

  const handlePaginationClick = (page: number) => {
    setPage(page);
    refetch();
  };

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
      <Typography variant="h5">Categorys</Typography>
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
        />
      </Box>
    </Paper>
  );
}
