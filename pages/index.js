import { useState, useEffect } from 'react'

import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Map from "./components/map.js"

export default function Home() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const res = await fetch('/api/countries')
      const countries = await res.json()

      setEventData(countries)
      setLoading(false)
    }

    fetchEvents()
  }, [])


  return (
    <div className={styles.container}>
      <Head>
        <title>Twitter Trends</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {!loading ? <Map eventData={eventData} /> : "<h1>loading</h1>"}
      </main>


    </div>
  )
}
