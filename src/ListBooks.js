import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import Book from "./Book";
const ListBooks = ({ data, updateShelf }) => {
    const [books, setBooks] = useState([]);
    const shelfs = ["currentlyReading", "wantToRead", "read"];
    useEffect(() => {
        if (data) {
            setBooks(data);
        }
    }, [data]);
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                {shelfs.map(shelf => {
                    return (
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">{shelf}</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {books && books.filter(book =>
                                        book.shelf === shelf
                                    ).map((book) => {
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
                })}
            </div>
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
        </div>
    )
}
export default ListBooks;