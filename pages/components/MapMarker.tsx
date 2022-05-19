interface MapMarkerProps {
    lat?: number;
    lng?: number;   
}

const MapMarker = ({lat, lng}: MapMarkerProps) : JSX.Element => {
   return  <div className="map-marker"><img src="/puff.svg" loading="lazy" /></div>
}

export default MapMarker;