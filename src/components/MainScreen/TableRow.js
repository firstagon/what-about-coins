const TableRow = (props) => {
  console.log(props);

    let priceRUB = (+props.values.priceUSD * 77).toFixed(2);
    return (
      <tr>
        <td>{props.values.rating}</td>
        <td>{props.values.name}</td>
        <td>{props.values.priceUSD}</td>
        <td>{priceRUB}</td>
      </tr>
    );
  };

export default TableRow;
