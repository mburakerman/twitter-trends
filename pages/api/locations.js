import TWITTER from "./_twitter.js"

export default async (req, res) => {
    TWITTER.get('trends/available', function (err, data, response) {
        res.status(200).json(data);
    });
}