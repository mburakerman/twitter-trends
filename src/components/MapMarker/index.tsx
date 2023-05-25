import React from "react";
import styles from "./mapMarker.module.css";
import { LatLngPosition } from "../../../pages/api/closest";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MapMarker = ({ lat, lng }: LatLngPosition) => {
  return (
    <div className={styles.container}>
      <img src="/puff.svg" loading="lazy" />
    </div>
  );
};

export default MapMarker;
