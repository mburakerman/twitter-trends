import create from "zustand";
import { TrendResponse } from "../../pages/api/trends";
import { LatLngPosition } from "../types/index";

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
    set((state) => ({ trendsBoxVisibility: visibility })),
  clickedPosition: null,
  setClickedPosition: (latLng: LatLngPosition) =>
    set((state) => ({ clickedPosition: latLng })),
  trendsInfo: {} as TrendResponse,
  setTrendsInfo: (trends: TrendResponse) =>
    set((state) => ({ trendsInfo: trends })),
  clickedPositionCountryCode: "",
  setClickedPositionCountryCode: (code: string) =>
    set((state) => ({ clickedPositionCountryCode: code })),
  mapCenter: {
    lat: 41.015137,
    lng: 8.97953,
  },
  setMapCenter: (center: LatLngPosition) =>
    set((state) => ({ mapCenter: center })),
}));
