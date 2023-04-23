import styles from "./TrackerSection.module.css";
import CoinsTable from "./CoinsTable";
import { fetchCoin } from "../../libs/getCoins";
import getRUB from "../../libs/exchangeRates";
import { useEffect, useState } from "react";

const loadSpin = () => {
  return (
    <div className={styles.load}> LOADING </div>
  )
}

const TrackerSection = () => {
  const [coinsValues, setCoinsValues] = useState([]);
  const [rubVal, setRubVal] = useState(false);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    // console.log("use effect");
    setIsLoading(true);
    let arrayOfCoins = [];
    fetchCoin().then((coins) => {
      for (let i = 0; i <= 10; i++) {
        if (i >= 10) {
          arrayOfCoins.forEach((coin) => {
            setCoinsValues((prevState) => {
              if (prevState.length === 0) {
                setIsLoading(false);
                return [{ name: coin.name, priceUSD: coin.priceUsd, rating: coin.rank }];
              } else {
                setIsLoading(false);
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
  }, []);
  
  return (
    <section className={styles.trackSection}>
      <CoinsTable coins={coinsValues} rub={rubVal} />
      {isLoading &&  loadSpin()}
    </section>
  );
};

export default TrackerSection;