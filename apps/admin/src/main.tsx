import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { Provider } from "react-redux";
import { PageLoader } from "~components";
import { store } from "~app";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<PageLoader />}>
        <App />
      </Suspense>
    </Provider>
  </React.StrictMode>
);
