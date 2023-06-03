import React from "react";

import { LatLngPosition } from "../../../pages/api/closest";
import styles from "./mapMarker.module.css";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MapMarker = ({ lat, lng }: LatLngPosition) => {
  return (
    <div className={styles.container}>
      <img src="/puff.svg" loading="lazy" />
    </div>
  );
};

export default MapMarker;
