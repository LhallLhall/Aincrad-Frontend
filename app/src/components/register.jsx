import React from "react";
import { useState } from "react";
// import { useGlobalState } from "../context/GlobalState.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "./navbar.jsx";


export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  // async function getSomeDataFromBackend() {
  //   let options = {
  //     url: `/my-api-endpoint/?some_model__user_id=${state.currentUser.user_id}`, // just the endpoint
  //     method: 'GET', // sets the method
  //   }
  //   let resp = await request(options) // await the response and pass in this fancy object of request options
  //   setSomeState(resp.data) // set the response
  // const [ state, dispatch ] = useGlobalState();
  // }
  const userNameInput = (e) => {
    setUsername(e.target.value);
  };
  const passwordInput = (e) => {
    setPassword(e.target.value);
  };

  const submit = () => {
    if (username.length === 0) {
      return alert("Not a valid Username or Password");
    }
    if (password.length === 0) {
      return alert("Not a valid Username or Password");
    }
    axios.post(
      "https://8000-lhalllhall-aincradbacke-leafyr8orcy.ws-us78.gitpod.io//games/user/create/",
      {
        username: username,
        password: password,
      }
    );
    navigate("/login");
  };

  return (
    <div
      className="text-bg-dark bg_image"
      style={{ backgroundBlendMode: "color-dodge" }}
    >
      <Navbar />
      <div className="row h-75 d-flex justify-content-center align-items-center">
        <div className="col-8 col-sm-4 col-md-4 col-lg-4">
          <h2 className="pt-3 pb-3 text-center">Register Here</h2>
          <div className="col-12 pb-4 d-flex justify-content-center">
            <input
              onChange={userNameInput}
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="col-12 pb-4 d-flex justify-content-center">
            <input
              onChange={passwordInput}
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="col-12 d-flex justify-content-center">
            <button onClick={submit} type="button" className="btn btn_color">
              <div className="text_color">Click to Register</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
