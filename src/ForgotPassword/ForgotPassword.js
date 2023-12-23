import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './ForgotPassword.css'

const ForgotPassword = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate: (values) => {
      let errors = {};

      if (!values.email) {
        errors.email = "Please enter email";
      }

      return errors;
    },
    onSubmit: async (values) => {
      try {
        //post method create new Account
        await axios.post("https://dinesh-vf7o.onrender.com/api/v1/password/forgot", values);

      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <>
      <div className="bg ">
      <div className="head">Dinesh Soft Tech</div>
        <form className="form-bg-f mt-4 " onSubmit={formik.handleSubmit}>
          <h1>Forgot Password</h1>
          <div className="row">
            <div className="col-lg-10 ms-5">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.getFieldMeta("email").touched && formik.errors.email ? (
                <div className="text-danger">{formik.errors.email}</div>
              ) : null}
            </div>

            <div className="col-lg-10 mt-3">
                <input
                  type="submit"
                  className="btn btn-primary forgot-f"
                  value={"Send Email"}
                />
            </div>

            <div className="col-lg-10 mt-3">
                <label className=" meg text-primay">Check your Inbox Password Reset Link </label>
            </div>
            
          </div>
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;
