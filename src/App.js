/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import SearchBooks from "./SearchBooks";
import ListBooks from "./ListBooks";
function App() {
  const [books, setBooks] = useState([]);
  const [update, setUpdate] = useState(true);

  const updateShelf = (book, selectedShelf) => {
    const getUpdate = async ()=> {
      const res = await BooksAPI.update(book,selectedShelf);
      if(res)
      setUpdate(true);
    } 
    getUpdate();
  }
  
  useEffect(() => {
    let mounted = true;
    if(mounted&update){
      const getBooks = async () => {
        const res = await BooksAPI.getAll();
        setBooks(res);
      }
      setUpdate(false);
      getBooks();
    }
    return () =>{
      mounted = false;
    }
  },[update]);

  return (
    <Routes>
      <Route exact path="/search" element={
        <SearchBooks data={books}  updateShelf={updateShelf}/>
      }></Route>
      <Route exact path="/" element={
        <ListBooks data={books} updateShelf={updateShelf}/>
      }></Route>
    </Routes>
  );
}

export default App;
