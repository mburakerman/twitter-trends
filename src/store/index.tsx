import React, { createContext, FC, useState, useMemo } from 'react'

interface IGlobalContext {
  trendsBoxVisibility: boolean | null,
  setTrendsBoxVisibility: (arg: boolean | null) => void
}
export const GlobalContext = createContext<IGlobalContext>(undefined)

interface IGlobalProvider {
  children?: React.ReactElement,
  value?: IGlobalContext
}
const GlobalProvider : FC<IGlobalProvider> = ({ children }) => {
  const [trendsBoxVisibility, setTrendsBoxVisibility] = useState<IGlobalContext['trendsBoxVisibility']>(false)
  const value = useMemo(
    () => ({ trendsBoxVisibility, setTrendsBoxVisibility }),
    [trendsBoxVisibility]
  )

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider
