import React from 'react';
import App from '../App.js'
import Login from '../pages/login.jsx'
import { Link } from "react-router-dom"
import Axios from 'axios'

export default function navbar(){
    
    return (
    <div className="container">
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      {/* <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"> */}
        {/* <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg> */}
        {/* <span class="fs-4">Simple header</span> */}
      {/* </a> */}

      <ul className="nav nav-pills">
        <li className="nav-item">
          <Link to='/'  className="nav-link" aria-current="page">Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/login' className="nav-link">Login</Link>
        </li>
        
        
        {/* <li class="nav-item"><a href="#" className="nav-link">Register</a></li> */}
        {/* <li class="nav-item"><a href="#" className="nav-link">Learn More</a></li> */}
      </ul>
    </header>
  </div>
    )
}