var Twit = require("twit");

/*
const TWITTER = new Twit({
    consumer_key: process.env.TWITTER_API_KEY,
    consumer_secret: process.env.TWITTER_API_SECRET,
    access_token: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
    timeout_ms: 60 * 1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL: false,     // optional - requires SSL certificates to be valid.
}); */

const TWITTER = new Twit({
    consumer_key: "n03n4khbU98MYv8SK0yWuVRJN",
    consumer_secret: "r9M3Z3EdwedScKirSPF20EfPLZemmbBP3Q5bcW2FhxyDCjnO2g",
    access_token: "635507198-7V97EtPDoayZuayOi8smT4338EH398RKHLzOuRvO",
    access_token_secret: "3IFhgpZ2y1ze2WdwYTtiabxEoQENlx8IshQHvEwvRveQF",
    timeout_ms: 60 * 1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL: false,     // optional - requires SSL certificates to be valid.
});

export default TWITTER;