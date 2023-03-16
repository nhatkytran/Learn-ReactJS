import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

function ProductTable(props) {
  const { filterOnText, filterOnCheck } = props.filterConds;
  const filteredProducts = {};

  props.products.forEach(product => {
    if (!(product.category in filteredProducts)) {
      filteredProducts[product.category] = [];
    }

    if (filterOnText && !product.name.toLowerCase().includes(filterOnText))
      return;

    if (filterOnCheck && !product.stocked) return;

    filteredProducts[product.category].push(product);
  });

  const table = Object.entries(filteredProducts).map(([category, products]) => (
    <React.Fragment key={category}>
      <ProductCategoryRow category={category} />
      {products.map(product => (
        <ProductRow key={product.name} info={product} />
      ))}
    </React.Fragment>
  ));

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{table}</tbody>
      </table>
    </div>
  );
}

export default ProductTable;
