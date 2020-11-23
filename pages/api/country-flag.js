async function fetchFlag(countryCode) {
    await fetch(`https://www.countryflags.io/${countryCode}/shiny/32.png`)
        .then(res => res.json())
        .then(r => {
            return r;
        })
}
export default async (req, res) => {
    const countryCode = req.body.countryCode;
    var countryFlagUrl = fetchFlag(countryCode);
    T.get('trends/country-flag', function (err, data, response) {
        res.status(200).json({ countryFlagUrl: countryFlagUrl });
    });
}