import React from "react";
import Header from "../../Components/Layouts/Header/Header";
import * as yup from "yup";
import { useFormik } from "formik";
import { request } from "../../api/request";
import { CYBER_TOKEN, DOMAIN } from "../../utils/settings/config";
import { NavLink } from "react-router-dom";

const schema = yup.object().shape({
  hoTen: yup.string().required("This is required !"),
  taiKhoan: yup.string().required("This is required !"),
  matKhau: yup.mixed().required("This is required !"),
  email: yup.string().required("This is required !").email("Invalid Email"),
  soDt: yup
    .string()
    .required("This is required !")
    .matches(/^[0-9]+$/g),
});

const Signup = (props) => {

  const {handleChange,values,touched,setTouched,errors,handleBlur,isValid}=useFormik({
    initialValues:{
      hoTen:"",
      taiKhoan:"",
      matKhau:"",
      email:"",
      soDt:"",
      maNhom:"GP01",
    },
    validateOnMount:true,
    validationSchema:schema,
  })

  const signUp=()=>{
    request({
      method:"POST",
      url:`${DOMAIN}/api/QuanLyNguoiDung/DangKy`,
      data:values,
      // headers:{
      //   TokenCybersoft:CYBER_TOKEN,
      // }
    })
    .then((res)=>{
      console.log(res.data);
      alert("Sign Up success");
      props.history?.push("/signin");
    })
    .catch((err)=>{
      console.log(err);
      alert("Sigin Error");
    })
  };

  const handleSubmit=(event)=>{
    event.preventDefault();
    setTouched({
      hoTen:true,
      taiKhoan:true,
      matKhau:true,
      email:true,
      soDt:true,
    })
    if(isValid){
      signUp();
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
            htmlFor="fullname"
            className="self-start pb-3 text-xs font-semibold"
          >
            Full Name
          </label>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            name="hoTen"
            type="text"
            className="flex items-center mb-2 h-12 px-4  rounded focus:outline-none"
          />
          {touched.hoTen && <span>{errors.hoTen}</span>}
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
          <label
            htmlFor="email"
            className="self-start pb-3 text-xs font-semibold"
          >
            Email
          </label>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            name="email"
            type="text"
            className="flex items-center mb-2 h-12 px-4  rounded focus:outline-none"
          />
          {touched.email && <span>{errors.email}</span>}
          <label
            htmlFor="phone"
            className="self-start pb-3 text-xs font-semibold"
          >
            Phone Number
          </label>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            name="soDt"
            type="text"
            className="flex items-center mb-2 h-12 px-4  rounded focus:outline-none"
          />
          {touched.soDt && <span>{errors.soDt}</span>}
          <input
            name="maNhom"
            value="GP01"
            type="text"
            placeholder="GP01"
            className="flex items-center mb-2 h-12 px-4  rounded focus:outline-none"
            disabled
          />
          <button
            type="submit"
            className="flex items-center mb-2 justify-center h-12 px-6 mt-8 text-sm font-semibold rounded bg-red-500 hover:bg-red-600"
          >
            Sign Up
          </button>
          <div className="flex justify-center mt-6 space-x-2 text-xs">
            <span className="text-lg">
              Have an already account ?
            </span>
            <NavLink to="/signin" className="text-white text-lg hover:text-black">
              Sign In
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signup;
