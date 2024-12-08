import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Authcontext } from "./Authprovider";

const Header = () => {

  const {user} = useContext(Authcontext)
  console.log(user);
  const item = (
    <>
      <li>
        <NavLink to='/'>home</NavLink>
      </li>
      <li>
        <NavLink to='/allvisa'>All visa</NavLink>
      </li>
      <li>
        <NavLink to='/addvisa'>add visa</NavLink>
      </li>
      <li>
        <NavLink to='/myvisa'>my visa</NavLink>
      </li>
      <li>
        <NavLink to='/application'>my visa application</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar sticky top-0 z-50 bg-black text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-cyan-600 text-black font-bold  rounded-box z-[10] mt-3 w-52 p-2 shadow backdrop-blur-sm bg-opacity-55"
          >
            {item}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{item}</ul>
      </div>
      <div className="navbar-end">
        <NavLink to='/signin' className="btn font-bold text-teal-500 ">Sign In {user && user.email}</NavLink>
      </div>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
