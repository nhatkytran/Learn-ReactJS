import { useBooksContext } from '../hooks';
import BookShow from './BookShow';

function BookList() {
  console.log('BookList!');

  const { books } = useBooksContext();

  return (
    <div>
      {books.map(book => (
        <BookShow key={book.id} book={book} />
      ))}
    </div>
  );
}

export default BookList;
