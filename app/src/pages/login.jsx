import React from "react";
import Navbar from "../components/navbar.jsx";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Login() {
  const [username, setUsername] = useState(" ")
  const [password, setPassword] = useState(" ")

  const userNameInput = (e) => {
    setUsername(e.target.value);
  };
  const passwordInput = (e) => {
    setPassword(e.target.value);
  };
  const submit = async () => {
    const user = axios.post(
      "https://8000-lhalllhall-aincradbacke-leafyr8orcy.ws-us77.gitpod.io/games/token/obtain/",
      {
        "username": username,
        "password": password,
      }
    );
    const res = await user;
    localStorage.setItem("token", res.data.access);
    console.log(res)
  };
  return (
    <div>
      <Navbar />
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-12 pb-4 d-flex justify-content-center">
          <input onChange={userNameInput} type="text" placeholder="Username" />
        </div>
        <div className="col-12 pb-4 d-flex justify-content-center">
          <input onChange={passwordInput} type="text" placeholder="Password" />
        </div>
        <div className="col-12 d-flex justify-content-center">
          <button onClick={submit} type="button" className="btn btn-primary">
            Click to Login
          </button>
        </div>
      </div>
    </div>
  );
}
