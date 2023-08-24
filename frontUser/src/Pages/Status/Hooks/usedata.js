import { useQuery } from '@tanstack/react-query';
import { request } from '../../../service';
import { useNavigate } from 'react-router-dom';

export default function useStatusData() {
  const navigate = useNavigate();

  const { data, isLoading } = useQuery(
    ['BIR+'],
    () => request.get('/organisation/get/' + localStorage.getItem('statStir')),
    {
      select: (dat) => {
        return dat?.data;
      },
      onSuccess: (res) => {
        if (res.completed !== true) {
          navigate('/forms');
        }

        return res;
      },
      onError: (err) => {
        console.log(err);
      },
    }
  );
  return { data, isLoading };
}
