import { Fragment, useMemo, useEffect, useState, memo } from "react";
import styles from "./CoinsTable.module.css";
import getRUB from "../../libs/exchangeRates";
import { getCoin } from "../../libs/getCoins";
import TableRow from "./TableRow";

// (async () => {
//   const rubRate = await getRUB();
//   console.log(rubRate);
// })();

const CoinsTable = (props) => {
  console.log(props);

  const [coins, setCoins] = useState(props.coins);

  useEffect(() => setCoins(props.coins), [props.coins]);

  return (
    <Fragment>
      <table rules="rows" className={styles.table}>
        <thead>
          <tr>
            <td> Rating </td>
            <td> Coin </td>
            <td> Price in USD </td>
            <td> Price in RUB </td>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => {
            // console.log(coin);
            return <TableRow key={coin.rating} coin={coin} rub={props.rub} />;
          })}
        </tbody>
      </table>
    </Fragment>
  );
};

export default CoinsTable;
