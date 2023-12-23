import axios from 'axios';
import { useFormik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { addUser } from '../../reducers/AuthorSlicer';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const CreateAuthor = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const closemeg = () =>
    toast(" New user created Successfuly", {
      type: toast.TYPE.SUCCESS,
      autoClose: 1000,
    });


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
        //post method create new user
        let res = await axios.post("https://65571300bd4bcef8b611ff00.mockapi.io/product/users", values)
        dispatch(addUser(res.data))
        navigate('/portal/home')
        closemeg()
      } catch (error) {
        console.log(error);

      }
    },
  })
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
      </div>

    </>
  )
}

export default CreateAuthor