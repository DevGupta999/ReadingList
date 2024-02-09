import BookShow from './BookShow'

function BookList ({Books , onDelete , onEdit}) {

    const renderedBooks = Books.map ((book) => {
        return <BookShow onEdit ={onEdit} onDelete = {onDelete} key ={book.id} Book ={book}/>
    });
    return(
        <div className='book-list'> 
            {renderedBooks}
        </div>
    )
}

export default BookList;