import TWITTER from "./_twitter.js"

export default async (req, res) => {
    const lat = req.body.lat;
    const lng = req.body.lng;
    TWITTER.get('trends/closest', { lat: lat, long: lng }, function (err, data, response) {
        res.status(200).json(data);
    });
}