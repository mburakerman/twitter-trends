import { NextApiRequest, NextApiResponse } from 'next'
import TWITTER from './_twitter'

interface IAvailableResponse {
  country: string;
  countryCode: string;
  name: string;
  parentid: number;
  placeType: {
    code: number;
    name: string;
  },
  url: string;
  woeid: number;
}

// returns the locations that Twitter has trending topic information for
// https://developer.twitter.com/en/docs/twitter-api/v1/trends/locations-with-trending-topics/api-reference/get-trends-available
export default async (req:NextApiRequest, res:NextApiResponse<IAvailableResponse>) => {
  TWITTER.get('trends/available', function (_err, data, _response) {
    res.status(200).json(data)
  })
}
