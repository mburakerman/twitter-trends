import React, { FC, useState, useEffect, useContext } from 'react'
import GoogleMapReact from 'google-map-react'
import MapMarker from './MapMarker'
import TrendsBox from './TrendsBox'
import { updateFavicon } from '../helpers/updateFavicon'
import { GlobalContext, IClickedPosition } from '../store/index'
import { getClosestLocation, getTrends } from '../service/index'

const WOEID_WORDWIDE = 1
interface MapProps {
    center: IClickedPosition;
    zoom: number;
}

const Map :FC<MapProps> = ({ center, zoom }) => {
  const { trendsInfo, setTrendsInfo } = useContext(GlobalContext)
  const { clickedPosition, setClickedPosition } = useContext(GlobalContext)
  const { clickedPositionCountryCode, setClickedPositionCountryCode } = useContext(GlobalContext)
  const [loading, setLoading] = useState<boolean>(false)
  const { setTrendsBoxVisibility } = useContext(GlobalContext)

  useEffect(() => {
    fetchTrends(WOEID_WORDWIDE)
  }, [])

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
    setLoading(true)

    await getTrends(woeid)
      .then(function (response) {
        setLoading(false)
        const data = response[0]
        setTrendsInfo(data)
        setTrendsBoxVisibility(true)
      })
  }

  return (
        <div id="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBKcbWgVYRSdCv0PCn6dCOvgdV7MjcE-R0' }}
                defaultCenter={ center }
                defaultZoom={zoom}
                options={{
                  fullscreenControl: false
                }}
                onClick={(e: any) => getClickedAreasWoeid(e)}
            >
                {clickedPosition.lat && <MapMarker lat={clickedPosition.lat} lng={clickedPosition.lng} />}
            </GoogleMapReact>

            {
                trendsInfo.locations &&
                <TrendsBox info={trendsInfo} flag={clickedPositionCountryCode} loading={loading} />
            }
        </div>
  )
}

export default Map
