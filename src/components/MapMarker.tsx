import React, { FC } from 'react'

interface MapMarkerProps {
    lat?: number;
    lng?: number;
}

const MapMarker : FC<MapMarkerProps> = ({ lat, lng }) => {
  return <div className="map-marker" {...lat} {...lng}><img src="/puff.svg" loading="lazy" /></div>
}

export default MapMarker
