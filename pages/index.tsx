import Head from "next/head";
import React from "react";
import { QueryClient, dehydrate } from "react-query";

import Eye from "../src/components/Eye/index";
import Map from "../src/components/Map/index";
import TrendsBox from "../src/components/TrendsBox/index";
import {
  getAvailableCountries,
  getCountries,
  getTrends,
} from "../src/service/index";

export const WOEID_WORLDWIDE = 1;

export default function Home() {
  return (
    <div>
      <Head>
        <title>Twitter Trends</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />
        <link
          rel="icon"
          id="favicon"
          type="image/svg+xml"
          href="/favicon.svg"
        />
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
              `,
          }}
        />
      </Head>
      <Map />
      <Eye />
      <TrendsBox />
      <noscript>
        <div>
          <img
            src="https://mc.yandex.ru/watch/72763762"
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
      </noscript>
    </div>
  );
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("countries", getCountries);
  await queryClient.prefetchQuery("availableCountries", getAvailableCountries);
  await queryClient.prefetchQuery("trends", () => getTrends(WOEID_WORLDWIDE));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
