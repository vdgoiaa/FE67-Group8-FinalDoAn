import createAction from "../Store/actions/actions";
import actionType from "../Store/actions/type";
import {  DOMAIN } from "../utils/settings/config";
import { request } from "./request";

export const getInforCinemaSystem = () => {
  return async (dispatch) => {
    try {
      const res = await request({
        method: "GET",
        url: `${DOMAIN}/api/QuanLyRap/LayThongTinLichChieuHeThongRap`,
        // headers:{
        //     TokenCybersoft: CYBER_TOKEN,
        // }
      });
      dispatch(
        createAction(actionType.GET_LAYDANHSACH_CUMRAP, res.data.content)
      );
    } catch (err) {
      console.log(err);
    }
  };
};
