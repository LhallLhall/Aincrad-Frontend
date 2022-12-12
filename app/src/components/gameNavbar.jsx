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
              <img src={imgSRC} alt="logo" className='rounded img d-none d-sm-flex' height='60vh' width="76vw">
              </img>
          </Link>
          <div className='text-center '>
            <h1 className='m-0 mainFont text_color pe-4 '>
              Aincrad
            </h1>
          </div>
          <button
            className="navbar-toggler text_color"
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
            <div className="offcanvas-header bg_purple">
              <h5 className="offcanvas-title  text_color" id="offcanvasNavbarLabel">
                Aincrad
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body bg_purple">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                  <Link className="nav-link text_color " aria-current="page" to="/findGames">
                    <strong className='text_color'>Find Games</strong>
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link text_color_purple" aria-current="page" to="/myFriends">
                    My Friends
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link className="nav-link  " to="/myGames">
                    <strong className='text_color'>My Games</strong>
                  </Link>
                </li>
                <li className="nav-item ps-0 ">
                  <button className='mt-sm-2 mt-lg-0 btn btn-dark text-center' onClick={Logout}>
                    <div className='text_color'><strong>Logout</strong></div>
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

