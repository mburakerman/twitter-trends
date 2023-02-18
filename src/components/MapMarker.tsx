import React from "react";
import { LatLngPosition } from "../types/index";

const MapMarker = ({ lat, lng }: LatLngPosition) => {
  return (
    <div className="map-marker">
      <img src="/puff.svg" loading="lazy" />
    </div>
  );
};

export default MapMarker;
