import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-gray-800 text-white flex`}>
      <div className={`container-fluid flex gap-5 w-full `}>
        <Link className="navbar-brand m-2 text-white" to="/WordCount/">
          {props.title}
        </Link>

        <div></div>
        <div
          className="collapse flex  w-full m-2 justify-between navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav flex gap-3 me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active text-white"
                aria-current="page"
                to="/WordCount/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about">
                About
              </Link>
            </li>
          </ul>
          
          <button
            onClick={props.black}
            className="bg-green-500 right-2 m-2 absolute cursor-pointer hover:bg-green-600 text-white p-2 mx-2 rounded"
          >
            Black Mode
          </button>
          <button
            onClick={props.green}
            className="bg-green-500 right-28  m-2 absolute cursor-pointer hover:bg-green-600 text-white p-2 mx-2 mb-2 rounded"
          >
            Green Mode
          </button>
          <button
            onClick={props.white}
            className="bg-green-500 right-56  m-2 absolute cursor-pointer hover:bg-green-600 text-white p-2 mx-2 mb-2 rounded"
          >
            Light Mode
          </button>
        </div>
      </div>
    </nav>
  );
}
