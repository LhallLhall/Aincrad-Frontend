import React from "react";
import GameNavbar from "./gameNavbar.jsx";
import { useLocation } from "react-router-dom";
import { useGlobalState } from "../context/GlobalState.jsx";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import math from 'react'

export default function GamePage() {
  let [state, dispatch] = useGlobalState();
  let navigate = useNavigate();
  console.log(state);
  // let params = useParams()
  // games.find(game => game.id === params.id)

  function itemDisplay(item) {
    if (!item) {
      return;
    }
    let itemStr = "";
    for (let i = 0; i < item.length; i++) {
      itemStr += "  " + item[i].name;
    }
    return itemStr;
  }

  function companyDisplay(item){
    if(!item){
        return;
    }
    let companyStr = ''
    for (let i = 0; i < item.length; i++){
        // companyStr += ' ' + item[0].company.name
        for(let y =0; y < item[i].length; y++) {
            companyStr += ' ' + item[i].company.name
        }
    }
  }

  function dateDisplay(item) {
    if (!item) {
      return;
    }
    let itemStr = "";
    itemStr += item[0].human;
    return itemStr;
  }
  return (
    <div className="container">
      <GameNavbar />
      <div className="row">
        <div className="col-4 offset-4 text-center">
          <h3>{state.selectedGame.name}</h3>

          <h5>{itemDisplay(state.selectedGame.platforms)}</h5>
          <h5>{dateDisplay(state.selectedGame.release_dates)}</h5>
        </div>
      </div>
      <div className="row pt-5 mt-3 justify-content-evenly ">
        <div className=" border border-dark   col-4 d-flex justify-content-start">
          <div className="col-12">
            <h1 className="text-center">Summary</h1>
            <p className="text-center">{state.selectedGame.summary}</p>
          </div>
        </div>

        <div className=" border border-dark  col-4 d-flex justify-content-center">
          <div className='text-center'>
            <div>
              <h5>Genres:</h5>
              <p>{itemDisplay(state.selectedGame.genres)}</p>
            </div>
            <div>
              <h5>Franchise/s:</h5>
              <p>{itemDisplay(state.selectedGame.franchises)}</p>
            </div>
            <div>
              <h5>Company/s:</h5>
              <p>{companyDisplay(state.selectedGame.companies)}</p>
            </div>
            <div>
              <h5>Rating:</h5>
              <p>{Math.ceil(state.selectedGame.rating)}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='row pt-5'>
        <div className="col-8 offset-2 text-center border border-dark ">
            <h4>Storyline</h4>
            <p>{state.selectedGame.storyline}</p>
        </div>
      </div>
    </div>
  );
}

// <div class="card-body">
//   <div class="row">
//     <div class="col-6 col-md-2">
//       <label>Platforms</label>
//       <div>
//         {/* <a href="/Game?platform=mac">
//                                     <img class="float-start icon platform-icon" src="/images/platforms/mac.svg" alt="Mac logo" title="Mac">
//                                 </a>
//                                 <a href="/Game?platform=win">
//                                     <img class="float-start icon platform-icon" src="/images/platforms/windows.svg" alt="PC (Microsoft Windows) logo" title="PC (Microsoft Windows)">
//                                 </a>
//                                 <a href="/Game?platform=xbox">
//                                     <img class="float-start icon platform-icon" src="/images/platforms/xbox.svg" alt="Xbox logo" title="Xbox">
//                                 </a>
//                                 <a href="/Game?platform=xbox360">
//                                     <img class="float-start icon platform-icon" src="/images/platforms/xbox.svg" alt="Xbox 360 logo" title="Xbox 360">
//                                 </a> */}
//       </div>
//     </div>
//     <div class="col-6 col-md-2">
//       <label>Released</label>
//       <p>{}</p>
//     </div>
//     <div class="col-6 col-md-2">
//       <label>Developers</label>
//       <p>
//         <p>{}</p>{" "}
//       </p>
//     </div>
//     {/* <div class="col-6 col-md-2">
//       <label>Publishers</label>
//       <p>
//         <a href="/Game?publisher=macsoft-games">MacSoft Games,</a>&nbsp;
//         <a href="/Game?publisher=microsoft-game-studios">
//           Microsoft Game Studios
//         </a>{" "}
//       </p>
//     </div> */}
//     <div class="col-6 col-md-2">
//       <label>Genres</label>
//       <p>
//         <p>{}</p>{" "}
//       </p>
//     </div>
//     {/* <div class="col-6 col-md-2 text-center">
//       <label>Average Rating</label>
//       <h2>85</h2>
//     </div> */}
//   </div>
// </div>;
