import { NextApiRequest, NextApiResponse } from 'next'
import countries from '../../public/countries.json'

export default async (req:NextApiRequest, res:NextApiResponse) => {
  res.status(200).json(countries)
}
