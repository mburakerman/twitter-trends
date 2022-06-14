import React, { createContext, FC, useState, useMemo } from 'react'

interface IClickedPosition {
  lat?: number;
  lng?: number;
}
interface ITrendsInfo {
  locations?: Array<any>;
  trends?: Array<any>;
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

  return (
    <GlobalContext.Provider value={{ ...trendsBoxVisibilityValue, ...clickedPositionValue, ...trendsInfoValue, ...clickedPositionCountryCodeValue }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider
