import { useGetCategoryQuery } from "../category.api";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type Category, categorySchema } from "../category.schema";
import {
  Button,
  FormControlLabel,
  FormGroup,
  Switch,
  TextField,
} from "@mui/material";
import { useEffect } from "react";
import { useIDParam } from "~hooks";

export function EditCategory() {
  const { id } = useIDParam();
  const { data, isSuccess } = useGetCategoryQuery({
    id: id!,
  });

  const { handleSubmit, control, reset } = useForm<Category>({
    resolver: zodResolver(categorySchema),
    defaultValues: data ? data : { name: "", active: true },
  });

  const onSubmit: SubmitHandler<Category> = (data) => {
    console.log(data);
  };

  useEffect(() => reset(data), [isSuccess, data, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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

      <Button type="submit" variant="contained">
        Save
      </Button>
    </form>
  );
}
