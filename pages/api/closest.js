import TWITTER from './_twitter.ts'

export default async (req, res) => {
  const lat = req.body.lat
  const lng = req.body.lng
  TWITTER.get('trends/closest', { lat, long: lng }, function (_err, data, _response) {
    res.status(200).json(data)
  })
}
