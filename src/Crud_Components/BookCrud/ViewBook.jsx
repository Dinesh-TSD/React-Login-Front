import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { setBooks } from '../../reducers/BookSlicer';
import { RingLoader } from 'react-spinners';

const ViewBook = () => {

  const params = useParams();
  const dispatch = useDispatch();
  const { books, loading } = useSelector(state => state.book)

  let fetchData = async () => {
    let employee = await axios.get(`https://65571300bd4bcef8b611ff00.mockapi.io/product/books/${params.id}`)
    dispatch(setBooks(employee.data))
  }
  useEffect(() => {
    fetchData();
  },[])


  return (
    <>
    <div className='container min-vh-100 p-0'>
        <div className="row justify-content-center align-content-center mt-5">
          <div className="  col-sm-12">
            <div className="card text-center shadow">
              <div className="card-header h3">
                Book Details
              </div>
              <div className="card-body d-flex justify-content-center">

                  <div className="table-responsive view mx-lg-5">
                    <table className="table table-bordered table-striped">
                      <tbody>
                        <tr>
                          <td className="text">Book Name</td>
                          <td className="">{books.title}</td>
                        </tr>
                        <tr>
                          <td className="text">Author Name</td>
                          <td className="">{books.author}</td>
                        </tr>
                        <tr>
                          <td className="text">ISBN No</td>
                          <td>{books.isbn}</td>
                        </tr>
                        <tr>
                          <td className="text">Biography</td>
                          <td>{books.pubdate}</td>
                        </tr>
                        
                      </tbody>
                    </table>
                  </div>

              </div>
              <div className="card-footer text-body-secondary">
                <div className=''>
                  <Link to={'/portal/books'} className='btn btn-primary px-lg-5'>Back</Link>
                </div>
              </div>
            </div></div></div>
      </div>
    </>
  )
}

export default ViewBook