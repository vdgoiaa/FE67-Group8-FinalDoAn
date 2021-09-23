import createAction from "../Store/actions/actions";
import actionType from "../Store/actions/type";
import {  DOMAIN } from "../utils/settings/config";
import { request } from "./request";

// đăng nhập
export const signIn = (values, props) => {
  return async (dispatch) => {
    try {
      const res = await request({
        method: "POST",
        url: `${DOMAIN}/api/QuanLyNguoiDung/DangNhap`,
        data: values,
        // headers: {
        //   TokenCybersoft: CYBER_TOKEN,
        // },
      });
      // console.log(res.data);
      if (dispatch(createAction(actionType.SET_ME, res.data.content))) {
        localStorage.setItem("accessToken", res.data.content.accessToken);
        props.history.push("/");
        alert("Singin Success");
      }
    } catch (err) {
      console.log(err);
      alert("Singin Error");
    }
  };
};

// fetch me để f5 ko mất đã sign in
export const fetchMe = () => {
  return async (dispatch) => {
    try {
      const res = await request({
        method: "POST",
        url: `${DOMAIN}/api/QuanLyNguoiDung/ThongTinTaiKhoan`,
        // headers: {
        //   TokenCybersoft: CYBER_TOKEN,
        // },
      });
      dispatch(createAction(actionType.SET_ME, res.data.content));
      // console.log(res.data)
    } catch (err) {
      console.log(err);
    }
  };
};

// update thông tin user
export const updateUser=(values)=>{
  return async(dispatch)=>{
    try{
      const res =await request({
        method:"PUT",
        url:`${DOMAIN}/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
        data:values,
      })
      // console.log(res.data);
      alert("Update Success");
      window.location.reload();
    }
    catch(err){
      console.log(err);
      alert("Update Error");
      // console.log(values);
    }
  }
}
