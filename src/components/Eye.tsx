import React from "react";
import { useGlobalStore } from "../store";

const Eye = () => {
  const trendsBoxVisibility = useGlobalStore(
    (state) => state.trendsBoxVisibility
  );
  const setTrendsBoxVisibility = useGlobalStore(
    (state) => state.setTrendsBoxVisibility
  );

  return (
    <div
      className="eye"
      title="Toggle Box"
      onClick={() => setTrendsBoxVisibility(!trendsBoxVisibility)}
      data-testid="eye"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
    </div>
  );
};

export default Eye;
