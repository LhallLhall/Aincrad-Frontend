import React, { useState } from "react";
import GameNavbar from "./gameNavbar.jsx";
// import { useLocation } from "react-router-dom";
import { useGlobalState } from "../context/GlobalState.jsx";
// import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import math from "react";
// import Axios from "axios";
import request from "../services/api.request.jsx";

export default function GamePage() {
  // let [game, setGame] = useState();
  let [addedToMyGames, setAddedToMyGames] = useState(true);
  let [state,] = useGlobalState();
  // let navigate = useNavigate();
  console.log(state);

  function itemDisplay(item) {
    if (!item) {
      return;
    }
    let itemStr = "";
    for (let i = 0; i < item.length; i++) {
      itemStr += "  " + item[i].name;
    }
    console.log(itemStr);
    return itemStr;
  }

  // function companyDisplay(item) {
  //   if (!item) {
  //     return;
  //   }
  //   let companyStr = "";
  //   for (let i = 0; i < item.length; i++) {
  //     // companyStr += ' ' + item[0].company.name
  //     for (let y = 0; y < item[i].length; y++) {
  //       console.log(item[y].name);
  //       companyStr += " " + item[y].name;
  //     }
  //   }
  // }

  function dateDisplay(item) {
    if (!item) {
      return;
    }
    let itemStr = "";
    itemStr += item[0].human;
    return itemStr;
  }

  // console.log(itemStr)

  async function postGameToDatabase() {
    try {
      let options = {
        url: "game/",
        method: "POST",
        data: {
          game_id: state.selectedGame.id,
          name: state.selectedGame.name,
          summary: state.selectedGame.summary,
          release_date: dateDisplay(state.selectedGame.release_dates),
          rating: Math.ceil(state.selectedGame.rating),
          platform: itemDisplay(state.selectedGame.platforms),
          genre: itemDisplay(state.selectedGame.genres),
          company: "None",
          completed: false,
          storyline: state.selectedGame.storyline,
        },
      };

      await request(options)

      let payload = {
        url: `addGameToUser/${state.selectedGame.id}/`,
        method: "POST",
        // data: {
        //   game_id: state.selectedGame.id,
        //   name: state.selectedGame.name,
        //   summary: state.selectedGame.summary,
        //   release_date: dateDisplay(state.selectedGame.release_dates),
        //   rating: Math.ceil(state.selectedGame.rating),
        //   platform: itemDisplay(state.selectedGame.platforms),
        //   genre: itemDisplay(state.selectedGame.genres),
        //   company: "None",
        //   completed: false,
        //   storyline: state.selectedGame.storyline,
        // },
      };
      let response = await request(payload);
      console.log(response);

      if (response.status === 200) {
        setAddedToMyGames(!addedToMyGames);
      }

      // alert("Game Successfully Added To My Games");
    } catch {
      alert("Uh oh there was an error");
    }
  }

  return (
    <div className="container">
      <GameNavbar />
      <div className="row">
        <div className="col-4 offset-4 text-center">
          <h2>{state.selectedGame.name}</h2>

          <h5>{itemDisplay(state.selectedGame.platforms)}</h5>
          <h5>{dateDisplay(state.selectedGame.release_dates)}</h5>
          <div className="pt-2">
            <button className="btn btn-secondary" onClick={postGameToDatabase}>
              <h5>{addedToMyGames ? 'Add to My Games' : 'Remove from My Games'}</h5>
            </button>
          </div>
        </div>
      </div>
      <div className="row pt-5 mt-3 justify-content-evenly ">
        <div className=" border border-dark   col-4 d-flex justify-content-start">
          <div className="col-12">
            <h1 className="text-center border-bottom">Summary</h1>
            <p className="text-center">{state.selectedGame.summary}</p>
          </div>
        </div>

        <div className=" border border-dark  col-4 d-flex justify-content-center">
          <div className="text-center">
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
              {/* <p>{companyDisplay(state.selectedGame.companies)}</p> */}
            </div>
            <div>
              <h5>Rating:</h5>
              <p>{Math.ceil(state.selectedGame.rating)}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row pt-5">
        <div className="col-8 offset-2 text-center border border-dark ">
          <h4>Storyline</h4>
          <p>{state.selectedGame.storyline}</p>
        </div>
      </div>
    </div>
  );
}


