import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'

const Card = ({ book,title, author, isbn, pubdate,deleteData }) => {

  

  return (
    <>
      <div className="col-3">
        <div className="card book-card">
          <img src="https://m.media-amazon.com/images/I/41e+u3k6DHL._BG0,0,0,0_FMpng_AC_SY320_SX320_.jpg" alt="" />
          <div className="card-body book-body  ">
            <div className="row justify-content-center title">{title}</div>
            <div className="row justify-content-center author-name">{author}</div>
            <div className="row justify-content-center isbn">{isbn}</div>
            <div className="row justify-content-center pubdate">{pubdate}</div>
            <div className="buttons-group">
              <Link to={`/portal/view-book/${book.id}`} className='btn btn-sm btn-info ms-3'>view</Link>
              <Link to={`/portal/edit-book/${book.id}`} className='btn btn-sm btn-warning ms-3' >Edit</Link>
              <button onClick={() => deleteData(book.id, title)} className='btn btn-sm btn-danger ms-3' >delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card