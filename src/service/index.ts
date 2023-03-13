import { LatLngPosition } from "../types/index";
import { AvailableLocationResponse } from "../../pages/api/available";
import { CountryResponse } from "../../pages/api/countries";
import { TrendResponse } from "../../pages/api/trends";
import { ClosestLocationResponse } from "../../pages/api/closest";

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
  const res = await fetch(BASE_URL + "/api/trends", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      woeid,
    }),
  });
  return (await res.json()) as TrendResponse[];
};

export const getCountries = async () => {
  const res = await fetch(BASE_URL + "/api/countries");
  return (await res.json()) as CountryResponse[];
};

export const getAvailableCountries = async () => {
  const res = await fetch(BASE_URL + "/api/available");
  const data = await res.json();
  // if parentid = 1, it's a country
  const countries = data?.filter(
    (item: AvailableLocationResponse) => item?.parentId === 1
  );
  return countries as AvailableLocationResponse[];
};
