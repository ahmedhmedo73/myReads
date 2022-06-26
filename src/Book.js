import BookShelfChanger from "./BookShelfChanger";
import { useState,useEffect } from "react";
const Book = ({data,updateShelf}) => {
    const [book, setBook] = useState([]);
    useEffect(() => {
        if(data)
            setBook(data);
    }, [data]);
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
                    <BookShelfChanger updateShelf={updateShelf} data={book} selectedShelf={book.shelf||"none"}/>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
        </li>
    )
}
export default Book;