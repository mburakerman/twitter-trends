import React, { useState } from "react";
import Select from "react-select";
import { useQuery } from "react-query";
import useBus from "use-bus";
import {
  getTrends,
  getCountries,
  getAvailableCountries,
} from "../service/index";
import { updateFavicon } from "../helpers/updateFavicon";
import { CountryResponse } from "../../pages/api/countries";
import { useGlobalStore } from "../store";
import {
  AvailableLocationResponse,
  AvailableLocation,
} from "../../pages/api/available";
import { LatLngPosition } from "../types/index";

const WOEID_WORDWIDE = 1;

const CountrySelect = () => {
  const [selectValue, setSelectValue] = useState<any>(null);
  const [woeid, setWoeid] = useState<number>(WOEID_WORDWIDE);

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

  const { data: countries } = useQuery("countries", getCountries, {
    enabled: false,
  });
  const { data: availableCountries } = useQuery(
    "availableCountries",
    getAvailableCountries,
    {
      enabled: false,
    }
  );

  useQuery(["trends", woeid], () => getTrends(woeid), {
    enabled: !!trendsInfo,
    onSuccess: (response) => {
      setTrendsInfo(response[0]);
      setTrendsBoxVisibility(true);
      if (woeid === WOEID_WORDWIDE) {
        updateFavicon("worldwide");
        setClickedPositionCountryCode("worldwide");
      }
    },
  });

  const handleCountryChange = async (item: AvailableLocationResponse) => {
    const selectedCountry = item?.value;
    setWoeid(selectedCountry?.woeid);
    updateFavicon(selectedCountry?.countryCode);
    setClickedPositionCountryCode(selectedCountry?.countryCode);
    updateMapMarker(selectedCountry);
    setSelectValue(item);
  };

  const updateMapMarker = (selectedCountry: AvailableLocation) => {
    const selectedCountryLatLng = countries?.find(
      (item: CountryResponse) =>
        item?.alpha2Code === selectedCountry?.countryCode
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
