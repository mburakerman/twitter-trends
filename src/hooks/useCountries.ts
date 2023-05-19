import { useQuery } from "react-query";
import { getCountries } from "../service";

const useCountries = () => {
  const { data, status, error, isFetched, isLoading } = useQuery({
    queryKey: ["countries"],
    queryFn: getCountries,
    enabled: false,
  });

  return { data, status, error, isFetched, isLoading };
};

export default useCountries;
