import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { deleteBook, setBooks, setLoading } from '../../reducers/BookSlicer';
import axios from 'axios';
import Card from '../../components/Card';
import './book.css'

const BookList = () => {


  let dispatch = useDispatch();
  const {books,loading} = useSelector((state) => state.book)

  const closemeg = (name) => toast(`${name} is deleted`, { type: toast.TYPE.WARNING, autoClose: 1000 });


  useEffect(() => {
    //getting data from mock api get method
    const getData = async () => {
      try {
        dispatch(setLoading());
        const booklist = await axios.get("https://65571300bd4bcef8b611ff00.mockapi.io/product/books")
        dispatch(setBooks(booklist.data))
      } catch (error) {
        console.log(error);
      }
    }
       getData()

   
  }, [dispatch]);

  //delete user data funtion
  async function deleteData(id, name) {
    try {
      await axios.delete(`https://65571300bd4bcef8b611ff00.mockapi.io/product/books/${id}`)
      closemeg(name);
      dispatch(deleteBook(id))
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      <div className=" books-list">
        Books List
      </div>
      
      <div className="back">
        {Array.isArray(books) && books.length > 0 ? (
        <div className="  card-holder">

          <div className="row ">
            {
              books.map((book, index) => {
                return <Card
                  key={index}
                  book={book}
                  title={book.title}
                  author={book.author}
                  isbn={book.isbn}
                  pubdate={book.pubdate}
                  deleteData={deleteData}
                />
              })
            }

          </div>
        </div>
      ) : (
        <p className="text-center">No user data available</p >
      )}
      </div>
      

    </>
  )
}

export default BookList