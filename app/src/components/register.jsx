import React from 'react'
import {useState, useEffect} from 'react';
import { useGlobalState } from '../context/GlobalState.jsx'
import { Link } from "react-router-dom"
import axios from 'axios'

export default function Register () {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
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
  setUsername(e.target.value)
}
const passwordInput = (e) => {
  setPassword(e.target.value)
}

const submit = () => {
  axios.post('https://8000-lhalllhall-aincradbacke-leafyr8orcy.ws-us77.gitpod.io/games/user/create/', {
      "username": username,
      "password": password
  })
}

  return (
    <div className='row d-flex justify-content-center align-items-center'>
      {/* <h1>{state.currentUser}</h1> */}
    <div className="col-12 pb-4 d-flex justify-content-center">
      <input onChange={userNameInput} type="text" placeholder='Username'/>
    </div>
    <div className="col-12 pb-4 d-flex justify-content-center">
      <input onChange={passwordInput} type="password" placeholder="Password"/>
    </div>
    <div className="col-12 d-flex justify-content-center">
      <Link to='/login'>
        <button onClick={submit} type="button" className='btn btn-primary'>Click to Register</button>
      </Link>
    </div>
  </div>
    )
}