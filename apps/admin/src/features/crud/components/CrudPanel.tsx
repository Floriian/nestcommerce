import { BaseEntity } from "../../../types";
import { axiosInstance } from "@utils/axios";
import { useEffect, useState } from "react";

interface Props {
  resource: string;
}
export function CrudPanel({ resource }: Props) {
  const [data, setData] = useState<BaseEntity[]>();
  useEffect(() => {
    const getData = async () => {
      const response = await axiosInstance.get<BaseEntity[]>(resource);
      setData(response.data);
    };
    getData();
  }, []);

  useEffect(() => console.log({ data }), [data]);
  return <></>;
}
