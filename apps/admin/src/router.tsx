import { RouteObject, createBrowserRouter } from "react-router-dom";
import { categoryRoutes } from "~features/category";
import { Layout } from "./components";

const appRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [categoryRoutes],
  },
];
export const router = createBrowserRouter(appRoutes);
