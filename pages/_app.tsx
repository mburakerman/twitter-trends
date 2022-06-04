import '../src/styles/reset.css'
import '../src/styles/globals.css'
import '../src/styles/trends-box.css'
import '../src/styles/footer.css'
import { AppProps } from 'next/app'
import React from 'react'
import GlobalProvider from '../src/store/index'

function App ({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  )
}

export default App
