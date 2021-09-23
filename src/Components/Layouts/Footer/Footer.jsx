import React from "react";
import { useSelector } from "react-redux";
import _ from "lodash";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const heThongRap = useSelector((state) => {
    return state.cinema.heThongRap;
  });

  // lấy tên rạp và logo để map vô làm giao diện footer : sử dụng lib lodash
  const arrHeThongRap = _.map(heThongRap, (item) => {
    return _.pick(item, ["tenHeThongRap", "logo"]);
  });

  // console.log(arrHeThongRap);

  return (
    <footer className="text-red-500 body-font pt-5 bg-gray-100">
      <div className="container px-5 py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10 ">
          <a
            href="/#"
            className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 hover:text-red-500"
          >
            <img
              src="https://tix.vn/app/assets/img/icons/web-logo.png"
              alt=""
              className="w-12 h-12 text-white rounded-full"
            />
            <span className="ml-3 text-xl">Eleven.1.One</span>
          </a>
          <p className="mt-2 text-sm text-gray-500 hover:text-red-500">
            Front-End 67 Group 8
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-red-500 tracking-widest text-sm mb-3">
              SERVICES
            </h2>
            <nav className="list-none mb-10">
              <li className="my-4">
                <a href="/#" className="text-black hover:text-red-500">
                  Career
                </a>
              </li >
              <li className="my-4">
                <a href="/#" className="text-black hover:text-red-500">
                  Help
                </a>
              </li>
              <li className="my-4">
                <a href="/#" className="text-black hover:text-red-500">
                  Report
                </a>
              </li>
              <li className="my-4">
                <a href="/#" className="text-black hover:text-red-500">
                  Join
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-red-500 tracking-widest text-sm mb-3">
              CUSTOMER
            </h2>
            <nav className="list-none mb-10">
              <li className="my-4">
                <a href="/#" className="text-black hover:text-red-500">
                  About Us
                </a>
              </li>
              <li className="my-4">
                <a href="/#" className="text-black hover:text-red-500">
                  Contact
                </a>
              </li>
              <li className="my-4">
                <a href="/#" className="text-black hover:text-red-500">
                  Introduce
                </a>
              </li>
              <li className="my-4">
                <a href="/#" className="text-black hover:text-red-500">
                  Sponsors
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-red-500 tracking-widest text-sm mb-3">
              Partner
            </h2>
            <nav className="list-none ">
              {arrHeThongRap.map((item, index) => {
                return (
                  <li key={index} className="flex items-center lg:justify-start md:justify-start sm:justify-center justify-center my-3 cursor-pointer hover:scale-110 transform hover:-translate-y-1.5">
                    <NavLink to="/signin" className="text-black hover:text-red-500 mr-3">
                      {item.tenHeThongRap}
                    </NavLink>
                    <img src={item.logo} alt="" className="w-10 h-10 "/>
                  </li>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-white text-sm text-center sm:text-left">
            © 2021 Front End 67 — 
            <a
              href="/#"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-700"
            >
              Group 8
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a href="/#" className="text-white hover:text-red-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a href="/#" className="ml-3 text-white hover:text-red-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a href="/#" className="ml-3 text-white hover:text-red-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a href="/#" className="ml-3 text-white hover:text-red-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0}
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx={4} cy={4} r={2} stroke="none" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
