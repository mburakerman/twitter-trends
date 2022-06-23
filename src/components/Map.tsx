import React, { FC, useState, useContext } from 'react'
import GoogleMapReact from 'google-map-react'
import MapMarker from './MapMarker'
import TrendsBox from './TrendsBox'
import { updateFavicon } from '../helpers/updateFavicon'
import { GlobalContext, IClickedPosition } from '../store/index'
import { getClosestLocation, getTrends } from '../service/index'
import { useQuery } from 'react-query'

const WOEID_WORDWIDE = 1
interface MapProps {
  center: IClickedPosition;
  zoom: number;
}

const Map :FC<MapProps> = ({ center, zoom }) => {
  const { trendsInfo, setTrendsInfo } = useContext(GlobalContext)
  const { clickedPosition, setClickedPosition } = useContext(GlobalContext)
  const { clickedPositionCountryCode, setClickedPositionCountryCode } = useContext(GlobalContext)
  const { setTrendsBoxVisibility } = useContext(GlobalContext)
  const [loading, setLoading] = useState<boolean>(false)
  const [woeid, setWoeid] = useState<number>(WOEID_WORDWIDE)
  const [countryCode, setCountryCode] = useState<string>()

  const { refetch: refechTrends } = useQuery(['trends', woeid], () => getTrends(woeid), {
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

  async function getClickedAreasWoeid (e) {
    const initialClickedPosition = {
      lat: e.lat,
      lng: e.lng
    }
    setClickedPosition(initialClickedPosition)

    await getClosestLocation(initialClickedPosition)
      .then(function (res) {
        setWoeid(res[0].woeid)
        setCountryCode(res[0].countryCode)
        refechTrends()
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
