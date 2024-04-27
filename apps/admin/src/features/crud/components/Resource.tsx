import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { CrudPanel } from "./CrudPanel";
import { useAppDispatch } from "@app/store";
import { addCRUD } from "../crud.slice";
import { CrudResource } from "../types";

export function Resource({
  name,
  delete: deleteView,
  edit,
  view,
}: CrudResource) {
  const dispatch = useAppDispatch();
  useEffect(() => {
    return () => {
      dispatch(addCRUD({ name }));
    };
  }, [name]);
  return (
    <Routes>
      <Route index path={name} element={<CrudPanel resource={name} />} />
      <Route
        path={`${name}/:id`}
        element={view ? view : <h1>one view {name}</h1>}
      />
      <Route
        path={`${name}/delete/:id`}
        element={deleteView ? deleteView : <h1>delete view</h1>}
      />
      <Route
        path={`${name}/edit/:id`}
        element={edit ? edit : <h1>edit view</h1>}
      />
    </Routes>
  );
}
