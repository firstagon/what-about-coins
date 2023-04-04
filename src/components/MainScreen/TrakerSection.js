import styles from "./TrackerSection.module.css";
import CoinsTable from "./CoinsTable";
import { fetchCoin } from "../../libs/getCoins";
import getRUB from "../../libs/exchangeRates";
import { useEffect, useState } from "react";

const propObj = {
  coins: [],
  rubValue: 77,
};

let coin, rubValue;

const TrackerSection = (props) => {
  const [coinsValues, setCoinsValues] = useState([]);
  const [rubVal, setRubVal] = useState(false);

  useEffect(() => {
    console.log("use effect");
    fetchCoin("bitcoin").then((coin) => {
      setCoinsValues((prevState) => {
        if (prevState.length == 0) {
          return [{ name: coin.name, priceUSD: coin.priceUsd, rating: coin.rank }];
        } else {
          return [...prevState, { name: coin.name, priceUSD: coin.priceUsd, rating: coin.rank }];
        }
      });
    });
    getRUB().then((res) => setRubVal(res));
  }, []);

  return (
    <section className={styles.trackSection}>
      <div> Tracker section </div>
      <CoinsTable coins={coinsValues} rub={rubVal} />
      <marquee direction="right"> moving text </marquee>
    </section>
  );
};

export default TrackerSection;
