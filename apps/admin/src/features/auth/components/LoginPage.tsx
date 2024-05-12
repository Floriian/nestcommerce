import { Box, Paper, Typography, styled } from "@mui/material";
import { LoginForm } from "./LoginForm";

const StyledPaper = styled(Paper)(() => ({
  width: "30%",
  padding: "2rem",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
}));

export function LoginPage() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <StyledPaper elevation={2}>
        <Typography variant="h4" textAlign="center">
          Login
        </Typography>
        <LoginForm />
      </StyledPaper>
    </Box>
  );
}
