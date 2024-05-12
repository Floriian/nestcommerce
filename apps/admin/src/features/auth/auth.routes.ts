import { rootRoute } from "../../router";
import { createRoute } from "@tanstack/react-router";
import { LoginPage } from "./components/LoginPage";

export const authRoutes = createRoute({
  getParentRoute: () => rootRoute,
  path: "auth",
});

export const authIndexRoute = createRoute({
  getParentRoute: () => authRoutes,
  path: "/",
  component: LoginPage,
});
