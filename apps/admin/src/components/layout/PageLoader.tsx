import { Box, CircularProgress } from "@mui/material";
import { QueryStatus } from "@reduxjs/toolkit/query";
import { useSelector } from "react-redux";
import { RootState } from "~app/store";

export function PageLoader({ children }: { children: React.ReactNode }) {
  // const isLoading = useSelector((state: RootState) =>
  //   Object.values(state.api.queries).some(
  //     (value) => value?.status === QueryStatus.pending
  //   )
  // );

  // if (isLoading) {
  //   return (
  //     <Box
  //       sx={{
  //         zIndex: 999,
  //         display: "flex",
  //         position: "absolute",
  //         justifyContent: "center",
  //         width: "100%",
  //         height: "100%",
  //         alignItems: "center",
  //         backgroundColor: "rgba(0,0,0,0.3)",
  //         overflow: "hidden",
  //       }}
  //     >
  //       <CircularProgress thickness={4} size="4rem" />
  //     </Box>
  //   );
  // }

  return children;
}
