import { NextApiRequest, NextApiResponse } from 'next'
import TWITTER from './_twitter'

interface Locations {
  name: string
  woeid: number
}
interface Trends {
  name: string;
  promoted_content: any
  query: string;
  tweet_volume: number
  url: string
}
export interface ITrendsResponse {
  as_of: string
  created_at: string;
  locations: Array<Locations>;
  trends: Array<Trends>;
}

export default async (req: NextApiRequest, res:NextApiResponse) => {
  const woeid = req.body.woeid
  TWITTER.get('trends/place', { id: woeid }, function (_err, data, _response: ITrendsResponse) {
    res.status(200).json(data)
  })
}
