import { useState, useEffect } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import axios from 'axios';

function App () {
    const [books , setBooks] = useState([]);

    const fetchBooks = async() =>{
        const response = await axios.get('http://localhost:3005/books');

        setBooks(response.data);
    }

    useEffect (() =>{
        fetchBooks();
    }, []);

    const editBookById = async(id ,newTitle) =>{

       const response = await axios.put(`http://localhost:3005/books/${id}`,{
        title: newTitle
       }) 

        const updatedBooks = books.map ((book) =>{
            if(book.id === id){
                //return {...book, title:newTitle}
                return {...books, ...response.data};
            }
            return book;
        });
        setBooks(updatedBooks);
    };

    const deleteBookById = async(id) =>{

        const response = await axios.delete(`http://localhost:3005/books/${id}`) 

        const updatedBooks =books.filter((book) =>{
            return book.id !== id 
        });

        setBooks(updatedBooks);
    };
    
    const createBook  = async(title) =>{
        //Bad Code 
        //books.push({id: 123 , title : titel });
        //setBooks(books);

        const response = await axios.post('http://localhost:3005/books', {
            title: title,
        });

         const updatedBooks =[
             ...books,
            response.data
         ];

        setBooks(updatedBooks);
        
    };
    return (
        <div className='App'> 
        <h1>Reading list </h1>
            <BookList  onEdit ={editBookById} Books = {books}  onDelete ={deleteBookById}/>
            <BookCreate onCreate = {createBook} />
        </div>
    )
}

export default App;