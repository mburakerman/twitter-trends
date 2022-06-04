import '../styles/reset.css'
import '../styles/globals.css'
import '../styles/trends-box.css'
import '../styles/footer.css'
import { AppProps } from 'next/app'
import React from 'react'
import GlobalProvider from '../pages/store/index'

function App ({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  )
}

export default App
