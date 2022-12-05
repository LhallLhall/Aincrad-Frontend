import React from "react";
import { Link } from "react-router-dom";
export default function LandingHero() {
  return (
    <div className=" pt-5 d-flex h-100 text-center text-bg-dark mainBody blur">
      <div className="cover-container d-flex w-100 h-75 h-s-100 p-3 mx-auto flex-column">
        <header className="rounded darkColor mb-auto">
          <div></div>
        </header>

        <main className="px-3 ">
          <h1>Aincrad</h1>
          <p className="lead blur">
            Aincrad™ is an application for people track their games, hours
            played, and friends! You can find games to add to your personal list
            that you have either completed/played or games that you are
            currently playing.
          </p>
          {/* <p className="lead px-3" > */}
          <div className="row">
            <div className="col-6">
                <Link to='/register'>
              <button className="btn btn-lg btn-secondary fw-bold  bg-secondary">
                Sign Up
              </button>
                </Link>
            </div>
            <div className="col-6">
              <Link to="/login">
                <button className="btn btn-lg btn-secondary fw-bold  bg-secondary">
                  Login
                </button>
              </Link>
            </div>
          </div>
          {/* </p> */}
        </main>

        <footer className="mt-auto text-white-50"></footer>
      </div>
    </div>
  );
}
