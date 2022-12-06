import React from "react";
import AuthService from "../services/auth.service";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function GameNavbar() {
  let navigate = useNavigate();

  function Logout() {
    navigate("/");
    AuthService.logout();
    window.location.reload();
  }

  return (
    <div className="container">
      <nav className="navbar bg-light ">
        <div className="container-fluid">
          <Link className="navbar-brand" to='/findGames'>
              <h2>
                Aincrad
              </h2>
          </Link>
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
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Aincrad
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
                  <Link className="nav-link" aria-current="page" to="/findGames">
                    Find Games
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/myFriends">
                    My Friends
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/myGames">
                    My Games
                  </Link>
                </li>
                <li className="nav-item pt-1">
                  <button className=' btn btn-secondary' onClick={Logout}>
                    Logout
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
{
  /* <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
    <ul className="nav nav-pills">
        <li className='nav-item'>
            <Link to='/findGames' className='nav-link'>Find Games</Link>
        </li>
        <li className='nav-item'>
            <Link to='/myFriends' className='nav-link'>My Friends</Link>
        </li>
        <li className='nav-item'>
            <Link to='/myGames' className='nav-link'>My Games</Link>
        </li>
        <li className="nav-item">
            <button className='btn btn-secondary' onClick={Logout}>Logout</button>
        </li>
    </ul>
</header> */
}
