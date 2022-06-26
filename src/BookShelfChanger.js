import { useEffect,useState } from "react";
const BookShelfChanger = ({ updateShelf, data, selectedShelf}) => {
    const handleChange = (book, shelf) => {
        updateShelf(book, shelf);
    }
    const [book, setBook] = useState([]);
    useEffect(() => {
        if(data)
            setBook(data);
    }, [data]);
    return (
        <div className="book-shelf-changer">
            <select onChange={(event) => handleChange(book, event.target.value)} value={selectedShelf}>
                <option value="none" disabled>
                    Move to...
                </option>
                <option value="currentlyReading">
                    Currently Reading
                </option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )
}
export default BookShelfChanger;