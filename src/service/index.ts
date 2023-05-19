import { AvailableLocationResponse } from "../../pages/api/available";
import { CountryResponse } from "../../pages/api/countries";
import { TrendResponse } from "../../pages/api/trends";
import {
  ClosestLocationResponse,
  LatLngPosition,
} from "../../pages/api/closest";
import fetcher from "../helpers/fetcher";

const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3004"
    : "https://twitter-trends.vercel.app";

export const getClosestLocation = async (clickedPosition: LatLngPosition) => {
  const res = await fetch(BASE_URL + "/api/closest", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(clickedPosition),
  });
  return (await res.json()) as ClosestLocationResponse[];
};

export const getTrends = async (woeid: number) => {
  return await fetcher<TrendResponse[]>("/api/trends", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      woeid,
    }),
  });
};

export const getCountries = async () => {
  return await fetcher<CountryResponse[]>("/api/countries");
};

export const getAvailableCountries = async () => {
  const response = await fetcher<AvailableLocationResponse[]>("/api/available");

  // if parentid = 1, it's a country
  const countries = response.filter((item) => item?.parentId === 1);

  return countries;
};
