import { useIDParam } from "@hooks/useIDParam";
import { useGetCategoryQuery } from "../category.api";

export function EditCategory() {
  const { id } = useIDParam();
  const { data } = useGetCategoryQuery({ id: id! });

  return <h1>{data?.name}</h1>;
}
