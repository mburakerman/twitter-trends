import React, { useState } from "react";
import Select from "react-select";
import useBus from "use-bus";
import { updateFavicon } from "../helpers/updateFavicon";
import { useGlobalStore } from "../store";
import {
  AvailableLocationResponse,
  AvailableLocation,
} from "../../pages/api/available";
import { LatLngPosition } from "../../pages/api/closest";
import { WOEID_WORLDWIDE } from "../../pages/index";
import useCountries from "../hooks/useCountries";
import useAvailableCountries from "../hooks/useAvailableCountries";
import useTrends from "../hooks/useTrends";

type SelectedCountryType = AvailableLocationResponse | null;

const CountrySelect = () => {
  const [selectValue, setSelectValue] = useState<SelectedCountryType>(null);
  const [woeid, setWoeid] = useState(WOEID_WORLDWIDE);

  const trendsInfo = useGlobalStore((state) => state.trendsInfo);
  const setMapCenter = useGlobalStore((state) => state.setMapCenter);
  const setClickedPositionCountryCode = useGlobalStore(
    (state) => state.setClickedPositionCountryCode
  );
  const setTrendsInfo = useGlobalStore((state) => state.setTrendsInfo);
  const setClickedPosition = useGlobalStore(
    (state) => state.setClickedPosition
  );
  const setTrendsBoxVisibility = useGlobalStore(
    (state) => state.setTrendsBoxVisibility
  );

  /* A custom hook that listens to a custom event called `MAP_CLICKED` and when it is triggered, it
  sets the value of the select to null. */
  useBus("MAP_CLICKED", () => setSelectValue(null));

  const { data: countries } = useCountries();
  const { data: availableCountries } = useAvailableCountries();

  useTrends(woeid, !!trendsInfo, (response) => {
    setTrendsInfo(response[0]);
    setTrendsBoxVisibility(true);
    if (woeid === WOEID_WORLDWIDE) {
      updateFavicon("worldwide");
      setClickedPositionCountryCode("worldwide");
    }
  });

  const handleCountryChange = async (item: SelectedCountryType) => {
    if (!item) return;

    const selectedCountry = item?.value;
    const {
      woeid: selectedCountryWoeid,
      countryCode: selectedCountryCountryCode,
    } = selectedCountry;

    setWoeid(selectedCountryWoeid);
    updateFavicon(selectedCountryCountryCode);
    setClickedPositionCountryCode(selectedCountryCountryCode);
    updateMapMarker(selectedCountry);
    setSelectValue(item);
  };

  const updateMapMarker = (selectedCountry: AvailableLocation) => {
    const selectedCountryLatLng = countries?.find(
      ({ alpha2Code }) => alpha2Code === selectedCountry?.countryCode
    )?.latlng;

    const selectedCountryLatLngObj: LatLngPosition = {
      lat: selectedCountryLatLng?.[0] || 0,
      lng: selectedCountryLatLng?.[1] || 0,
    };
    setClickedPosition(selectedCountryLatLngObj);
    setMapCenter(selectedCountryLatLngObj);
  };

  return (
    <Select
      placeholder={"Select a trends available country"}
      className="country-select"
      options={availableCountries}
      onChange={handleCountryChange}
      value={selectValue}
    />
  );
};

export default CountrySelect;
