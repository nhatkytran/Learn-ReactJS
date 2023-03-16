function SearchBar(props) {
  const {
    filterConds: { filterOnText, filterOnCheck },
    onFilterCondsChange,
  } = props;

  const handleFilterText = event =>
    onFilterCondsChange(prevState => ({
      ...prevState,
      filterOnText: event.target.value,
    }));

  const handleFilterCheck = event =>
    onFilterCondsChange(prevState => ({
      ...prevState,
      filterOnCheck: event.target.checked,
    }));

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={filterOnText}
          onChange={handleFilterText}
        />
        <p>
          <input
            type="checkbox"
            checked={filterOnCheck}
            onChange={handleFilterCheck}
          />{' '}
          Only show products in stock
        </p>
      </form>
    </div>
  );
}

export default SearchBar;
