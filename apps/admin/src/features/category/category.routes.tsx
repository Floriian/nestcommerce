import { authenticatedRoutes } from "../../router";
import { EditCategory } from "./components";
import { CategoryPage } from "./components/CategoryPage";
import { NewCategory } from "./components/NewCategory";
import { createRoute } from "@tanstack/react-router";

export const categoryRoute = createRoute({
  getParentRoute: () => authenticatedRoutes,
  path: "category",
});

export const categoryIndexRoute = createRoute({
  getParentRoute: () => categoryRoute,
  path: "/",
  component: CategoryPage,
});

export const categoryIdRoute = createRoute({
  getParentRoute: () => categoryRoute,
  path: "$categoryId",
  component: EditCategory,
});

export const categoryNewRoute = createRoute({
  getParentRoute: () => categoryRoute,
  path: "new",
  component: NewCategory,
});
