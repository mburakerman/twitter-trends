const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3004"
    : "https://twitter-trends.vercel.app";

const fetcher = async <T>(url: string, options?: RequestInit): Promise<T> => {
  const requestOptions: RequestInit = {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  };

  const response = await fetch(`${BASE_URL}${url}`, requestOptions);

  return response.json() as Promise<T>;
};

export default fetcher;
