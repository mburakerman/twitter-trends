import React from "react";
import Loader from "./Loader";
import Footer from "./Footer";
import { getFlagEmoji } from "../helpers/getFlagEmoji";
import CountrySelect from "./CountrySelect";
import { useGlobalStore } from "../store";
import { Trend } from "../../pages/api/trends";

type Props = {
  loading?: boolean;
};

const TrendsBox = ({ loading }: Props) => {
  const clickedPositionCountryCode = useGlobalStore(
    (state) => state.clickedPositionCountryCode
  );
  const trendsInfo = useGlobalStore((state) => state.trendsInfo);
  const trendsBoxVisibility = useGlobalStore(
    (state) => state.trendsBoxVisibility
  );

  const renderTrendItems = () => {
    if (!trendsInfo?.trends) {
      return (
        <li>
          <a>
            <p>😞 No trend found</p>
          </a>
        </li>
      );
    }

    return trendsInfo.trends.map((item: Trend, index: number) => {
      if (!item.tweet_volume) {
        return null;
      }

      return (
        <li key={index}>
          <a href={item.url} target="_blank" rel="noopener noreferrer">
            <p>{item.name}</p>
            <small>
              {new Intl.NumberFormat(["ban", "id"]).format(item.tweet_volume)}{" "}
              Tweet
            </small>
          </a>
        </li>
      );
    });
  };

  return (
    <div
      className="trends-box"
      style={{ display: trendsBoxVisibility ? "block" : "none" }}
    >
      <header>
        <h1>Twitter Trends</h1>
      </header>

      <div className="trends-box__body">
        <CountrySelect />
        {trendsInfo?.locations && (
          <h2 className="trends-box__title">
            {getFlagEmoji(clickedPositionCountryCode)}
            {trendsInfo.locations[0].name} Trends
          </h2>
        )}
        <ul className="trends-box__trends">{renderTrendItems()}</ul>
        {loading && <Loader />}
      </div>

      <Footer />
    </div>
  );
};

export default TrendsBox;
