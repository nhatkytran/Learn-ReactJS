import { useState } from 'react';

import SearchBar from './SeachBar';
import ProductTable from './ProductTable';

function FilterableProductTable(props) {
  const [filterConds, setFilterConds] = useState({
    filterOnText: '',
    filterOnCheck: false,
  });

  return (
    <div>
      <SearchBar
        filterConds={filterConds}
        onFilterCondsChange={setFilterConds}
      />
      <ProductTable products={props.products} filterConds={filterConds} />
    </div>
  );
}

export default FilterableProductTable;
