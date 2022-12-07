import React from "react";
// import App from '../App.js'
import Navbar from "../components/navbar.jsx";
// import axios from "axios";
import { useState } from "react";
import AuthService from "../services/auth.service";
import { useNavigate } from "react-router-dom";
import { useGlobalState } from "../context/GlobalState";
import jwtDecode from "jwt-decode";

const Login = () => {
  let navigate = useNavigate();

  const [state, dispatch] = useGlobalState();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameInput = (e) => {
    setUsername(e.target.value);
  };
  const passwordInput = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    AuthService.login(username, password).then(async (resp) => {
      let data = jwtDecode(resp.access);
      await dispatch({
        currentUserToken: resp.access,
        currentUser: data,
      });
      navigate("/findGames");
    });
  };
  return (
    <div
      className="text-bg-dark bg_image"
      style={{ backgroundBlendMode: "color-dodge" }}
    >
      <Navbar />
      <div className="row h-75 d-flex justify-content-center align-items-center">
        <div className="col-8 col-sm-4 col-md-4 col-lg-4">
          <h1 className="text-center pb-3 text_color "> Login Here </h1>
          <div className="col-12 pb-4 d-flex justify-content-center">
            <input
              id="usernameInput"
              onChange={usernameInput}
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="col-12 pb-4 d-flex justify-content-center">
            <input
              id="passwordInput"
              onChange={passwordInput}
              type="text"
              placeholder="Password"
            />
          </div>
          <div className="col-12 d-flex justify-content-center">
            <button
              onClick={handleLogin}
              type="button"
              className="btn btn_color "
            >
              <div className="text_color">Click to Login</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
