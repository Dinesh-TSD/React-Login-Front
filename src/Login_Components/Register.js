import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Login.css";

const Register = () => {
  const navigate = useNavigate();

  const closemeg = () =>
    toast(" Account created Successfuly", {
      type: toast.TYPE.SUCCESS,
      autoClose: 1000,
    });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validate: (values) => {
      let errors = {};

      if (!values.name) {
        errors.name = "Please enter the name";
      }

      if (!values.email) {
        errors.email = "Please enter date of birth";
      }

      if (!values.password) {
        errors.password = "Please enter the biography";
      }

      return errors;
    },
    onSubmit: async (values) => {
      try {
        //post method create new Account
        await axios.post(
          "https://dinesh-vf7o.onrender.com/api/v1/register",
          values
        );
        navigate("/");
        closemeg();
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <>
      <div className="head">Dinesh Soft Tech</div>
      <div className=" lg">
        <form className="form-bg mt-4 " onSubmit={formik.handleSubmit}>
          <h1>Register</h1>

          <div className="row justify-content-center">
            <div className="col-8 col-lg-9 col-sm-9 col-md-9 col-xl-10">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Enter your name"
                value={formik.values.name}
                onChange={formik.handleChange}
              />
              {formik.getFieldMeta("name").touched && formik.errors.name ? (
                <div className="text-danger">{formik.errors.name}</div>
              ) : null}
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-8 col-lg-9 col-sm-9 col-md-9 col-xl-10">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter your email"
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
              <label>Password</label>
              <input
                type="text"
                className="form-control"
                name="password"
                placeholder="Enter your password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              {formik.getFieldMeta("password").touched &&
              formik.errors.password ? (
                <div className="text-danger">{formik.errors.password}</div>
              ) : null}
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-8 col-lg-9 col-sm-9 col-md-9 col-xl-10">
              <input
                type="submit"
                className="btn btn-primary mt-3"
                value={"Register"}
              />
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-8 col-lg-9 col-sm-9 col-md-9 col-xl-10">
              <br></br>
              <p className="forgot">Already have an account ? Click Login</p>
              <Link className="btn btn-primary forgot mt-3" to="/">
                Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
