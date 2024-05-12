import { Alert, Box, Button, TextField } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { AuthSchema, authSchema } from "../auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginMutation } from "../auth.api";
import { HttpError } from "~types/HttpError";
import { useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";

export function LoginForm() {
  const { control, handleSubmit, reset } = useForm<AuthSchema>({
    resolver: zodResolver(authSchema),
  });
  const [login, { data: response, isError, error }] = useLoginMutation();
  const navigate = useNavigate();

  useEffect(() => reset(), [reset]);

  const onSubmit: SubmitHandler<AuthSchema> = async (data) => {
    await login(data);
    if (response?.success) {
      navigate({ to: "/" });
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <Alert
        variant="filled"
        severity="warning"
        sx={{ display: isError ? "block" : "none" }}
      >
        {(error as HttpError)?.data?.message
          ? (error as HttpError)?.data?.message
          : "Please try again later"}
      </Alert>
      <Controller
        name="email"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            error={!!error?.message?.length}
            id="outlined-error-helper-text"
            label="Email"
            helperText={error?.message ? error.message : ""}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <TextField
            {...field}
            error={!!error?.message?.length}
            id="outlined-error-helper-text"
            label="Password"
            type="password"
            helperText={error?.message ? error.message : ""}
          />
        )}
      />
      <Button variant="outlined" type="submit">
        Login
      </Button>
    </Box>
  );
}
