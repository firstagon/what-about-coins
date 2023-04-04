import { memo } from "react";

const TableRow = (props) => {
  // console.log(props);

  let price = +props.coin.priceUSD;

  function numberWithSpaces(x) {
    return x
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
  let spacedUSD = numberWithSpaces(price);

  let priceRUB = (price * props.rub).toFixed(2);
  let spacedRUB = numberWithSpaces(+priceRUB);

  return (
    <tr>
      <td>{props.coin.rating}</td>
      <td >{props.coin.name}</td>
      <td>{spacedUSD} $</td>
      <td>{spacedRUB} P</td>
    </tr>
  );
};

export default memo(TableRow);
