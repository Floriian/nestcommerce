import {
  categoryIdRoute,
  categoryIndexRoute,
  categoryRoute,
} from "~features/category";
import { Layout } from "./components";
import { createRootRoute, createRouter } from "@tanstack/react-router";

export const rootRoute = createRootRoute({
  component: Layout,
});

export const routeTree = rootRoute.addChildren([
  categoryRoute.addChildren([categoryIndexRoute, categoryIdRoute]),
]);
export const router = createRouter({ routeTree });
