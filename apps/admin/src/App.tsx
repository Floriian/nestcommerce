import { BrowserRouter } from "react-router-dom";
import { Resource } from "@features/crud";
import { Layout } from "@components/layout";
export function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Resource name="category" />
        <Resource name="product" view={<h1>pics</h1>} />
      </Layout>
    </BrowserRouter>
  );
}
