// import React from "react";
import GameNavbar from "../components/gameNavbar.jsx";
import { useGlobalState } from "../context/GlobalState.jsx";
import request from "../services/api.request.jsx";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function MyGames() {
  let [games, setGames] = useState([]);
  let [state, dispatch] = useGlobalState();
  let navigate = useNavigate()

  useEffect(() => {
    async function grabUsersGames() {
      let payload = {
        url: "getUserGames",
        method: "GET",
      };
      let resp = await request(payload);
      setGames(resp.data);
      // if (!games){
      //   return;
      // }
    }
    grabUsersGames();
  }, []);
  
  console.log(games);

  function clickHandler(game) {
    dispatch({
      ...state,
      gameList: game,
    });
    navigate("/myGames/game");
  }

  let mappedData = games.map((game) => {
    return(
    
    <div key={game.id} className="col-12 col-md-4 col-sm-6">
      <div className="text-center">
        <h3>{game.name}</h3>
        <button
          className="btn btn-secondary"
            onClick={() => clickHandler(game)}
          >
          See More
        </button>
        <p> Genres: {game.genre}</p>
        <p className=""> Platforms: {game.platform}</p>
        <p> Release Date: {game.release_date}</p>
      </div>
    </div>
  
    )
})
console.log(mappedData)

  return (
    <div>
      <GameNavbar />
      <div className="row pt-4 d-flex justify-content-center align-content-center overflow-auto" >
        {mappedData}
        </div>
    </div>
  );
}
