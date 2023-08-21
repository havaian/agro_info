import { useMutation, useQuery } from "react-query";
import { request } from "../../../service";
import { useParams } from "react-router-dom";
import { useState } from "react";

export default function useData() {
  const [value, setValue] = useState("");
  const { type } = useParams();
  const { mutate, data: searchData } = useMutation(
    async (data) => request.get("/organisation/get?search=" + data),
    {
      onError: (error) => {
        console.log(error);
      },
    }
  );

  function Search() {
    if (value?.length > 3) {
      mutate(value);
    }
  }
  const { data } = useQuery(
    ["List", type],
    () =>
      request.get(
        "/organisation/get/all?completed=" + (type === "active" ? true : false)
      ),
    {
      select: (dat) => {
        return dat?.data;
      },
      onSuccess: (res) => {
        return res;
      },
      onError: (err) => {
        console.log(err);
      },
    }
  );
  return {
    data: searchData?.data && value?.length > 0 ? searchData?.data : data,
    value,
    setValue,
    Search,
  };
}
