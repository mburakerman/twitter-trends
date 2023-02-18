import React from "react";

type Props = {
  error?: Error;
  resetErrorBoundary: () => void;
};
const ErrorBoundaryFallback = ({ error, resetErrorBoundary }: Props) => {
  return (
    <div className="error-boundary-fallback">
      <h5>Something went wrong :/</h5>
      <p>{error?.message}</p>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

export default ErrorBoundaryFallback;
