import BookShelfChanger from "./BookShelfChanger";

const Book = ({book,updateShelf}) => {
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
                                "url(" + book.imageLinks.thumbnail + ")",
                        }}
                    ></div>
                    <BookShelfChanger updateShelf={updateShelf} book={book}/>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
        </li>
    )
}
export default Book;