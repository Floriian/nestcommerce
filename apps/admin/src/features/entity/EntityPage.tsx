import {
  Box,
  CircularProgress,
  Pagination,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";

interface Props {
  filter: React.ReactNode;
  isLoading: boolean;
  pages: number | undefined;
  currentPage: number | undefined;
  onPaginationChange: (page: number) => void;
  title: string;
  children: React.ReactNode;
}

/**
 * A reusable component for entities. It is speed up the development for new entities. 
 * @component
 * @param filter Filter Component, instance of ReactNode
 * @param isLoading Boolean indication if data is loading
 * @param pages Number of pages available
 * @param currentPage: Function to handle page change
 * @param title Name of the entity
 * @param children Content of page
 * @example
 * <EntityPage
  currentPage={currentPage}
  filter={<FilterComponent />}
  onPaginationChange={handlePaginationChange}
  pages={totalPages}
  title={`'${entityName}' List`}
  isLoading={loading}
>
  {data.map((item) => (
    <EntityItem key={item.id} data={item} />
  )}
</EntityPage>

 */
export function EntityPage({
  currentPage,
  filter,
  onPaginationChange,
  pages,
  title,
  isLoading,
  children,
}: Props) {
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
      <Typography variant="h5">{title}</Typography>
      {filter}
      {isLoading ? <CircularProgress /> : children}
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
          count={pages}
          onChange={(_, page) => onPaginationChange(page)}
          page={currentPage}
        />
      </Box>
    </Paper>
  );
}
