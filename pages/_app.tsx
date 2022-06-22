import '../src/styles/reset.css'
import '../src/styles/globals.css'
import '../src/styles/trends-box.css'
import '../src/styles/footer.css'
import { AppProps } from 'next/app'
import React from 'react'
import GlobalProvider from '../src/store/index'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'

function App ({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <GlobalProvider>
          <Component {...pageProps} />
        </GlobalProvider>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default App
