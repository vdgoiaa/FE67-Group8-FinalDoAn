import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const account = useSelector((state) => {
    return state.account.account;
  });

  const handleLogOut=()=>{
    localStorage.removeItem("accessToken");
    window.location.reload();
  }

  return (
    <header className="text-black body-font lg:container fixed w-full bg-white z-10 opacity-90">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center h-1/2">
        <a
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <img
            src="https://tix.vn/app/assets/img/icons/web-logo.png"
            alt=""
            className="w-3/12"
          />
          <span className="ml-3 text-xl text-black transition duration-200 hover:text-red-500">
            Eleven.1.One
          </span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <NavLink
            className="mr-5 text-black transition duration-150 hover:text-red-500 text-2xl"
            activeClassName="text-red-500"
            to="/"
            exact
          >
            Home
          </NavLink>
          <a
            href="/#"
            className="mr-5 text-black transition duration-150 hover:text-red-500 text-2xl"
          >
            Contact
          </a>
          <a
            href="/#"
            className="mr-5 text-black transition duration-150 hover:text-red-500 text-2xl"
          >
            Introduce
          </a>
        </nav>
        {account ? (
        <div>
            <span className="text-xl pr-4">Hi , {account.taiKhoan}</span>
            <NavLink
              className="mr-5 p-1 text-white transition duration-150 ease-in-out hover:text-white text-2xl transform hover:-translate-y-0.5 hover:scale-110  bg-red-500 rounded-lg hover:shadow-lg"
              activeClassName="text-red-700"
              to="/profile"
              exact
            >
              Profile
            </NavLink>
            <button onClick={handleLogOut} className="mr-5 p-1 text-white transition duration-150 ease-in-out hover:text-white text-2xl transform hover:-translate-y-0.5 hover:scale-110  bg-red-500 rounded-lg hover:shadow-lg">Sign Out</button>
        </div> 
        ) : (
          <div>
            <NavLink
              className="mr-5 text-black transition duration-150 hover:text-red-500 text-2xl"
              activeClassName="text-red-500"
              to="/signin"
              exact
            >
              Signin
            </NavLink>
            <NavLink
              className="mr-5 p-1 text-white transition duration-150 ease-in-out hover:text-white text-2xl transform hover:-translate-y-0.5 hover:scale-110  bg-red-500 rounded-lg hover:shadow-lg"
              activeClassName="text-red-700"
              to="/signup"
              exact
            >
              Signup
            </NavLink>
          </div>
        )}
      </div>
    </header>
  );
};
export default React.memo(Header);
