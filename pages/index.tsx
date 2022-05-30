import Head from 'next/head'
import Map from './components/Map'
import React from 'react'

export default function Home () {
  return (
    <div>
      <Head>
        <title>Twitter Trends</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" id="favicon" type="image/svg+xml" href="/favicon.svg" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
         
            ym(72763762, "init", {
                 clickmap:true,
                 trackLinks:true,
                 accurateTrackBounce:true
            });
              `
          }}
        />
      </Head>
      <Map />
      <noscript><div><img src="https://mc.yandex.ru/watch/72763762" style={{ position: 'absolute', left: '-9999px' }} alt="" /></div></noscript>
    </div>
  )
}
