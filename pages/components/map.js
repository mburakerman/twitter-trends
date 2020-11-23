import { useState, useEffect } from 'react'
import GoogleMapReact from 'google-map-react'
import MapMarker from './MapMarker'
import TrendsBox from './TrendsBox'
import TrendsBoxLoader from './TrendsBoxLoader'


const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState({});
    const [trendsInfo, setTrendsInfo] = useState({});
    const [clickedPosition, setClickedPosition] = useState({});
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        // woeid 1 is wordlwide
        fetchTrends("1");
    }, []);

    async function getClickedAreasWoeid(e) {
        var clickedPosition = {
            lat: e.lat,
            lng: e.lng
        }
        setClickedPosition(clickedPosition);

        await fetch("/api/closest", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(clickedPosition)
        })
            .then(res => res.json())
            .then(function (res) {
                const woeid = res[0].woeid;
                fetchTrends(woeid);
            })
    }
    async function fetchTrends(woeid) {
        setLoading(true)
        await fetch("/api/trends", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                woeid: woeid
            })
        })
            .then(res => res.json())
            .then(function (response) {
                setLoading(false);
                var data = response[0];
                // sort data based on tweet volume
                data.trends.sort(function (a, b) {
                    return b.tweet_volume - a.tweet_volume;
                });
                setTrendsInfo(data);
            });
    }

    return (
        <div id="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBKcbWgVYRSdCv0PCn6dCOvgdV7MjcE-R0' }}
                defaultCenter={center}
                defaultZoom={zoom}
                options={{
                    fullscreenControl: false,
                }}
                onClick={(e) => getClickedAreasWoeid(e)}
            >
                {clickedPosition.lat && <MapMarker lat={clickedPosition.lat} lng={clickedPosition.lng} />}
            </GoogleMapReact>

            {trendsInfo && <TrendsBox info={trendsInfo} />}
            {loading && <TrendsBoxLoader />}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 41.015137,
        lng: 8.979530
    },
    zoom: 1
}

export default Map