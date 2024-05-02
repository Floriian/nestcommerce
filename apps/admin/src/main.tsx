import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PageLoader } from "~components";
import { store } from "~app";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./router";

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PageLoader>
        <RouterProvider router={router} />
      </PageLoader>
    </Provider>
  </React.StrictMode>
);
