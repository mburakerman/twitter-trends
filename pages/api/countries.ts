import { NextApiRequest, NextApiResponse } from 'next'
import countries from '../../public/countries.json'

export interface ICountriesResponse {
  name: string
  latlng: Array<Number>,
  alpha2Code: string
}

export default async (req:NextApiRequest, res:NextApiResponse) => {
  const response = countries.map(c => {
    return {
      name: c.name,
      latlng: c.latlng,
      alpha2Code: c.alpha2Code
    } as ICountriesResponse
  })
  res.status(200).json(response)
}
