import '../styles/reset.css'
import '../styles/globals.css'
import '../styles/trends-box.css'
import '../styles/footer.css'
import { AppProps } from 'next/app'
import React from 'react'

function App ({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App
