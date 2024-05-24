import React from "react";
import { Link, Navigate } from "react-router-dom";

import booklogo from "./assets/booklogo.png";
function Header() {
  return (
    <>
      <div className="nav">
        <div className="lb">
          <img src={booklogo} alt="" />
          <a href="" className="logo">
            BookStore
          </a>
        </div>

        <input type="checkbox" id="check" />
        <label for="check" className="icons">
          <i className="fa-solid fa-bars menu"></i>
          <i className="fa-solid fa-x cross"></i>
        </label>
        <ul className="direct">
          <li>
            <a href="http://localhost:5173/">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Books</a>
          </li>
          <li>
            <a href="">Footer</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
