import TWITTER from './_twitter.js'

export default async (req, res) => {
  const woeid = req.body.woeid
  TWITTER.get('trends/place', { id: woeid }, function (_err, data, _response) {
    res.status(200).json(data)
  })
}
