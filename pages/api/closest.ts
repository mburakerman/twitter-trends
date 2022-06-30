import { NextApiRequest, NextApiResponse } from 'next'
import TWITTER from './_twitter'

export interface IClosestResponse {
  country1: string
  countryCode: string
  name: string
  parentid: number
  placeType: {code: number, name: string}
  url: string
  woeid: number
}

export default async (req:NextApiRequest, res:NextApiResponse) => {
  const lat = req.body.lat
  const lng = req.body.lng
  TWITTER.get('trends/closest', { lat, long: lng }, function (_err, data, _response : Array<IClosestResponse>) {
    res.status(200).json(data)
  })
}
