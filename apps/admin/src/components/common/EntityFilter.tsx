import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Paper,
  Select,
} from "@mui/material";
import { useNavigate } from "@tanstack/react-router";
import { Add } from "@mui/icons-material";
import { LimitFilter } from "~features/filter";
import { ACTIVE_OPTIONS } from "./constants";

interface Props {
  entity: string;
  searchTextField: string;
  refetch: () => void;
  active: boolean | "ALL";
  onInputChange: (value: string) => void;
  onActiveChange: (value: boolean | "ALL") => void;
  isUninitialized: boolean;
}

export function EntityFilter({
  entity,
  onInputChange,
  onActiveChange,
  searchTextField,
  active,
}: Props) {
  const navigate = useNavigate();
  const handleClick = () => navigate({ to: `/${entity}/new` });

  return (
    <Paper
      sx={{
        width: "100%",
        padding: "0.5rem",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Input
        value={searchTextField}
        onChange={(e) => onInputChange(e.target.value)}
      />
      <Box sx={{ display: "flex", gap: "0.5rem", width: "30%" }}>
        <LimitFilter />

        <FormControl fullWidth>
          <InputLabel>Active</InputLabel>
          <Select
            value={active}
            label="Active"
            onChange={(e) => onActiveChange(e.target.value as boolean | "ALL")}
          >
            {ACTIVE_OPTIONS.map((active, index) => (
              //@ts-expect-error this is works.
              <MenuItem value={active.value} key={index}>
                {active.text}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button variant="outlined" onClick={handleClick}>
          <Add />
        </Button>
      </Box>
    </Paper>
  );
}
