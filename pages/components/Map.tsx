import React, { FC, useState, useEffect } from 'react'
import GoogleMapReact from 'google-map-react'
import MapMarker from './MapMarker'
import TrendsBox, { useGlobalState } from './TrendsBox'
import { updateFavicon } from '../helpers/updateFavicon.js'

const WOEID_WORDWIDE = 1
interface TrendsInterface {
    locations?: Array<any>;
    trends?: Array<any>;
}
interface ClickedPositionInterface {
    lat?: number;
    lng?: number;
}
interface MapProps {
    center: ClickedPositionInterface;
    zoom: number;
}

const Map :FC<MapProps> = ({ center, zoom }) => {
  const [trendsInfo, setTrendsInfo] = useState <TrendsInterface>({})
  const [clickedPosition, setClickedPosition] = useState<ClickedPositionInterface>({})
  const [clickedPositionCountryCode, setClickedPositionCountryCode] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const trendsBoxVisibilityState = useGlobalState()

  useEffect(() => {
    fetchTrends(WOEID_WORDWIDE)
  }, [])

  async function getClickedAreasWoeid (e) {
    const clickedPosition = {
      lat: e.lat,
      lng: e.lng
    }
    setClickedPosition(clickedPosition)

    await fetch('/api/closest', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(clickedPosition)
    })
      .then(res => res.json())
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

    await fetch('/api/trends', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        woeid
      })
    })
      .then(res => res.json())
      .then(function (response) {
        setLoading(false)
        const data = response[0]
        // sort data based on tweet volume
        /* data.trends.sort(function (a, b) {
                    return b.tweet_volume - a.tweet_volume;
                }); */
        setTrendsInfo(data)
        trendsBoxVisibilityState.show()
      })
  }

  return (
        <div id="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBKcbWgVYRSdCv0PCn6dCOvgdV7MjcE-R0' }}
                defaultCenter={center}
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
