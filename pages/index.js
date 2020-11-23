import { useState, useEffect } from 'react'

import Head from 'next/head'
import Map from "./components/map.js"

export default function Home() {
  const [locations, setLocations] = useState([]);
  const [countryTrends, setCountryTrends] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetchLocations() {
      await fetch("api/locations")
        .then(res => res.json())
        .then(r => {
          setLoading(false);
          setLocations(r);
          console.log(r);
          var locations = r;
          /*for (let i = 0; i < locations.length; i++) {
            let woeid = locations[i].woeid;
            if (woeid !== 1) {
              fetchTrends(woeid);
            }
          } */
        })
    }

    async function fetchTrends(woeid) {
      setLoading(true)
      await fetch("/api/trends", {
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          woeid: woeid
        })
      })
        .then(res => res.json())
        .then(function (response) {
          setLoading(false);
          var trends = response[0];
          setCountryTrends(trends);
        });
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Twitter Trends</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1>Twitter Trends</h1>
      </header>
      <main>
        <Map />
        {/*
          {locations && locations.map(function (item, index) {
          if (!item.woeid) return;
          if (item.woeid == 1) return;
          return <p>{item.name}</p>
        })}
      */}
      </main>
    </div>
  )
}
