import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import {  useNavigate } from "react-router-dom";
import "./Login.css";

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
        await axios.post(
          "https://dinesh-vf7o.onrender.com/api/v1/password/forgot",
          values
        );
        navigate('/reset/password/:token')
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <>
      <div className="head">Dinesh Soft Tech</div>
      <div className="lg ">
        <form className="form-bg mt-4 " onSubmit={formik.handleSubmit}>
          <h1>Forgot Password</h1>

          <div className="row justify-content-center">
            <div className="col-8 col-lg-9 col-sm-9 col-md-9 col-xl-10">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter your correct email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.getFieldMeta("email").touched && formik.errors.email ? (
                <div className="text-danger">{formik.errors.email}</div>
              ) : null}
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-8 col-lg-9 col-sm-9 col-md-9 col-xl-10">
              <input
                type="submit"
                className="btn btn-primary forgot mt-3"
                value={"Send Email"}
              />
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-8 col-lg-9 col-sm-9 col-md-9 col-xl-10">
              <label className=" text-primay">
                Check your Inbox Password Reset Link{" "}
              </label>
            </div>
          </div>

        </form>
      </div>
    </>
  );
};

export default ForgotPassword;
