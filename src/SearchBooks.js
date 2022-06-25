/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Link } from "react-router-dom";
import Book from "./Book";
const SearchBooks = ({ books,updateShelf }) => {
    const [word, setWord] = useState("");
    const handleChange = (event) => {
        setWord(event);
    }
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
                    {books
                        .filter(book => book.title.toLowerCase().includes(word.toLocaleLowerCase()))
                        .map(book => {
                            return (
                                <div key={book.id}>
                                    <Book book={book} updateShelf={updateShelf}/>
                                </div>
                            )
                        })}
                </ol>
            </div>
        </div>
    )
}

export default SearchBooks;