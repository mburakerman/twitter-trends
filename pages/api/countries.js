// import countries from '../../public/countries.json'
/* export default async (req, res) => {
  res.status(200).json(countries)
} */

export default async (req, res) => {
  await fetch('https://restcountries.com/v2/all', {
    method: 'get',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then((response) => {
      res.status(200).json(response)
    })
}
