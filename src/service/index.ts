import { AvailableLocationResponse } from "../../pages/api/available";
import {
  ClosestLocationResponse,
  LatLngPosition,
} from "../../pages/api/closest";
import { CountryResponse } from "../../pages/api/countries";
import { TrendResponse } from "../../pages/api/trends";
import fetcher from "../helpers/fetcher";

export const getClosestLocation = async (clickedPosition: LatLngPosition) => {
  return await fetcher<ClosestLocationResponse[]>("/api/closest", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(clickedPosition),
  });
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
