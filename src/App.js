/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import SearchBooks from "./SearchBooks";
import ListBooks from "./ListBooks";
function App() {
  const [books, setBooks] = useState([]);
  const updateShelf = (book, selectedShelf) => {
    BooksAPI.update(book,selectedShelf);
  }
  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    }
    getBooks();
  });
  return (
    <Routes>
      <Route exact path="/search" element={
        <SearchBooks books={books}  updateShelf={updateShelf}/>
      }></Route>
      <Route exact path="/" element={
        <ListBooks books={books} updateShelf={updateShelf}/>
      }></Route>
    </Routes>
  );
}

export default App;
