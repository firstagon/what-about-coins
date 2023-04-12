import styles from "./TrackerSection.module.css";
import CoinsTable from "./CoinsTable";
import { fetchCoin } from "../../libs/getCoins";
import getRUB from "../../libs/exchangeRates";
import { useEffect, useState, memo } from "react";

const TrackerSection = () => {
  const [coinsValues, setCoinsValues] = useState([]);
  const [rubVal, setRubVal] = useState(false);

  useEffect(() => {
    // console.log("use effect");
    let arrayOfCoins = [];
    fetchCoin().then((coins) => {
      for (let i = 0; i <= 10; i++) {
        if (i >= 10) {
          arrayOfCoins.forEach((coin) => {
            setCoinsValues((prevState) => {
              if (prevState.length === 0) {
                return [{ name: coin.name, priceUSD: coin.priceUsd, rating: coin.rank }];
              } else {
                return [...prevState, { name: coin.name, priceUSD: coin.priceUsd, rating: coin.rank }];
              }
            });
          });
        } else {
          arrayOfCoins.push(coins[i]);
        }
      }
    });
    getRUB().then((res) => setRubVal(res));

    return (() => arrayOfCoins.length = 0);
  }, []);

  return (
    <section className={styles.trackSection}>
      <CoinsTable coins={coinsValues} rub={rubVal} />
      {/* <marquee direction="right"> moving text </marquee> */}
    </section>
  );
};

export default TrackerSection;