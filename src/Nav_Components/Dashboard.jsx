import React from 'react'
import { Link } from 'react-router-dom'
import './Dashboard.css'
import book from './book.png'

const Dashboard = () => {
  return (
    <>
      <div className="container-fluid head ">
        <div className="row">
          <div className="col-8">
            <h1 className='mt-5'>BEST PLATFORM TO BUY BOOKS</h1>
            <Link to={'/portal/create-author'} className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm create" ><i
              className="fas fa-download fa-sm text-white-50"></i> Create Author</Link>
            <Link to={'/portal/upload-book'} className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm create"><i
              className="fas fa-download fa-sm text-white-50"></i> Upload a Book</Link>
          </div>
          <div className="col-4 head-img">
            <img src={book} alt="" />
          </div>
        </div>
      </div>

    </>
  )
}

export default Dashboard