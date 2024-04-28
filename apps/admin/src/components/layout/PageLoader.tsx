import { Box, CircularProgress } from "@mui/material";

export function PageLoader() {
  return (
    <Box
      sx={{
        zIndex: 999,
        display: "flex",
        position: "absolute",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.8",
      }}
    >
      <CircularProgress />
    </Box>
  );
}
