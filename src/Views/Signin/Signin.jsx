import React from "react";
import Header from "../../Components/Layouts/Header/Header";
import * as yup from "yup";
import { useFormik } from "formik";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signIn } from "../../api/account";

const schema = yup.object().shape({
  taiKhoan: yup.string().required("This is required !"),
  matKhau: yup.mixed().required("This is required !"),
});

const Signin = (props) => {

    const dispatch=useDispatch();

  const { handleBlur, handleChange, values, setTouched, errors, touched,isValid } =
    useFormik({
      initialValues: {
        taiKhoan: "",
        matKhau: "",
      },
      validationSchema: schema,
      validateOnMount: true,
    });

  const handleSubmit = (event) => {
    event.preventDefault();
    setTouched({
      taiKhoan: true,
      matKhau: true,
    });
    if(isValid){
        dispatch(signIn(values,props));
    }
  };

  return (
    <div>
      <Header />
      <div className="lg:py-36 md:py-36 py-60 flex items-center justify-center text-center ">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col lg:w-2/4 md:w-3/4  max-w-lg p-12 rounded shadow-xl text-black bg-red-400 "
        >
          <label
            htmlFor="username"
            className="self-start pb-3 text-xs font-semibold"
          >
            Username
          </label>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            name="taiKhoan"
            type="text"
            className="flex items-center mb-2 h-12 px-4  rounded focus:outline-none"
          />
          {touched.taiKhoan && <span>{errors.taiKhoan}</span>}
          <label
            htmlFor="password"
            className="self-start pb-3 text-xs font-semibold"
          >
            Password
          </label>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            name="matKhau"
            type="password"
            className="flex items-center mb-2 h-12 px-4  rounded focus:outline-none"
          />
          {touched.matKhau && <span>{errors.matKhau}</span>}
          <button
            type="submit"
            className="flex items-center mb-2 justify-center h-12 px-6 mt-8 text-sm font-semibold rounded bg-red-500 hover:bg-red-600"
          >
            Sign In
          </button>
          <div className="flex justify-center mt-6 space-x-2 text-xs">
            <span className="text-lg">You don't have account yet ?</span>
            <NavLink
              to="/signin"
              className="text-white text-lg hover:text-black"
            >
              Sign Up
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signin;
