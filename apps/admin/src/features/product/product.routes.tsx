import { createRoute } from "@tanstack/react-router";
import { authenticatedRoutes } from "../../router";
import { ProductPage } from "./components/ProductPage";
import { CreateOrEditProductPage } from "./components";

export const productRoute = createRoute({
  getParentRoute: () => authenticatedRoutes,
  path: "products",
});

export const productIndexRoute = createRoute({
  getParentRoute: () => productRoute,
  path: "/",
  component: ProductPage,
});

export const createOrEditProduct = createRoute({
  getParentRoute: () => productRoute,
  path: "$categoryId",
  component: CreateOrEditProductPage,
});
