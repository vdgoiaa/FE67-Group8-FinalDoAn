import React from 'react'
import Header from '../../Components/Layouts/Header/Header';
import * as yup from "yup";
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateUser } from '../../api/account';
import { CustomCard } from '@tsamantanis/react-glassmorphism';

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

const Profile = () => {
    
    const profile=useSelector((state)=>{
        return state.account.account;
    });

    const dispatch=useDispatch();

    const {handleBlur,errors,touched,setTouched,values,handleChange,isValid}=useFormik({
        initialValues:{
            hoTen:profile?.hoTen,
            taiKhoan:profile?.taiKhoan,
            matKhau:profile?.matKhau,
            email:profile?.email,
            soDt:profile?.soDT,
            maNhom:"GP01",
            maLoaiNguoiDung:"KhachHang",
        },
        // sử dụng để edit được khi hiện mặc định values bàn đầu khi xài formik
        enableReinitialize:true,
        // 
        validationSchema:schema,
        validateOnMount:true,
    })

    const handleUpdate=(event)=>{
        event.preventDefault();
        setTouched({
            hoTen:true,
            taiKhoan:true,
            matKhau:true,
            email:true,
            soDt:true,
        })
        if(isValid){
           dispatch(updateUser(values));
        }
    }

    return (
        <div>
        <Header/>
        <CustomCard
          effectColor="#263238" // required
          // color="#14AEFF" // default color is white
          blur={10} // default blur value is 10px
          borderRadius={0} // default border radius value is 10px
          style={{ minHeight: "100vh" }}
        >
          
        <div className="lg:py-36 md:py-36 py-60 flex items-center justify-center text-center ">
        <form
          onSubmit={handleUpdate}
          className="flex flex-col lg:w-2/4 md:w-3/4 w-3/4  max-w-lg p-12 rounded shadow-xl text-black bg-red-400 "
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
            value={values.hoTen}
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
            value={values.taiKhoan}
            type="text"
            className="flex items-center mb-2 h-12 px-4  rounded focus:outline-none"
            disabled
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
            value={values.matKhau}
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
            value={values.email}
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
            value={values.soDt}
            name="soDt"
            type="text"
            className="flex items-center mb-2 h-12 px-4  rounded focus:outline-none"
          />
          {touched.soDt && <span>{errors.soDt}</span>}
          <label
            htmlFor="phone"
            className="self-start pb-3 text-xs font-semibold"
          >
            Type Of User
          </label>
          <input
            name="maLoaiNguoiDung"
            value="KhachHang"
            type="text"
            className="flex items-center mb-2 h-12 px-4  rounded focus:outline-none"
            disabled
          />
           <label
            htmlFor="phone"
            className="self-start pb-3 text-xs font-semibold"
          >
            Group Code
          </label>
          <input
            name="maNhom"
            value="GP01"
            type="text"
            className="flex items-center mb-2 h-12 px-4  rounded focus:outline-none"
            disabled
          />
          <button
            type="submit"
            className="flex items-center mb-2 justify-center h-12 px-6 mt-8 text-sm font-semibold rounded bg-red-500 hover:bg-red-600"
          >
            Update Information
          </button>
        </form>
      </div>
      </CustomCard>
        </div>
    )
}
export default Profile;