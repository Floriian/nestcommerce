import { useParams } from "react-router-dom";

export const useIDParam = () => useParams<{ id: string }>();
