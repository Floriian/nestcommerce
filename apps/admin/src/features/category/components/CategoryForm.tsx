import { zodResolver } from "@hookform/resolvers/zod";
import { Category, categorySchema } from "../category.schema";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useEffect } from "react";
import {
  Box,
  Button,
  FormControlLabel,
  FormGroup,
  Switch,
  TextField,
} from "@mui/material";
import { CloudUpload } from "@mui/icons-material";
import { FileInput } from "~components";

interface Props {
  formData: Category | undefined;
}

export function CategoryForm({ formData }: Props) {
  const { handleSubmit, control, reset, register } = useForm<Category>({
    resolver: zodResolver(categorySchema),
    defaultValues: formData ? formData : { name: "", active: true },
  });

  const onSubmit: SubmitHandler<Category> = (data) => {
    console.log(data);
  };

  useEffect(() => reset(formData), [formData, reset]);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ gap: "1rem", display: "flex", flexDirection: "column" }}
    >
      <Controller
        name="active"
        control={control}
        render={({ field }) => (
          <FormGroup>
            <FormControlLabel control={<Switch {...field} />} label="Active" />
          </FormGroup>
        )}
      />
      <Controller
        name="name"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <FormGroup>
            <TextField {...field} helperText={error?.message} />
          </FormGroup>
        )}
      />

      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUpload />}
      >
        Upload image
        <FileInput {...register("image")} type="file" accept="image/*" />
      </Button>

      <Button type="submit" variant="contained">
        Save
      </Button>
    </Box>
  );
}
