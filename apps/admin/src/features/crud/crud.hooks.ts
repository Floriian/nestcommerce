import { useAppDispatch, useAppSelector } from "@app/store";
import { getCrud } from "./crud.selector";
import { addCRUD } from "./crud.slice";
import { CrudResource } from "./types";

export const useResources = () => useAppSelector(getCrud);

export const useAddResource = () => {
  const dispatch = useAppDispatch();
  return (payload: CrudResource) => dispatch(addCRUD(payload));
};
