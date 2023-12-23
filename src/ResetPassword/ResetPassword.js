import React, { useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import './ResetPassword.css'

const ResetPassword = () => {

  const params =useParams();

    const navigate = useNavigate();
 
    const closemeg = () =>
      toast(" Account created Successfuly", {
        type: toast.TYPE.SUCCESS,
        autoClose: 1000,
      });
  
    const formik = useFormik({
      initialValues: {
        password: "",
        confirmPassword: "",
      },
      validate: (values) => {
        let errors = {};

        if (!values.password) {
          errors.password = "Please enter password";
        }

        if (!values.confirmPassword) {
          errors.confirmPassword = "Please enter password";
        }
  
        return errors;
      },
      onSubmit: async (values) => {
        try {
          //post method create new Account
          await axios.post(`/api/v1/password/reset/${params.token}`, values);

          navigate("/");
          closemeg();
        } catch (error) {
          console.log(error);
        }
      },
    });
    
  return (
    <>
      <div className="bg">
      <div className="head">Dinesh Soft Tech</div>
        <form className="form-bg-r mt-4 " onSubmit={formik.handleSubmit}>
           <h1>Reset Your account Password</h1>
          <div className="row">
          <div className="col-lg-10 ms-5">
              <label>Password</label>
              <input
                type="text"
                className="form-control"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              {formik.getFieldMeta("password").touched &&
              formik.errors.password ? (
                <div className="text-danger">{formik.errors.password}</div>
              ) : null}
            </div>

            <div className="col-lg-10 ms-5">
              <label>Confirm Password</label>
              <input
                type="text"
                className="form-control"
                name="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
              />
              {formik.getFieldMeta("password").touched &&
              formik.errors.confirmPassword ? (
                <div className="text-danger">{formik.errors.confirmPassword}</div>
              ) : null}
            </div>

            <div className="col-lg-10 mt-5">
                <input
                  type="submit"
                  className="btn btn-primary forgot-f "
                  value={"Reset Password"}
                />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default ResetPassword