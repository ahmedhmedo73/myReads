const BookShelfChanger = ({updateShelf ,book}) => {
    const handleChange = (book, shelf) => {
        updateShelf(book, shelf);
        console.log('hi');
    }
    return (
        <div className="book-shelf-changer">
            <select onChange={(event)=>handleChange(book, event.target.value)}>
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