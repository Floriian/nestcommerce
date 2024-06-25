import { category } from "@/features";

export default async function CategoryPage({
  params,
}: {
  params: { url: string };
}) {
  const categoryProducts = await category.getProducts(params.url);
  console.log(categoryProducts);
  return <h1>{params.url}</h1>;
}
