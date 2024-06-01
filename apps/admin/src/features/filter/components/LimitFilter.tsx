import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useSetLimit } from "../filter.hooks";
import { useAppSelector } from "~app/store";

const limits: { value: number; text: string }[] = [
  { text: "15", value: 15 },
  { text: "5", value: 5 },
];

export function LimitFilter() {
  const setLimit = useSetLimit();
  const limit = useAppSelector((state) => state.filter.limit);
  const handleChange = (e: number) => {
    setLimit(e);
  };
  return (
    <>
      <FormControl fullWidth>
        <InputLabel>Limit</InputLabel>
        <Select
          value={limit}
          label="Limit"
          onChange={(e: SelectChangeEvent<number>) =>
            handleChange(+e.target.value)
          }
        >
          {limits.map((limit, index) => (
            <MenuItem value={limit.value} key={index}>
              {limit.text}
            </MenuItem>
          ))}
          ;
        </Select>
      </FormControl>
    </>
  );
}
