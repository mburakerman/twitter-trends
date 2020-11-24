import Head from 'next/head'
import Map from "./components/Map.js"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Twitter Trends</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <header>
        <h1> Twitter Trends</h1>
      </header>

      <main>
        <Map />
      </main>

      <footer>
        <ul></ul>
        <p>Made with <a href="https://developer.twitter.com/en/docs/twitter-api" target="_blank" rel="noopener"><img src="./twitter.svg" width="12" /> Twitter API</a></p>
        <p className="footer__author"><a href="https://mburakerman.github.io">Mehmet Burak Erman</a></p>
      </footer>
    </div>
  )
}
