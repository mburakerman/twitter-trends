import TWITTER from './_twitter.js'

// returns the locations that Twitter has trending topic information for
// https://developer.twitter.com/en/docs/twitter-api/v1/trends/locations-with-trending-topics/api-reference/get-trends-available
export default async (req, res) => {
  TWITTER.get('trends/available', function (_err, data, _response) {
    res.status(200).json(data)
  })
}