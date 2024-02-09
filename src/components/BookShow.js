import {useState} from 'react';
import BookEdit from './BookEdit'

function BookShow ({Book, onDelete, onEdit}) {
    const [showEdit, setShowEdit] =useState(false);

    const handleDeleteClick = () =>{
        onDelete(Book.id);
    }

    const handleEditClick = () =>{
        setShowEdit(!showEdit);
    }

    const handleSubmit = (id, newTitle) =>{
        setShowEdit(false);
        onEdit(id, newTitle);
    }

    let content = <h3> {Book.title}</h3>
    if(showEdit) {
        content = <BookEdit onSubmit={handleSubmit} Book={Book}/>
    }

    return(
        <div className="book-show"> 
            {content}
            <div className="actions">
                <button className='edit' onClick = {handleEditClick}>
                    Edit
                </button>
                <button className="delete" onClick={handleDeleteClick}>Delete </button>
            </div>
        </div>
    )
}

export default BookShow;