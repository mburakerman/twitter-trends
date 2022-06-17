import React, { FC, useEffect, useState, useContext } from 'react'
import { GlobalContext } from '../store/index'
import { getTrends } from '../service/index'
import { updateFavicon } from '../helpers/updateFavicon'

interface IAvailableLocationItem {
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
interface IAvailableLocations extends Array<IAvailableLocationItem>{}

const CountrySelect : FC = () => {
  const [countries, setCountries] = useState<any>()
  const [availableLocations, setAvailableLocations] = useState<IAvailableLocations>([])
  const { setClickedPosition } = useContext(GlobalContext)
  const { setTrendsInfo } = useContext(GlobalContext)
  const { setTrendsBoxVisibility } = useContext(GlobalContext)
  const { setClickedPositionCountryCode } = useContext(GlobalContext)

  useEffect(() => {
    fetchCountries()
    fetchAvailableLocations()
  }, [])

  async function fetchCountries () {
    try {
      const countriesRequest = await fetch('/api/countries')
      const countriesData = await countriesRequest.json()
      setCountries(countriesData)
    } catch (error) {
      console.error(error)
    }
  }

  async function fetchAvailableLocations () {
    const availableRequest = await fetch('/api/available')
    const availableData = await availableRequest.json()
    // if parentid = 1, it's a country
    const availableDataCountry = availableData.filter((item : IAvailableLocationItem) => item?.parentid === 1)
    setAvailableLocations(availableDataCountry)
  }

  const handleCountryChange = async (e: any) => {
    const selectedCountry = JSON.parse(e?.target.value)
    await fetchTrends(selectedCountry?.woeid)
    updateFavicon(selectedCountry?.countryCode)
    setClickedPositionCountryCode(selectedCountry?.countryCode)
    updateMapMarker(selectedCountry)
  }
  const updateMapMarker = (selectedCountry : any) => {
    const selectedCountryLatLng = countries.find(item => item?.alpha2Code === selectedCountry?.countryCode)?.latlng
    const selectedCountryLatLngObj = { lat: selectedCountryLatLng[0], lng: selectedCountryLatLng[1] }
    setClickedPosition(selectedCountryLatLngObj)
  }

  async function fetchTrends (woeid: number) {
    await getTrends(woeid)
      .then(function (response) {
        const data = response[0]
        setTrendsInfo(data)
        setTrendsBoxVisibility(true)
      })
  }

  return (
      <select className="country-select" onChange={handleCountryChange}>
        {
          availableLocations && availableLocations?.map((item: IAvailableLocationItem, index: number) => {
            return <option key={index} value={JSON.stringify(item)}>{item?.name}</option>
          })
        }
      </select>
  )
}

export default CountrySelect
