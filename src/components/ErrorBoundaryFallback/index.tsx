import React from "react";
import styles from "./errorBoundaryFallback.module.css";

type Props = {
  error?: Error;
  resetErrorBoundary: () => void;
};

const ErrorBoundaryFallback = ({ error, resetErrorBoundary }: Props) => {
  return (
    <div className={styles.container}>
      <h5>Something went wrong :/</h5>
      <p>{error?.message}</p>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

export default ErrorBoundaryFallback;
