import { QueryCache, QueryClient } from "react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  },
  queryCache: new QueryCache({
    onError: (error) => {
      console.log(error);
    },
  }),
});
