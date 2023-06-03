import GoogleMapReact from "google-map-react";
import React, { useEffect, useState } from "react";
import { dispatch } from "use-bus";

import { LatLngPosition } from "../../../pages/api/closest";
import { WOEID_WORLDWIDE } from "../../../pages/index";
import { updateFavicon } from "../../helpers/updateFavicon";
import useTrends from "../../hooks/useTrends";
import { getClosestLocation } from "../../service/index";
import { useGlobalStore } from "../../store";
import MapMarker from "../MapMarker/index";
import styles from "./map.module.css";

const Map = () => {
  const [woeid, setWoeid] = useState<number>(WOEID_WORLDWIDE);
  const [countryCode, setCountryCode] = useState<string>();
  const [isRateLimitErrorExist, setIsRateLimitErrorExist] =
    useState<boolean>(false);

  const trendsInfo = useGlobalStore((state) => state.trendsInfo);
  const mapCenter = useGlobalStore((state) => state.mapCenter);
  const setMapCenter = useGlobalStore((state) => state.setMapCenter);
  const setClickedPositionCountryCode = useGlobalStore(
    (state) => state.setClickedPositionCountryCode
  );
  const setTrendsInfo = useGlobalStore((state) => state.setTrendsInfo);
  const setTrendsBoxVisibility = useGlobalStore(
    (state) => state.setTrendsBoxVisibility
  );
  const clickedPosition = useGlobalStore((state) => state.clickedPosition);
  const setClickedPosition = useGlobalStore(
    (state) => state.setClickedPosition
  );

  const { refetch: refechTrends } = useTrends(
    woeid,
    !!trendsInfo,
    (response) => {
      if ("errors" in response) {
        setIsRateLimitErrorExist(true);
        return false;
      } else {
        setIsRateLimitErrorExist(false);
      }

      setTrendsInfo(response[0]);
      setTrendsBoxVisibility(true);
      setClickedPositionCountryCode(countryCode || "worldwide");
      updateFavicon(countryCode || "worldwide");
    }
  );

  useEffect(() => {
    refechTrends();
  }, [refechTrends]);

  async function getClickedAreasWoeid(event: GoogleMapReact.ClickEventValue) {
    const initialClickedPosition: LatLngPosition = {
      lat: event.lat,
      lng: event.lng,
    };
    setClickedPosition(initialClickedPosition);
    setMapCenter(initialClickedPosition);

    const closestLocation = (
      await getClosestLocation(initialClickedPosition)
    )[0];
    setWoeid(closestLocation.woeid);
    setCountryCode(closestLocation.countryCode);
    dispatch("MAP_CLICKED");
  }

  if (isRateLimitErrorExist) {
    throw new Error(
      "Rate limit exceeded. For more info visit https://developer.twitter.com/en/docs/twitter-api/rate-limits"
    );
  }

  return (
    <div id={styles.map}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.GOOGLE_MAPS_API_KEY || "",
        }}
        center={mapCenter}
        defaultZoom={1}
        options={{
          fullscreenControl: false,
        }}
        onClick={(event) => getClickedAreasWoeid(event)}
        onChange={() => setMapCenter}
      >
        {clickedPosition?.lat && (
          <MapMarker lat={clickedPosition.lat} lng={clickedPosition.lng} />
        )}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
