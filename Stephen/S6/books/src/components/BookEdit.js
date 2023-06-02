import { useState } from 'react';

function BookEdit({ book, onUpdateBook }) {
  console.log('Book Edit!');

  const [title, setTitle] = useState(book.title);

  const handleSubmit = event => {
    event.preventDefault();

    onUpdateBook(book.id, title);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={event => setTitle(event.target.value)}
      />
      <button>Save</button>
    </form>
  );
}

export default BookEdit;
