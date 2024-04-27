import { useEffect, useState } from "react";
import { axiosInstance } from "../../../utils";
import { BaseEntity } from "../../../types/BaseEntity";

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
