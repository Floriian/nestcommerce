import { authenticatedRoutes } from "../../router";
import { EditCategory } from "./components";
import { NewCategory } from "./components/NewCategory";
import { CategoryPageWrapper } from "./components/CategoryPageWrapper";
import { createRoute } from "@tanstack/react-router";

export const categoryRoute = createRoute({
  getParentRoute: () => authenticatedRoutes,
  path: "category",
});

export const categoryIndexRoute = createRoute({
  getParentRoute: () => categoryRoute,
  path: "/",
  component: CategoryPageWrapper,
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
