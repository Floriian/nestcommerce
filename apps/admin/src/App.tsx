import { BrowserRouter } from "react-router-dom";
import { Resource } from "./features/crud/components";
import { Layout } from "./components";
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
