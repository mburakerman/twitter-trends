import { useState, useEffect } from 'react'

import Head from 'next/head'
import Map from "./components/map.js"

export default function Home() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  return (
    <div>
      <Head>
        <title>Twitter Trends</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Map />
      </main>
    </div>
  )
}
