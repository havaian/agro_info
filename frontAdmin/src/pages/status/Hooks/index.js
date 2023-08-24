import { useParams } from "react-router-dom";
import { request } from "../../../service";
import { useQuery } from "react-query";

export default function useStatusData() {
  const { id } = useParams();
  const { data, isLoading } = useQuery(
    ["BIR+", id],
    () => request.get("/organisation/get/" + id),
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

  return { data, isLoading };
}
