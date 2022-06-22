import React, { FC, useContext } from 'react'
import { GlobalContext } from '../store/index'
import { getTrends, getCountries, getAvailableCountries, IAvailableCountries, IAvailableCountriesItem } from '../service/index'
import { updateFavicon } from '../helpers/updateFavicon'
import { useQuery } from 'react-query'

const CountrySelect : FC = () => {
  const { setClickedPosition } = useContext(GlobalContext)
  const { setTrendsInfo } = useContext(GlobalContext)
  const { setTrendsBoxVisibility } = useContext(GlobalContext)
  const { setClickedPositionCountryCode } = useContext(GlobalContext)

  const { data: countries } = useQuery('countries', getCountries)
  const { data: availableCountries } = useQuery<IAvailableCountries>('availableCountries', getAvailableCountries)

  const handleCountryChange = async (e: any) => {
    const selectedCountry = JSON.parse(e?.target.value)
    await fetchTrends(selectedCountry?.woeid)
    updateFavicon(selectedCountry?.countryCode)
    setClickedPositionCountryCode(selectedCountry?.countryCode)
    updateMapMarker(selectedCountry)
  }
  const updateMapMarker = (selectedCountry : any) => {
    const selectedCountryLatLng = countries?.find(item => item?.alpha2Code === selectedCountry?.countryCode)?.latlng
    const selectedCountryLatLngObj = { lat: selectedCountryLatLng?.[0], lng: selectedCountryLatLng?.[1] }
    setClickedPosition(selectedCountryLatLngObj)
  }

  async function fetchTrends (woeid: number) {
    await getTrends(woeid)
      .then(function (response) {
        const res = response[0]
        setTrendsInfo(res)
        setTrendsBoxVisibility(true)
      })
  }

  return (
      <select className="country-select" onChange={handleCountryChange}>
        {
          availableCountries && availableCountries?.map((item: IAvailableCountriesItem, index: number) => {
            return <option key={index} value={JSON.stringify(item)}>{item?.name}</option>
          })
        }
      </select>
  )
}

export default CountrySelect
