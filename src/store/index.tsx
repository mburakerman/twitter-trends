import React, { createContext, FC, useState, useMemo } from 'react'

export interface IClickedPosition {
  lat?: number;
  lng?: number;
}
interface ITrendsInfo {
  locations?: Array<any>;
  trends?: Array<any>;
}
interface IMapCenter {
  lat: number;
  lng:number
}

interface IGlobalContext {
  trendsBoxVisibility: boolean | null,
  setTrendsBoxVisibility: (arg: boolean | null) => void,
  clickedPosition: IClickedPosition,
  setClickedPosition: (arg: IClickedPosition) => void,
  trendsInfo: any,
  setTrendsInfo : (arg:ITrendsInfo) => void,
  clickedPositionCountryCode: string,
  setClickedPositionCountryCode: (arg: string) => void,
  mapCenter :IMapCenter
  setMapCenter : (arg:any) => void
}
export const GlobalContext = createContext<IGlobalContext>(undefined)

interface IGlobalProvider {
  children?: React.ReactElement,
  value?: IGlobalContext
}
const GlobalProvider : FC<IGlobalProvider> = ({ children }) => {
  const [trendsBoxVisibility, setTrendsBoxVisibility] = useState<IGlobalContext['trendsBoxVisibility']>(false)
  const trendsBoxVisibilityValue = useMemo(
    () => ({ trendsBoxVisibility, setTrendsBoxVisibility }),
    [trendsBoxVisibility]
  )

  const [clickedPosition, setClickedPosition] = useState<IGlobalContext['clickedPosition']>({})
  const clickedPositionValue = useMemo(
    () => ({ clickedPosition, setClickedPosition }),
    [clickedPosition]
  )

  const [trendsInfo, setTrendsInfo] = useState<IGlobalContext['trendsInfo']>({})
  const trendsInfoValue = useMemo(
    () => ({ trendsInfo, setTrendsInfo }),
    [trendsInfo]
  )

  const [clickedPositionCountryCode, setClickedPositionCountryCode] = useState<IGlobalContext['clickedPositionCountryCode']>('')
  const clickedPositionCountryCodeValue = useMemo(
    () => ({ clickedPositionCountryCode, setClickedPositionCountryCode }),
    [clickedPositionCountryCode]
  )

  const [mapCenter, setMapCenter] = useState<IGlobalContext['mapCenter']>({
    lat: 41.015137,
    lng: 8.979530
  })
  const mapCenterValue = useMemo(
    () => ({ mapCenter, setMapCenter }),
    [mapCenter]
  )

  return (
    <GlobalContext.Provider
    value={{
      ...trendsBoxVisibilityValue,
      ...clickedPositionValue,
      ...trendsInfoValue,
      ...clickedPositionCountryCodeValue,
      ...mapCenterValue
    }}
      >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider
