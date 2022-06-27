import React, { FC, useContext } from 'react'
import Select from 'react-select'
import { GlobalContext } from '../store/index'
import { getTrends, getCountries, getAvailableCountries } from '../service/index'
import { updateFavicon } from '../helpers/updateFavicon'
import { useQuery } from 'react-query'

const CountrySelect : FC = () => {
  const { setClickedPosition } = useContext(GlobalContext)
  const { setTrendsInfo } = useContext(GlobalContext)
  const { setTrendsBoxVisibility } = useContext(GlobalContext)
  const { setClickedPositionCountryCode } = useContext(GlobalContext)

  const { data: countries } = useQuery('countries', getCountries)
  const { data: availableCountries } = useQuery('availableCountries', getAvailableCountries)

  const handleCountryChange = async (e: any) => {
    const selectedCountry = JSON.parse(e?.value)
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
      <Select
        placeholder={'Select a trends available country'}
        className="country-select"
        options={availableCountries}
        onChange={handleCountryChange}
      />
  )
}

export default CountrySelect
