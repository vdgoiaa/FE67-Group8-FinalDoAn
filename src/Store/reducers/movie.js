import actionType from "../actions/type";

const initialState = {
  banner: [],
  movieListDefault: [],
  movieListFilter: [],
  dangChieu: false,
  sapChieu: false,
  hot: false,
  detailMovie: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_CAROUSEL:
      state.banner = action.payload;
      return { ...state };
    case actionType.GET_MOVIE_LIST:
      state.movieListDefault = action.payload;
      state.movieListFilter = state.movieListDefault;
      return { ...state };
    case actionType.GET_MOVIE_DANGCHIEU:
      state.dangChieu = !state.dangChieu;
      // dùng để set active button
      state.sapChieu = false;
      state.hot = false;

      state.movieListFilter = state.movieListDefault.filter(
        (movie) => movie.dangChieu === state.dangChieu
      );
      return { ...state };
    case actionType.GET_MOVIE_SAPCHIEU:
      state.sapChieu = !state.sapChieu;
      // dùng để set active button
      state.dangChieu = false;
      state.hot = false;
      state.movieListFilter = state.movieListDefault.filter(
        (movie) => movie.sapChieu === state.sapChieu
      );
      return { ...state };
    case actionType.GET_MOVIE_HOT:
      state.hot = !state.hot;
      // dùng để set active button
      state.sapChieu = false;
      state.dangChieu = false;

      state.movieListFilter = state.movieListDefault.filter(
        (movie) => movie.hot === state.hot
      );
      return { ...state };
    case actionType.GET_DETAIL_MOVIE:
      state.detailMovie = action.payload;
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
