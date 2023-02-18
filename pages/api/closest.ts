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

// Returns the locations that Twitter has trending topic information for, closest to a specified location.
export default async (
  req: NextApiRequest,
  res: NextApiResponse<ClosestLocationResponse[]>
) => {
  const lat = req.body.lat;
  const lng = req.body.lng;
  TWITTER.get(
    "trends/closest",
    { lat, long: lng },
    (_err: any, data: ClosestLocationResponse[]) => {
      res.status(200).json(data);
    }
  );
};
