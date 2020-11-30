import Head from 'next/head'
import Map from "./components/Map.js"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Twitter Trends</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <header>
        <h1> Twitter Trends</h1>
      </header>

      <main>
        <Map />
      </main>

      <footer>
        <details>
          <summary>What is this?</summary>
          <p>Twitter Trends is an app where you click on a map and shows you the closest area's Twitter trending topics and hashtags today.</p>
        </details>
        <div className="footer__bottom">
          <p>Made with <a href="https://developer.twitter.com/en/docs/twitter-api" target="_blank" rel="noopener"><img src="./twitter.svg" width="12" /> Twitter API</a></p>
          <p><a href="https://mburakerman.github.io" target="_blank" rel="noopener">Mehmet Burak Erman</a></p>
        </div>
      </footer>
    </div>
  )
}
