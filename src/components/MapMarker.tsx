import React, { FC } from 'react'
import { ILatLngPosition } from '../store/index'

const MapMarker : FC<ILatLngPosition> = () => {
  return <div className="map-marker"><img src="/puff.svg" loading="lazy" /></div>
}

export default MapMarker
