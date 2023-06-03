import { useQuery } from "react-query";

import { getTrends } from "../service";

const useTrends = (
  woeid: number,
  enabled: boolean,
  onSuccess: (data: Awaited<ReturnType<typeof getTrends>>) => void
) => {
  const { data, status, error, isFetched, isLoading, refetch } = useQuery({
    queryKey: ["trends", woeid],
    queryFn: async () => getTrends(woeid),
    enabled,
    onSuccess,
  });

  return { data, status, error, isFetched, refetch, isLoading };
};

export default useTrends;
