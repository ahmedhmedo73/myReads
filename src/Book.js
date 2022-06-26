import BookShelfChanger from "./BookShelfChanger";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";

const Book = ({ data, updateShelf }) => {
    const [book, setBook] = useState([]);
    const [selectedShelf, setSelectedShelf] = useState("");
    let mounted = true;
    useEffect(() => {
        if (data)
            setBook(data);
    }, [data]);
    if (!book.shelf&&book.id&&mounted) {
        const getBookData = async () => {
            const res = await BooksAPI.get(book.id);
            if (res) {
                setSelectedShelf(res.shelf);
                mounted = false;
            }
        }
        getBookData();
    }
    return (
        <li key={book.id}>
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage:
                                "url(" + book?.imageLinks?.thumbnail + ")",
                        }}
                    ></div>
                    <BookShelfChanger updateShelf={updateShelf} data={book} selectedShelf={book.shelf || selectedShelf} />
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
        </li>
    )
}
export default Book;