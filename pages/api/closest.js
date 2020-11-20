var Twit = require('twit')

var T = new Twit({
    consumer_key: "n03n4khbU98MYv8SK0yWuVRJN",
    consumer_secret: "r9M3Z3EdwedScKirSPF20EfPLZemmbBP3Q5bcW2FhxyDCjnO2g",
    access_token: "635507198-7V97EtPDoayZuayOi8smT4338EH398RKHLzOuRvO",
    access_token_secret: "3IFhgpZ2y1ze2WdwYTtiabxEoQENlx8IshQHvEwvRveQF",
    timeout_ms: 60 * 1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL: false,     // optional - requires SSL certificates to be valid.
})

export default async (req, res) => {
    T.get('trends/closest', { lat: 41.015137, long: 28.979530 }, function (err, data, response) {
        res.status(200).json(data);
    });
}