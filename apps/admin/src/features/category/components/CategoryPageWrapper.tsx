import { CategoryPage } from "./CategoryPage";
import { CategoryFilterProvider } from "./categoryfilter";

export function CategoryPageWrapper() {
  return (
    <CategoryFilterProvider>
      <CategoryPage />
    </CategoryFilterProvider>
  );
}
