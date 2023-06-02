import { useEffect } from 'react';
import { useBooksContext } from './hooks';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
  console.log('App render!');

  const { fetchBooks } = useBooksContext();

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <BookCreate />
      <hr />
      <BookList />
    </div>
  );
}

export default App;
