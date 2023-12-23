import React, { useEffect } from 'react'
import { editBook, setBooks, setLoading } from '../../reducers/BookSlicer'
import { useFormik } from 'formik'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import axios from 'axios';

const EditBook = () => {

  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector(state => state.book);
  const closemeg = (title) => toast(`${title} is updated`, { type: toast.TYPE.SUCCESS, autoClose: 2000 });

  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      isbn: "",
      pubdate: ""
    },
    validate: (values) => {
      let errors = {}

      if (!values.title) {
        errors.title = "Please enter the title"
      }

      if (!values.author) {
        errors.author = "Please enter the author name"
      }

      if (!values.isbn) {
        errors.isbn = "Please enter the ISBN No"
      }

      if (!values.pubdate) {
        errors.pubdate = "Please enter publish date"
      }

      return errors;
    },
    onSubmit: async (values) => {
      try {
        dispatch(setLoading());
        let res = await axios.put(`https://65571300bd4bcef8b611ff00.mockapi.io/product/books/${params.id}`, values)
        dispatch(setBooks(res.data))
        navigate('/portal/books')
        closemeg(values.title);
      } catch (error) {
        console.log(error);
      }
    }
  })


  useEffect(() => {
    let getUserData = async () => {
      let books = await axios.get(`https://65571300bd4bcef8b611ff00.mockapi.io/product/books/${params.id}`)
      dispatch(editBook(books.data))
      formik.setValues(books.data)
    }
    getUserData();
  }, []);


  return (
    <>
      <div className="container-fluid author-form">
        <form onSubmit={formik.handleSubmit} >
          <div className="row">

            <div className="col-lg-12">
              <label >Name</label>
              <input
                type="text"
                className='form-control'
                name='title'
                value={formik.values.title}
                onChange={formik.handleChange}
              />
              {formik.getFieldMeta('title').touched && formik.errors.title ? (
                <div className="text-danger">{formik.errors.title}</div>
              ) : null
              }
            </div>

            <div className="col-lg-12">
              <label >Author Name</label>
              <input
                type="text"
                className='form-control'
                name='author'
                value={formik.values.author}
                onChange={formik.handleChange}
              />
              {formik.getFieldMeta('author').touched && formik.errors.author ? (
                <div className="text-danger">{formik.errors.author}</div>
              ) : null
              }
            </div>

            <div className="col-lg-12">
              <label >ISBN No</label>
              <input
                type="text"
                className='form-control'
                name='isbn'
                value={formik.values.isbn}
                onChange={formik.handleChange}
              />
              {formik.getFieldMeta('isbn').touched && formik.errors.isbn ? (
                <div className="text-danger">{formik.errors.isbn}</div>
              ) : null
              }
            </div>

            <div className="col-lg-12">
              <label >Publication date</label>
              <input
                type="date"
                className='form-control'
                name='pubdate'
                value={formik.values.pubdate}
                onChange={formik.handleChange}
              />
              {formik.getFieldMeta('pubdate').touched && formik.errors.pubdate ? (
                <div className="text-danger">{formik.errors.pubdate}</div>
              ) : null
              }
            </div>

            <div className="col-lg-12">
              <input type="submit" className='btn btn-primary mt-3' value={"submit"} />
            </div>

          </div>
        </form>
      </div>
    </>
  )
}

export default EditBook