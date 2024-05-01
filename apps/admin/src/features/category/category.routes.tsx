import { Route } from "~types/Route";
import { EditCategory } from "./components";

export const categoryRoutes: Route = {
  path: "category",
  // element: <CrudPanel resource="category" />,
  children: [
    {
      path: ":id",
      element: <EditCategory />,
    },
  ],
};
