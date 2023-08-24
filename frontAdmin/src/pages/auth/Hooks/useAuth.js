import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { request } from "../../../service";

export default function useAuth() {
  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation(
    async (data) => request.post("auth/login", data),
    {
      onSuccess: (response, variables) => {
        localStorage.setItem("statAdminToken", response?.data?.token);
        localStorage.setItem("statAdminStir", variables?.stir);
        if (response?.data?.token) {
          navigate("/table/active");
        }
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
  function sendData(data) {
    mutate({ stir: data.username, password: data.password });
  }
  return { sendData, isLoading };
}
