import { useMutation } from '@tanstack/react-query';
import { request } from '../../../service';
import { useNavigate } from 'react-router-dom';

export default function useAuth() {
  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation(
    async (data) => request.post('auth/login', data),

    {
      onSuccess: (response, variables) => {
        localStorage.setItem('statToken', response?.data?.token);
        localStorage.setItem('statStir', variables?.stir);
        if (response?.data?.token) {
          navigate('/forms');
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
