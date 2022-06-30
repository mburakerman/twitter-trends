import { NextApiRequest, NextApiResponse } from 'next'
import TWITTER from './_twitter'

export default async (req: NextApiRequest, res:NextApiResponse) => {
  const woeid = req.body.woeid
  TWITTER.get('trends/place', { id: woeid }, function (_err, data, _response) {
    res.status(200).json(data)
  })
}
