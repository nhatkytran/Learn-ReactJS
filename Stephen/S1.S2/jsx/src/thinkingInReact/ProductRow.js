function ProductRow(props) {
  const {
    info: { name, price, stocked },
  } = props;

  return (
    <tr style={{ color: `${!stocked ? 'red' : ''}` }}>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  );
}

export default ProductRow;
