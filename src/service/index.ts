import { IClickedPosition } from '../store/index'

const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://twitter-trends.vercel.app'

export function getClosestLocation (clickedPosition : IClickedPosition) {
  return new Promise((resolve, reject) => {
    fetch(BASE_URL + '/api/closest', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(clickedPosition)
    })
      .then((res) => {
        resolve(res.json())
      })
      .catch((err: any) => {
        reject(err)
      })
  })
}

export function getTrends (woeid : number) {
  return new Promise((resolve, reject) => {
    fetch(BASE_URL + '/api/trends', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        woeid
      })
    })
      .then(res => {
        resolve(res.json())
      })
      .catch((err: any) => {
        reject(err)
      })
  })
}

export const getCountries = async () => {
  const res = await fetch(BASE_URL + '/api/countries')
  return await res.json()
}

export interface IAvailableCountriesItem {
  name: string;
  placeType?: {
    code: number;
    name: string;
  };
  url?: string;
  parentid?: number;
  country?: string;
  woeid?: number;
  countryCode?: any;
}
export interface IAvailableCountries extends Array<IAvailableCountriesItem>{}

export const getAvailableCountries = async () => {
  const res = await fetch(BASE_URL + '/api/available')
  const data = await res.json()
  // if parentid = 1, it's a country
  return data?.filter((item : IAvailableCountriesItem) => item?.parentid === 1) as IAvailableCountries
}
