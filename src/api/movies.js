// import axios from "axios";
import createAction from "../Store/actions/actions";
import actionType from "../Store/actions/type";
import { CYBER_TOKEN, DOMAIN } from "../utils/settings/config";
import { request } from "./request";

// carousel
export const getCarousel = () => {
  return async (dispatch) => {
    try {
      const res = await request({
        method: "GET",
        url: `${DOMAIN}/api/QuanLyPhim/LayDanhSachBanner`,
        // headers: {
        //   TokenCybersoft: CYBER_TOKEN,
        // },
      });
      dispatch(createAction(actionType.GET_CAROUSEL, res.data.content));
    } catch (err) {
      console.log(err);
    }
  };
};

// get movie list
export const getMovieList = () => {
  return async (dispatch) => {
    try {
      const res = await request({
        method: "GET",
        url: `${DOMAIN}/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`,
        // headers: {
        //   TokenCybersoft: CYBER_TOKEN,
        // },
      });
      dispatch(createAction(actionType.GET_MOVIE_LIST, res.data.content));
    } catch (err) {
      console.log(err);
    }
  };
};

// lay danh sach lich chiếu theo phim
export const getLichChieuMovieById = (queryMovieId) => {
  return async (dispatch) => {
    try {
      const res = await request({
        method: "GET",
        url: `https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?${queryMovieId}`,
        headers: {
          TokenCybersoft: CYBER_TOKEN,
        },
      });
      dispatch(createAction(actionType.GET_DETAIL_MOVIE, res.data.content));
    } catch (err) {
      console.log(err);
    }
  };
};
