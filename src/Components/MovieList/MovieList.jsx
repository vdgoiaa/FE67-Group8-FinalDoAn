import React from "react";
import { NavLink } from "react-router-dom";

const MovieList = (props) => {
  return (
      <div className="m-3 h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transform hover:-translate-y-0.5 hover:scale-110 duration-150">
        <img
          className="sm:h-48 lg:h-48 md:h-12 w-full object-cover object-center"
          src={props.movie.hinhAnh}
          alt="blog"
        />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-red-500 mb-1">
            {props.movie.dangChieu === true ? `Now Showing` : `Coming Soon`}
            
          </h2>
          <div className="h-6">
          {props.movie.hot === true ?  <span className="tracking-widest p-1 bg-red-500 rounded-lg text-xs title-font font-medium text-white mb-1 border-1">
           Hot
           </span> : ``}
          </div>
          <h1 className="lg:h-12 md:h-8 title-font text-lg font-medium text-gray-900 mb-3">
            {props.movie.tenPhim}
          </h1>
          <p className="lg:h-12 md:h-8 leading-relaxed mb-3">
            {props.movie.moTa.length>100 ? ` ${props.movie.moTa.substr(0,100)} ...` : props.movie.moTa}
          </p>
          <div className="flex items-center flex-wrap ">
            <NavLink to={`./detail/${props.movie.maPhim}`} exact className="text-red-500 mr-4 inline-flex items-center md:mb-2 lg:mb-0">
              Booking
            </NavLink>
            <NavLink to={`./detail/${props.movie.maPhim}`} exact  className="text-red-500 inline-flex items-center md:mb-2 lg:mb-0">
              Watch Trailer
            </NavLink>
            <span className="text-yellow-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                strokeWidth={2}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx={12} cy={12} r={3} />
              </svg>
              10/10
            </span>
            <span className="text-blue-500 inline-flex items-center leading-none text-sm">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                strokeWidth={2}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
              </svg>
              6
            </span>
          </div>
        </div>
      </div>
  
  );
};
export default MovieList;
