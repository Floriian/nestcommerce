import { useAppDispatch } from "~app/store";
import { setLimit } from "./filter.store";

export const useSetLimit = () => {
  const dispatch = useAppDispatch();
  return (value: number) => {
    dispatch(setLimit(value));
  };
};
