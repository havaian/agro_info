import { useParams } from "react-router-dom";
import { request } from "../../../service";
import { useQuery } from "react-query";

export default function usePdfData() {
  const { id } = useParams();
  const ids = id?.replaceAll("stirs=", "").split(",");
  const { data, isLoading } = useQuery(
    ["BIR+", id],
    () => request.post("/organisation/get", { stirs: ids }),
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
