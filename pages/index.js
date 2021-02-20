import Head from 'next/head'
import Map from "./components/Map"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Twitter Trends</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" id="favicon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <Map />
    </div>
  )
}
