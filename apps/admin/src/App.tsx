import { BrowserRouter } from "react-router-dom";
import { Resource } from "@features/crud";
import { Layout } from "@components/layout";
import { EditCategory } from "@features/category";
export function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Resource name="category" view={<EditCategory />} />
        <Resource name="product" view={<h1>pics</h1>} />
      </Layout>
    </BrowserRouter>
  );
}
