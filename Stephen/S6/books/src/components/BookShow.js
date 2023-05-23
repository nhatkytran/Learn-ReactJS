import { useState } from 'react';
import BookEdit from './BookEdit';

function BookShow({ book, onUpdateBook, onDeleteBook }) {
  console.log('BookShow!');

  const [showEdit, setShowEdit] = useState(false);

  const handleUpdateBook = (id, title) => {
    onUpdateBook(id, title);
    setShowEdit(!showEdit);
  };

  return (
    <div>
      {showEdit && <BookEdit book={book} onUpdateBook={handleUpdateBook} />}
      {!showEdit && <span>{book.title}</span>}
      {!showEdit && (
        <button onClick={() => setShowEdit(!showEdit)}>Edit</button>
      )}
      <button onClick={() => onDeleteBook(book.id)}>X</button>
    </div>
  );
}

export default BookShow;
