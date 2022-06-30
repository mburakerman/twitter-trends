import React, { FC, useState, useContext, useEffect } from 'react'
import GoogleMapReact from 'google-map-react'
import MapMarker from './MapMarker'
import TrendsBox from './TrendsBox'
import { updateFavicon } from '../helpers/updateFavicon'
import { GlobalContext } from '../store/index'
import { getClosestLocation, getTrends } from '../service/index'
import { useQuery } from 'react-query'
import { dispatch } from 'use-bus'

const WOEID_WORDWIDE = 1
const GOOGLE_MAPS_API_KEY = process.env.GOOGLE_MAPS_API_KEY

const Map :FC = () => {
  const { trendsInfo, setTrendsInfo } = useContext(GlobalContext)
  const { clickedPosition, setClickedPosition } = useContext(GlobalContext)
  const { clickedPositionCountryCode, setClickedPositionCountryCode } = useContext(GlobalContext)
  const { setTrendsBoxVisibility } = useContext(GlobalContext)
  const { mapCenter, setMapCenter } = useContext(GlobalContext)
  const [loading, setLoading] = useState<boolean>(false)
  const [woeid, setWoeid] = useState<number>(WOEID_WORDWIDE)
  const [countryCode, setCountryCode] = useState<string>()

  const { refetch: refechTrends } = useQuery(['trends', woeid], () => getTrends(woeid), {
    enabled: false,
    onSuccess: (response) => {
      setLoading(false)
      setTrendsInfo(response[0])
      setTrendsBoxVisibility(true)

      if (woeid !== WOEID_WORDWIDE) {
        setClickedPositionCountryCode(countryCode)
        updateFavicon(countryCode)
      }
    }
  })
  useEffect(() => {
    refechTrends()
  }, [])

  async function getClickedAreasWoeid (e) {
    const initialClickedPosition = {
      lat: e.lat,
      lng: e.lng
    }
    setClickedPosition(initialClickedPosition)
    setMapCenter(initialClickedPosition)

    await getClosestLocation(initialClickedPosition)
      .then(function (res) {
        setWoeid(res[0].woeid)
        setCountryCode(res[0].countryCode)
        refechTrends()
        dispatch('MAP_CLICKED')
      })
  }

  return (
      <div id="map">
          <GoogleMapReact
              bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY }}
              center= {mapCenter}
              defaultZoom={1}
              options={{
                fullscreenControl: false
              }}
              onClick={(e: any) => getClickedAreasWoeid(e)}
              onChange = {() => setMapCenter}
          >
            {clickedPosition.lat && <MapMarker lat={clickedPosition.lat} lng={clickedPosition.lng} />}
          </GoogleMapReact>

          {
            trendsInfo && trendsInfo.locations &&
            <TrendsBox info={trendsInfo} flag={clickedPositionCountryCode} loading={loading} />
          }
      </div>
  )
}

export default Map
