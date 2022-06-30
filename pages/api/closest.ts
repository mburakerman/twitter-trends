import { NextApiRequest, NextApiResponse } from 'next'
import TWITTER from './_twitter'

export default async (req:NextApiRequest, res:NextApiResponse) => {
  const lat = req.body.lat
  const lng = req.body.lng
  TWITTER.get('trends/closest', { lat, long: lng }, function (_err, data, _response) {
    res.status(200).json(data)
  })
}
