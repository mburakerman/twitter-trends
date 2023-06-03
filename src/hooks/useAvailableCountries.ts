import { useQuery } from "react-query";

import { getAvailableCountries } from "../service/index";

const useAvailableCountries = () => {
  const { data, status, error, isFetched, isLoading, refetch } = useQuery({
    queryKey: ["availableCountries"],
    queryFn: getAvailableCountries,
    enabled: false,
  });

  return { data, status, error, isFetched, isLoading, refetch };
};

export default useAvailableCountries;
