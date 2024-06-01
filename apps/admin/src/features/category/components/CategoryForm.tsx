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
  Typography,
} from "@mui/material";
import { CloudUpload } from "@mui/icons-material";
import { FileInput } from "~components";
import {
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
} from "../category.api";

interface Props {
  formData: Category | undefined;
}

export function CategoryForm({ formData }: Props) {
  const { handleSubmit, control, reset, register } = useForm<Category>({
    resolver: zodResolver(categorySchema),
    defaultValues: formData ? formData : { name: "", active: true },
  });

  const [updateCategory, { isLoading: updateCategoryIsLoading }] =
    useUpdateCategoryMutation();
  const [createCategory, { isLoading: createCategoryIsLoading }] =
    useCreateCategoryMutation();

  const buttonDisabled = createCategoryIsLoading || updateCategoryIsLoading;

  const onSubmit: SubmitHandler<Category> = async (data) => {
    console.log("submitting");
    if (data._id) {
      await updateCategory(data);
    } else {
      await createCategory(data);
    }
  };

  useEffect(() => reset(formData), [formData, reset]);

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        gap: "1rem",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h6">
        {formData?._id
          ? `Editing ${formData?.name} category`
          : "Create a new category"}
      </Typography>
      <Controller
        name="active"
        control={control}
        render={({ field }) => (
          <FormGroup>
            <FormControlLabel
              control={<Switch {...field} checked={field.value} />}
              label="Active"
            />
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

      <Controller
        name="url"
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

      <Button type="submit" variant="contained" disabled={buttonDisabled}>
        Save
      </Button>
    </Box>
  );
}
