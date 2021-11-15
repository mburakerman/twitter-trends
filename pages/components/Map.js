import { useState, useEffect } from 'react'
import GoogleMapReact from 'google-map-react'
import MapMarker from './MapMarker'
import TrendsBox, { useGlobalState } from './TrendsBox'

const Map = ({ center, zoom }) => {
    const [trendsInfo, setTrendsInfo] = useState({});
    const [clickedPosition, setClickedPosition] = useState({});
    const [clickedPositionCountryCode, setClickedPositionCountryCode] = useState('');
    const [loading, setLoading] = useState(false);
    const trendsBoxVisibilityState = useGlobalState();

    useEffect(() => {
        // woeid 1 is worldwide
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
                const countryCode = res[0].countryCode;
                fetchTrends(woeid);
                if (woeid !== 1) {
                    setClickedPositionCountryCode(countryCode);
                    updateFavicon(countryCode);
                }
            });
    }
    function updateFavicon(countryCode){
        function getFlagEmoji(countryCode){
            const codePoints = countryCode
            .toUpperCase()
            .split('')
            .map(char =>  127397 + char.charCodeAt());
          return String.fromCodePoint(...codePoints);
        }
        document.getElementById("favicon").href = "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>" + getFlagEmoji(countryCode) + "</text></svg>";

    }
    async function fetchTrends(woeid) {
        setLoading(true);

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
                /*data.trends.sort(function (a, b) {
                    return b.tweet_volume - a.tweet_volume;
                });*/
                setTrendsInfo(data);
                trendsBoxVisibilityState.show();
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

            {
                trendsInfo.locations &&
                <TrendsBox info={trendsInfo} flag={clickedPositionCountryCode} loading={loading} />
            }
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

export default Map;