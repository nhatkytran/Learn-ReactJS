import axios from 'axios';
import { useState } from 'react';
import BooksContext from './BooksContext';

function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');
    setBooks(response.data);
  };

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

  const value = {
    books,
    setBooks,
    fetchBooks,
    handleCreateBook,
    handleUpdateBook,
    handleDeleteBook,
  };

  return (
    <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
  );
}

export default BooksProvider;
