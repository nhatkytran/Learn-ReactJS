import BookShow from './BookShow';

function BookList({ books, onUpdateBook, onDeleteBook }) {
  console.log('BookList!');

  return (
    <div>
      {books.map(book => (
        <BookShow
          key={book.id}
          book={book}
          onUpdateBook={onUpdateBook}
          onDeleteBook={onDeleteBook}
        />
      ))}
    </div>
  );
}

export default BookList;
