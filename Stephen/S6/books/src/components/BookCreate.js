import { useRef, useState } from 'react';
import { useBooksContext } from '../hooks';

function BookCreate() {
  console.log('BookCreate!');

  const { handleCreateBook } = useBooksContext();

  const [title, setTitle] = useState('');
  const inputRef = useRef();

  const handleSubmit = event => {
    event.preventDefault();

    handleCreateBook(title);
    setTitle('');
    inputRef.current.focus();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          value={title}
          onChange={event => setTitle(event.target.value)}
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default BookCreate;
