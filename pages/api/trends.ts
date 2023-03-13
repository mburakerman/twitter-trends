import { NextApiRequest, NextApiResponse } from "next";
import TWITTER from "./_twitter";
import { fetchFromRedis } from "../../src/redis-cache";

export type Trend = {
  name: string;
  url: string;
  promoted_content?: any;
  query: string;
  tweet_volume?: number;
};

export type TrendResponse = {
  trends: Trend[];
  as_of: Date;
  boo: string;
  created_at: Date;
  locations: {
    name: string;
    woeid: number;
  }[];
};

// Returns the top 50 trending topics for a specific id, if trending information is available for it.
export default async (
  req: NextApiRequest,
  res: NextApiResponse<TrendResponse[]>
) => {
  const woeid = req.body.woeid;

  const getTrendsPlace = <T>(): Promise<T> => {
    return new Promise((resolve, reject) => {
      TWITTER.get("trends/place", { id: woeid }, (err: Error, data: T) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  };

  try {
    const data = await fetchFromRedis(
      "trends",
      async () => await getTrendsPlace<TrendResponse[]>(),
      60
    );
    return res.status(200).json(data);
  } catch (error) {
    console.error(error);
  }
};
