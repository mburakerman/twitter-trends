import { NextApiRequest, NextApiResponse } from "next";

import TWITTER from "./_twitter";

export type ClosestLocationResponse = {
  country: string;
  countryCode: string;
  name: string;
  parentid: number;
  placeType: {
    code: number;
    name: string;
  };
  url: string;
  woeid: number;
};

export type LatLngPosition = {
  lat: number;
  lng: number;
};

// Returns the locations that Twitter has trending topic information for, closest to a specified location.
export default async (
  req: NextApiRequest,
  res: NextApiResponse<ClosestLocationResponse[]>
) => {
  const lat: Pick<LatLngPosition, "lat"> = req.body.lat;
  const lng: Pick<LatLngPosition, "lng"> = req.body.lng;

  TWITTER.get(
    "trends/closest",
    { lat, long: lng },
    (_err: Error, data: ClosestLocationResponse[]) => {
      res.status(200).json(data);
    }
  );
};
