import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import createAction from "../../../Store/actions/actions";
import actionType from "../../../Store/actions/type";
import MovieList from "../MovieList";
import styleSlick from "./MovieSlick.module.css";

// dùng custom 2 mũi tên trong slider
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick[`slick-prev`]}`}
      style={{ ...style, display: "block", color: "black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick[`slick-prev`]}`}
      style={{ ...style, display: "block", color: "black" }}
      onClick={onClick}
    />
  );
}

export const MovieSlick = (props) => {
  // console.log(props);
  const settings = {
    className: "center variable-width",
    centerMode: false,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    rows: 1,
    slidesPerRow: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const renderMovieList = () => {
    return props.movieList.slice(0, 20).map((item, index) => {
      return (
        <div className={`${styleSlick["width-item"]}`} key={index}>
          <MovieList movie={item} />
        </div>
      );
    });
  };

  const activeButtonDangChieu = useSelector((state) => {
    return state.movie.dangChieu;
  });

  const activeButtonSapChieu = useSelector((state) => {
    return state.movie.sapChieu;
  });

  const activeButtonHot=useSelector((state)=>{
    return state.movie.hot;
  })

  const dispatch = useDispatch();

  const handleNowShowing = () => {
    dispatch(createAction(actionType.GET_MOVIE_DANGCHIEU));
  };

  const handleComingSoon = () => {
    dispatch(createAction(actionType.GET_MOVIE_SAPCHIEU));
  };

  const handleHot=()=>{
    dispatch(createAction(actionType.GET_MOVIE_HOT));
  }

  return (
    <div>
      <div className="flex items-center justify-center mb-4">
      <button
          onClick={handleHot}
          className={
            activeButtonHot === true
              ? "bg-red-500 rounded-lg pt-2 pb-2 pr-4 pl-4 mr-8 text-white transform shadow-lg :-translate-y-1 scale-110 duration-150"
              : "bg-red-500 rounded-lg pt-2 pb-2 pr-4 pl-4 mr-8 text-white transform hover:shadow-lg hover:-translate-y-1 hover:scale-110 duration-150"
          }
        >
          HOT
        </button>
        <button
          onClick={handleNowShowing}
          className={
            activeButtonDangChieu === true
              ? "bg-red-500 rounded-lg p-2 mr-8 text-white transform shadow-lg :-translate-y-1 scale-110 duration-150"
              : "bg-red-500 rounded-lg p-2 mr-8 text-white transform hover:shadow-lg hover:-translate-y-1 hover:scale-110 duration-150"
          }
        >
          Now Showing
        </button>
        <button
          onClick={handleComingSoon}
          className={
            activeButtonSapChieu === true
              ? "bg-red-500 rounded-lg p-2 mr-8 text-white transform shadow-lg :-translate-y-1 scale-110 duration-150"
              : "bg-red-500 rounded-lg p-2 mr-8 text-white transform hover:shadow-lg hover:-translate-y-1 hover:scale-110 duration-150"
          }
        >
          Coming Soon
        </button>
      </div>
      <Slider {...settings}>{renderMovieList()}</Slider>
    </div>
  );
};
