import countries from "./countries-api.js"

export default async (req, res) => {
    res.status(200).json(countries);
}