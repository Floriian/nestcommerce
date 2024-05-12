import {
  categoryIdRoute,
  categoryIndexRoute,
  categoryRoute,
} from "~features/category";
import { Layout } from "./components";
import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { authIndexRoute, authRoutes } from "~features/auth";

export const rootRoute = createRootRoute();

export const authenticatedRoutes = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Layout,
});

export const routeTree = rootRoute.addChildren([
  authRoutes.addChildren([authIndexRoute]),
  authenticatedRoutes.addChildren([
    categoryRoute.addChildren([categoryIndexRoute, categoryIdRoute]),
  ]),
]);
export const router = createRouter({ routeTree });
