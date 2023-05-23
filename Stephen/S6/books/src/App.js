import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
  console.log('App render!');

  const [books, setBooks] = useState([]);

  console.log(books);

  const handleCreateBook = title => {
    setBooks([
      ...books,
      {
        id: Math.round(Math.random() * 9999),
        title,
      },
    ]);
  };

  const handleUpdateBook = (id, title) => {
    setBooks(
      books.map(book => {
        if (book.id === id) return { ...book, title };
        return book;
      })
    );
  };

  const handleDeleteBook = id => {
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
