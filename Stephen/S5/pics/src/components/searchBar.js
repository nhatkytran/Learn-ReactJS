import { useState } from 'react';

function SearchBar({ onSubmit }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleFormSubmit = event => {
    event.preventDefault();

    onSubmit(searchTerm);
    setSearchTerm('');
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={event => setSearchTerm(event.target.value)}
        />
      </form>
    </div>
  );
}

export default SearchBar;
