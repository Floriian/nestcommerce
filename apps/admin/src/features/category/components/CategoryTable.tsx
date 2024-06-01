import {
  Paper,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme,
} from "@mui/material";
import { useNavigate } from "@tanstack/react-router";
import { NoUndefinedField } from "~types/NoUndefinedField";
import { Category } from "../types";

interface Props {
  data: Category[];
}

export function CategoryTable({ data }: Props) {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Products</TableCell>
            <TableCell align="right">Active</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            (data as NoUndefinedField<Category[]>)?.map((row) => (
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
                <TableCell component="th" scope="row">
                  {row.products.length}
                </TableCell>
                <TableCell align="right">
                  <Switch disabled checked={row.active} />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
