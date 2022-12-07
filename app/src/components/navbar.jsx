import React from "react";
import App from "../App.js";
import Login from "../pages/login.jsx";
import { Link } from "react-router-dom";
import Axios from "axios";

export default function navbar() {
  return (
    <div className=" navBlur w-100 ">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4">
        <ul className="nav nav-pills ">
          <li className="nav-item d-flex align-items-center">
            <Link to="/" className="textDecoNone text_color">
              <h4 className="pt-2 othernav-link">Home</h4>
            </Link>
          </li>
          <li className=" px-4 nav-item">
            <Link to="/login" className=" textDecoNone text_color">
              <h4 className=" pt-2 othernav-link">Login</h4>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="textDecoNone text_color">
              <h4 className="pt-2 othernav-link">Register</h4>
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}
