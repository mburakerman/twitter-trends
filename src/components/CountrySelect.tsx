import React, { FC, useContext, useState } from 'react'
import Select from 'react-select'
import { GlobalContext } from '../store/index'
import { getTrends, getCountries, getAvailableCountries } from '../service/index'
import { updateFavicon } from '../helpers/updateFavicon'
import { useQuery } from 'react-query'
import useBus from 'use-bus'

const CountrySelect : FC = () => {
  const { setClickedPosition } = useContext(GlobalContext)
  const { setTrendsInfo } = useContext(GlobalContext)
  const { setTrendsBoxVisibility } = useContext(GlobalContext)
  const { setClickedPositionCountryCode } = useContext(GlobalContext)
  const [selectValue, setSelectValue] = useState<any>(null)

  /* A custom hook that listens to a custom event called `MAP_CLICKED` and when it is triggered, it
  sets the value of the select to null. */
  useBus(
    'MAP_CLICKED',
    () => setSelectValue(null)
  )

  const { data: countries } = useQuery('countries', getCountries)
  const { data: availableCountries } = useQuery('availableCountries', getAvailableCountries)

  const handleCountryChange = async (e: any) => {
    const selectedCountry = JSON.parse(e?.value)
    await fetchTrends(selectedCountry?.woeid)
    setSelectValue(e)
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
        value={selectValue}
      />
  )
}

export default CountrySelect
