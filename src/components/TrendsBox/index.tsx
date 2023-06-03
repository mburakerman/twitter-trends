import React from "react";

import { Trend } from "../../../pages/api/trends";
import { getFlagEmoji } from "../../helpers/getFlagEmoji";
import { useGlobalStore } from "../../store";
import CountrySelect from "../CountrySelect/index";
import Footer from "../Footer/index";
import Loader from "../Loader/index";
import styles from "./trendsBox.module.css";

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
      className={styles.container}
      style={{ display: trendsBoxVisibility ? "block" : "none" }}
    >
      <header className={styles.header}>
        <h1>Twitter Trends</h1>
      </header>

      <div>
        <CountrySelect />
        {trendsInfo?.locations && (
          <h2 className={styles.title}>
            {getFlagEmoji(clickedPositionCountryCode)}
            {trendsInfo.locations[0].name} Trends
          </h2>
        )}
        <ul className={styles.trends}>{renderTrendItems()}</ul>
        {loading && <Loader />}
      </div>

      <Footer />
    </div>
  );
};

export default TrendsBox;
