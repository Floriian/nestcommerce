import { rootRoute } from "../../router";
import { CategoryTable, EditCategory } from "./components";
import { createRoute } from "@tanstack/react-router";

export const categoryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "category",
});

export const categoryIndexRoute = createRoute({
  getParentRoute: () => categoryRoute,
  path: "/",
  component: CategoryTable,
});

export const categoryIdRoute = createRoute({
  getParentRoute: () => categoryRoute,
  path: "$categoryId",
  component: EditCategory,
});
