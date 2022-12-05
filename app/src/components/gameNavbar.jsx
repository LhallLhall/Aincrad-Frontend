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
      <nav class="navbar bg-light ">
        <div class="container-fluid">
          <Link class="navbar-brand" to='/findGames'>
            Aincrad
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">
                Aincrad
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                  <Link class="nav-link" aria-current="page" to="/findGames">
                    Find Games
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" aria-current="page" to="/myFriends">
                    My Friends
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/myGames">
                    My Games
                  </Link>
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
