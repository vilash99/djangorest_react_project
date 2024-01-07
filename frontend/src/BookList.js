import React from "react";
import Book from "./Book";

function BookList({books, onDelete, onEditBook}) {
  return (
    <div className="book-list">
      {books.map((book) => (
        <Book
          key={book.id}
          book={book}
          onDelete={onDelete}
          onEditBook={onEditBook}
        />
      ))}
    </div>
  );
}

export default BookList;