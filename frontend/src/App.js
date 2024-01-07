import React, { useState, useEffect}  from "react";
import BookList from "./BookList";
import BookForm from "./BookForm";
import EditBookForm from "./EditBookForm";

import {fetchBooks, addBook, deleteBook, updateBook} from "./Api";

function App() {
  const [books, setBooks] = useState([]);
  const [token, setToken] = useState("");

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [bookToEdit, setBookToEdit] = useState([]);

  useEffect(() => {
    fetchBooks(token)
      .then(setBooks)
      .catch((error) => {
        setBooks([]);
        console.log(error);
      });
  }, [token]);

  const handleSaveBook = async (bookData) => {
    try {
      const newBook = await addBook(bookData, token);
      setBooks([...books, newBook]);
    }
    catch(error) {
      console.log(error.response.data);
    }
  };

  const handleDeleteBook = async(id) => {
    try {
      await deleteBook(id, token);
      setBooks(books.filter((book) => book.id !== id));
    }
    catch(error) {
      console.log(error.response.data);
    }
  };

  const handleEditBook = async (id, bookData) => {
    // Update old book
    try {
      await updateBook(id, bookData, token);

      bookData.id = id;

      const updatedBooks = books.map((book) =>
        book.id === id ? bookData : book
      );
      setBooks(updatedBooks);
      setIsEditModalOpen(false);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const handleEditButton = (book) => {
    setIsEditModalOpen(true);
    setBookToEdit(book);
  };

  return (
    <div className="container">
      <p>
        <label htmlFor="token">Token Key</label>&nbsp;
        <input type="text" name="token" id="token" value={token} onChange={(e) => setToken(e.target.value)}/>
      </p>

      {isEditModalOpen ?
        <EditBookForm book={bookToEdit} onSave={handleEditBook}/> :
        <BookForm onSave={handleSaveBook} />
      }
      <BookList books={books} onDelete={handleDeleteBook} onEditBook={handleEditButton}/>
    </div>
  );
}

export default App;
