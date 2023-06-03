import { create } from "zustand";

import { LatLngPosition } from "../../pages/api/closest";
import { TrendResponse } from "../../pages/api/trends";

type GlobalStore = {
  trendsBoxVisibility: boolean;
  setTrendsBoxVisibility: (trendsBoxVisibility: boolean) => void;
  clickedPosition: LatLngPosition | null;
  setClickedPosition: (latLng: LatLngPosition) => void;
  trendsInfo: TrendResponse;
  setTrendsInfo: (trends: TrendResponse) => void;
  clickedPositionCountryCode: string;
  setClickedPositionCountryCode: (arg: string) => void;
  mapCenter: LatLngPosition;
  setMapCenter: (arg: LatLngPosition) => void;
};

export const useGlobalStore = create<GlobalStore>()((set) => ({
  trendsBoxVisibility: false,
  setTrendsBoxVisibility: (visibility) =>
    set(() => ({ trendsBoxVisibility: visibility })),
  clickedPosition: null,
  setClickedPosition: (latLng) => set(() => ({ clickedPosition: latLng })),
  trendsInfo: {} as TrendResponse,
  setTrendsInfo: (trends) => set(() => ({ trendsInfo: trends })),
  clickedPositionCountryCode: "",
  setClickedPositionCountryCode: (code) =>
    set(() => ({ clickedPositionCountryCode: code })),
  mapCenter: {
    lat: 41.015137,
    lng: 8.97953,
  },
  setMapCenter: (center) => set(() => ({ mapCenter: center })),
}));
