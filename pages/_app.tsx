import { AppProps } from "next/app";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";

import ErrorBoundaryFallback from "../src/components/ErrorBoundaryFallback/index";
import "../src/global.css";

function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ErrorBoundary
          FallbackComponent={ErrorBoundaryFallback}
          onReset={() => {
            window.location.reload();
          }}
        >
          <Component {...pageProps} />
        </ErrorBoundary>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default App;
