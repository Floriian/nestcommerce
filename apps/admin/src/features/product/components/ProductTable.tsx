import {
  Paper,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material";
import { useNavigate } from "@tanstack/react-router";
import type { NoUndefinedField } from "~types";
import { Product } from "../types";
import { useEffect } from "react";

interface Props {
  data: Product[] | undefined;
}

export function ProductTable({ data }: Props) {
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => console.log(data), [data]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">Active</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.length ? (
            (data as NoUndefinedField<Product[]>)?.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  "&:hover": {
                    cursor: "pointer",
                    backgroundColor: theme.palette.grey[300],
                    transition: "background-color .25s ease",
                  },
                }}
                onClick={() =>
                  navigate({
                    to: "/category/$categoryId",
                    params: { categoryId: row!._id },
                  })
                }
              >
                <TableCell>{row._id}</TableCell>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">
                  <Switch disabled checked={row.active} />
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} align="center">
                <Typography variant="h5">No products found.</Typography>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
