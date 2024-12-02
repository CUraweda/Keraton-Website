import React from "react";
import icon from "../assets/images/icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <Link to={"/"}>
              <li>
                <a>Beranda</a>
              </li>
            </Link>
            <li>
              <details>
                <summary>Sejarah</summary>
                <ul className="p-2">
                  <Link to={"/sejarah"}>
                    <li>
                      <a>Keraton</a>
                    </li>
                  </Link>
                  <Link to={"/silsilah"}>
                    <li>
                      <a>Silsilah</a>
                    </li>
                  </Link>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Booking</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Object Wisata</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            </ul>
          </div>
          <img src={icon} alt="icon" className="w-12 sm:w-16" />
          <p className="text-md sm:text-xl">Keraton Kasepuhan Cirebon</p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <Link to={"/"}>
              <li>
                <a>Beranda</a>
              </li>
            </Link>
            <li>
              <details>
                <summary>Sejarah</summary>
                <ul className="p-2">
                  <Link to={"/sejarah"}>
                    <li>
                      <a>Keraton</a>
                    </li>
                  </Link>
                  <Link to={"/silsilah"}>
                    <li>
                      <a>Silsilah</a>
                    </li>
                  </Link>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Booking</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>Object Wisata</summary>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to={"/login"}>
            <a className="btn btn-ghost bg-green-800 text-white">Sign in</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
