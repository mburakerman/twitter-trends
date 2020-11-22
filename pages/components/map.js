import { useState, useEffect } from 'react'
import GoogleMapReact from 'google-map-react'
import MapMarker from './MapMarker'
import TrendsBox from './TrendsBox'
import TrendsBoxLoader from './TrendsBoxLoader'

var turkey = {
    lat: 41.015137,
    lng: 28.979530
}
const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState({});
    const [trendsInfo, setTrendsInfo] = useState({});
    const [loading, setLoading] = useState(false)

    /*const markers = eventData.map(item => {
        var lat = parseFloat(item.lat);
        var lng = parseFloat(item.long);
        return <MapMarker lat={turkey.lat} lng={turkey.lng} onClick={() => setLocationInfo(item)} />
    }) */

    useEffect(() => {
        // woeid 1 is wordlwide
        fetchTrends("1");
    }, [])


    async function getClickedAreasWoeid(e) {
        var clickedPosition = {
            lat: e.lat,
            lng: e.lng
        }

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
                var trends = response[0];
                setTrendsInfo(trends);
            });
    }

    return (
        <div id="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBKcbWgVYRSdCv0PCn6dCOvgdV7MjcE-R0' }}
                defaultCenter={center}
                defaultZoom={zoom}
                onClick={(e) => getClickedAreasWoeid(e)}
            >
            </GoogleMapReact>
            {trendsInfo && <TrendsBox info={trendsInfo} />}
            {loading && <TrendsBoxLoader />}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 1
}

export default Map