import { useState } from 'react';
import SearchBar from './components/searchBar';
import searchImages from './api';
import ImageList from './components/ImageList';

function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async searchTerm => {
    try {
      setLoading(true);
      setErrorMessage('');

      const data = await searchImages(searchTerm);
      setImages(data);
    } catch (error) {
      setErrorMessage('Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <hr />
      {loading && <div>Searching...</div>}
      {!loading && errorMessage && <div>Something went wrong!</div>}
      {!loading && !errorMessage && <ImageList images={images} />}
    </div>
  );
}

export default App;
