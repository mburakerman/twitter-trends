import { useState, useEffect } from 'react'
import GoogleMapReact from 'google-map-react'
import MapMarker from './MapMarker'

var turkey = {
    lat: 41.015137,
    lng: 28.979530
}
const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null)

    const markers = eventData.map(ev => {
        var lat = parseFloat(ev.lat);
        var lng = parseFloat(ev.long)
        return <MapMarker lat={turkey.lat} lng={turkey.lng} />
    })

    function handleClick(e) {
        var lat = e.lat;
        var lng = e.lng;
        fetch("/api/closest", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                lat: lat,
                lng: lng
            })
        })
            .then(res => res.json())
            .then(function (res) {
                console.log(res)
            })
    }

    return (
        <div id="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyBKcbWgVYRSdCv0PCn6dCOvgdV7MjcE-R0' }}
                defaultCenter={center}
                defaultZoom={zoom}
                onClick={(e) => handleClick(e)}
            >
                {markers}
            </GoogleMapReact>
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