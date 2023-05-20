import { NextApiRequest, NextApiResponse } from "next";
import TWITTER from "./_twitter";

export type AvailableLocation = {
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

export type AvailableLocationResponse = {
  value: AvailableLocation;
  label: string;
  parentId: number;
};

// Returns the locations that Twitter has trending topic information for.
export default async (
  _req: NextApiRequest,
  res: NextApiResponse<AvailableLocationResponse[]>
) => {
  TWITTER.get("trends/available", (_err: Error, data: AvailableLocation[]) => {
    res.status(200).json(
      data.map((item) => {
        return {
          value: item,
          label: item.name,
          parentId: item.parentid,
        } as unknown as AvailableLocationResponse;
      })
    );
  });
};
