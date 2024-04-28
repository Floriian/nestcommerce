import { BrowserRouter } from "react-router-dom";
import { Layout } from "./components";
import { Resource } from "~features/crud";
import { EditCategory } from "~features/category";
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
