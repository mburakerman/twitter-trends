import "../src/styles/index.css";
import { AppProps } from "next/app";
import React from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryFallback from "../src/components/ErrorBoundaryFallback";

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
