import React from "react";
import AuthService from "../services/auth.service";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import imgSRC from './icon.png'

export default function GameNavbar() {
  let navigate = useNavigate();

  function Logout() {
    navigate("/");
    AuthService.logout();
    window.location.reload();
  }

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link className="navbar-brand" to='/'>
              <img src={imgSRC} alt="logo" className='rounded img' height='60vh' width="76vw">
              </img>
          </Link>
          <div className='text-center pe-5'>
            <h1 className='m-0 mainFont ps-3'>
              Aincrad
            </h1>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title " id="offcanvasNavbarLabel">
                <strong>Aincrad</strong>
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/findGames">
                    <strong>Find Games</strong>
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link text_color_purple" aria-current="page" to="/myFriends">
                    My Friends
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link " to="/myGames">
                    <strong>My Games</strong>
                  </Link>
                </li>
                <li className="nav-item ps-0">
                  <button className=' mt-md-2 btn btn-dark' onClick={Logout}>
                    <div className='text_color'>Logout</div>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

