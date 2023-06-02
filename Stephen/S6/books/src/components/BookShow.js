import { useState } from 'react';
import BookEdit from './BookEdit';
import { useBooksContext } from '../hooks';

function BookShow({ book }) {
  console.log('BookShow!');

  const { handleUpdateBook, handleDeleteBook } = useBooksContext();

  const [showEdit, setShowEdit] = useState(false);

  const onUpdateBook = (id, title) => {
    handleUpdateBook(id, title);
    setShowEdit(!showEdit);
  };

  return (
    <div>
      {showEdit && <BookEdit book={book} onUpdateBook={onUpdateBook} />}
      {!showEdit && <span>{book.title}</span>}
      {!showEdit && (
        <button onClick={() => setShowEdit(!showEdit)}>Edit</button>
      )}
      <button onClick={() => handleDeleteBook(book.id)}>X</button>
    </div>
  );
}

export default BookShow;
