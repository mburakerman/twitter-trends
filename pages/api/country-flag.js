export default async (req, res) => {
    const countryCode = req.body.countryCode;
    res.status(200).json({ countryFlagUrl: `https://www.countryflags.io/${countryCode}/shiny/32.png` });
}