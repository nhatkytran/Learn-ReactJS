import axios from 'axios';
import { useEffect, useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
  console.log('App render!');

  const [books, setBooks] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get('http://localhost:3001/books');

      setBooks(response.data);
    })();
  }, []);

  const handleCreateBook = async title => {
    const response = await axios.post('http://localhost:3001/books', { title });

    setBooks([...books, response.data]);
  };

  const handleUpdateBook = async (id, title) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title,
    });

    setBooks(
      books.map(book => {
        if (book.id === id) return { ...book, ...response.data };
        return book;
      })
    );
  };

  const handleDeleteBook = async id => {
    await axios.delete(`http://localhost:3001/books/${id}`);

    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <div>
      <BookCreate onCreateBook={handleCreateBook} />
      <hr />
      <BookList
        books={books}
        onUpdateBook={handleUpdateBook}
        onDeleteBook={handleDeleteBook}
      />
    </div>
  );
}

export default App;
