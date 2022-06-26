/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
import * as BooksAPI from "./BooksAPI";

const SearchBooks = ({ updateShelf }) => {
    const [word, setWord] = useState("");
    const [books, setBooks] = useState([]);
    const handleChange = (event) => {
        setWord(event);
    }
    useEffect(() => {
        if(word){
            const seachBook = async () => {
                const res = await BooksAPI.search(word, "16");
                setBooks(res);
            }
            seachBook();
        }
    }, [word]);
    return (
        <div className="main">
            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        to="/"
                        className="close-search"
                    >
                        Close
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title, author, or ISBN"
                            value={word}
                            onChange={event => handleChange(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid"></ol>
                </div>
            </div>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books?.error? undefined : books?.map(book => {
                        return (
                            <div key={book.id}>
                                <Book data={book} updateShelf={updateShelf} />
                            </div>
                        )
                    })}
                </ol>
            </div>
        </div>
    )
}

export default SearchBooks;