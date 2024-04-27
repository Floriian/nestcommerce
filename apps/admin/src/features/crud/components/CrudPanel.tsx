import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { BaseEntity } from "../../../types";
import { axiosInstance } from "@utils/axios";
import { useEffect, useState } from "react";

interface Props {
  resource: string;
}
export function CrudPanel({ resource }: Props) {
  const [data, setData] = useState<BaseEntity[]>();
  useEffect(() => {
    const getData = async () => {
      const response = await axiosInstance.get<BaseEntity[]>(resource);
      setData(response.data);
    };
    getData();
  }, []);
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{row._id}</TableCell>
                <TableCell align="right">{row.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
