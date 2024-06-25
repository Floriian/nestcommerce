import { createRoute } from "@tanstack/react-router";
import { authenticatedRoutes } from "../../router";
import { ProductPage } from "./components/ProductPage";

export const productRoute = createRoute({
  getParentRoute: () => authenticatedRoutes,
  path: "products",
});

export const productIndexRoute = createRoute({
  getParentRoute: () => productRoute,
  path: "/",
  component: ProductPage,
});
