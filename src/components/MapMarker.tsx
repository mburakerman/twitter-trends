import React, { FC } from 'react'

interface MapMarkerProps {
  lat?: number;
  lng?: number;
}

const MapMarker : FC<MapMarkerProps> = () => {
  return <div className="map-marker"><img src="/puff.svg" loading="lazy" /></div>
}

export default MapMarker
