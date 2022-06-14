import React, { FC, useEffect, useState, useContext } from 'react'
import { GlobalContext } from '../store/index'
import { getClosestLocation } from '../helpers/getClosestLocation.js'
import { getTrends } from '../helpers/getTrends.js'
import { updateFavicon } from '../helpers/updateFavicon.js'

const WOEID_WORDWIDE = 1
const CountrySelect : FC = () => {
  const [countries, setCountries] = useState<any>()
  const { setClickedPosition } = useContext(GlobalContext)
  const { setTrendsInfo } = useContext(GlobalContext)
  const { setTrendsBoxVisibility } = useContext(GlobalContext)
  const { setClickedPositionCountryCode } = useContext(GlobalContext)

  useEffect(() => {
    const fetchData = async () => {
      const countriesRequest = await fetch('/api/countries')
      const countriesData = await countriesRequest.json()
      setCountries(countriesData)
    }

    fetchData().catch(console.error)
  }, [])

  const handleCountryChange = (e: any) => {
    let latLngArr = e.target?.value.split(',')
    latLngArr = latLngArr.map(Number)
    const clickedPos = { lat: latLngArr[0], lng: latLngArr[1] }

    getClickedAreasWoeid(clickedPos)
  }

  async function getClickedAreasWoeid (e) {
    const initialClickedPosition = {
      lat: e.lat,
      lng: e.lng
    }
    setClickedPosition(initialClickedPosition)

    await getClosestLocation(initialClickedPosition)
      .then(function (res) {
        const woeid = res[0].woeid
        const countryCode = res[0].countryCode

        fetchTrends(woeid)
        if (woeid !== WOEID_WORDWIDE) {
          setClickedPositionCountryCode(countryCode)
          updateFavicon(countryCode)
        }
      })
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
        countries && countries.map((country: any, index: number) => {
          return <option key={index} value={country.latlng}>{country?.name}</option>
        })
        }
    </select>
  )
}

export default CountrySelect
