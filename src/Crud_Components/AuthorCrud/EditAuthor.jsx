import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editUser, setLoading, setUsers } from '../../reducers/AuthorSlicer';
import { useFormik } from 'formik';
import axios from 'axios';
import { toast } from 'react-toastify';
import { RingLoader } from 'react-spinners'

const EditAuthor = () => {

  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector(state => state.app);
  const closemeg = (name) => toast(`${name} is updated`, { type: toast.TYPE.SUCCESS, autoClose: 2000 });

  const formik = useFormik({
    initialValues: {
      name: "",
      dob: "",
      bio: ""
    },
    validate: (values) => {
      let errors = {}

      if (!values.name) {
        errors.name = "Please enter the name"
      }

      if (!values.dob) {
        errors.dob = "Please enter date of birth"
      }

      if (!values.bio) {
        errors.bio = "Please enter the biography"
      }

      return errors;
    },
    onSubmit: async (values) => {
      try {
        dispatch(setLoading());
        let res = await axios.put(`https://65571300bd4bcef8b611ff00.mockapi.io/product/users/${params.id}`, values)
        dispatch(setUsers(res.data))
        navigate('/portal/home')
        closemeg(values.name);
      } catch (error) {
        console.log(error);
      }
    }
  });

  useEffect(() => {
    let getUserData = async () => {
      let authors = await axios.get(`https://65571300bd4bcef8b611ff00.mockapi.io/product/users/${params.id}`)
      dispatch(editUser(authors.data))
      formik.setValues(authors.data)
    }
    getUserData();
  }, []);


  return (
    <>
      <div className="container-fluid author-form">

        {
          loading ?
            <RingLoader color='blue' />
            : (
              <form onSubmit={formik.handleSubmit} >
                <div className="row">

                  <div className="col-lg-12">
                    <label >Name</label>
                    <input
                      type="text"
                      className='form-control'
                      name='name'
                      value={formik.values.name}
                      onChange={formik.handleChange}
                    />
                    {formik.getFieldMeta('name').touched && formik.errors.name ? (
                      <div className="text-danger">{formik.errors.name}</div>
                    ) : null
                    }
                  </div>

                  <div className="col-lg-12">
                    <label >Date of Birth</label>
                    <input
                      type="date"
                      className='form-control'
                      name='dob'
                      value={formik.values.dob}
                      onChange={formik.handleChange}
                    />
                    {formik.getFieldMeta('dob').touched && formik.errors.dob ? (
                      <div className="text-danger">{formik.errors.dob}</div>
                    ) : null
                    }
                  </div>

                  <div className="col-lg-12">
                    <label >Biography</label>
                    <input
                      type="text"
                      className='form-control'
                      name='bio'
                      value={formik.values.bio}
                      onChange={formik.handleChange}
                    />
                    {formik.getFieldMeta('bio').touched && formik.errors.bio ? (
                      <div className="text-danger">{formik.errors.bio}</div>
                    ) : null
                    }
                  </div>

                  <div className="col-lg-12">
                    <input type="submit" className='btn btn-primary mt-3' value={"submit"} />
                  </div>

                </div>
              </form>
            )
        }

      </div >
    </>
  )
}

export default EditAuthor