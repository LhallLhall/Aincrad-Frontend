// import React from "react";
import GameNavbar from "../components/gameNavbar.jsx";
import { useGlobalState } from "../context/GlobalState.jsx";
import request from "../services/api.request.jsx";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";






export default function MyGames() {
  let [games, setGames] = useState([]);
  let [state, dispatch] = useGlobalState();
  let navigate = useNavigate();

  function imgCoverDisplay(cover, name) {
    // console.log(cover)
    let itemStr = `https://via.placeholder.com/286x381/603d60/FFFFFF?text=${name}`;
    // if (!cover) {
    //   return itemStr;
    // }
  
    itemStr = cover;
    // console.log(itemStr)
    let newStr = itemStr.replace("t_thumb", "t_original");
    return newStr;
  }

  useEffect(() => {
    async function grabUsersGames() {
      let payload = {
        url: "getUserGames",
        method: "GET",
      };
      let resp = await request(payload);
      setGames(resp.data);
    
    }
    grabUsersGames();
  }, []);

  function clickHandler(game) {
    dispatch({
      ...state,
      gameList: game.game,
      usergame: game.usergame
    });
    localStorage.setItem("data", JSON.stringify(game.game));
    localStorage.setItem("usergame", JSON.stringify(game.usergame));
    
    navigate("/myGames/game");
  }

  let mappedData = games.map((game) => {
    let img_path = `https://via.placeholder.com/286x381/603d60/FFFFFF?text=${game.game.name}`;

    if (game.game.cover.length > 0) {
      img_path = imgCoverDisplay(game.game.cover, game.game.name);
    }
    return (
      <div key={game.game.id} className="col-12 col-md-4 col-sm-6 mb-4 col-lg-3 d-flex justify-content-center">
        <div
          className=" rounded card bg-purple border border-dark"
          style={{ width: "18rem" }}
        >
          <img src={img_path} className="card-img-top  " />
          <div className="card-body">
            <h4 className="card-title text_color">{game.game.name}</h4>
            <p className="card-text text_color h6 text-muted">
              {game.game.platform}
            </p>
            <button className="btn btn-dark" onClick={() => clickHandler(game)}>
              See More
            </button>
          </div>
        </div>
      </div>
      // <div key={game.game.id} className=" py-3 border border-3 border-dark bg-purple col-12 col-md-4 col-sm-6">
      //   <div className="text-center">
      //     <h3 className="text_color">{game.game.name}</h3>
      //     <button
      //       className=" text_color btn btn-dark"
      //       onClick={() => clickHandler(game)}
      //     >
      //       See More
      //     </button>
      //     <p className="text_color m-0"> Genres: {game.game.genre}</p>
      //     <p className="text_color m-0"> Platforms: {game.game.platform}</p>
      //     <p className="text_color m-0"> Release Date: {game.game.release_date}</p>
      //   </div>
      // </div>
    );
  });
  // console.log(mappedData);

  return (
    <div className='findGamesHeight overflow-auto find_games_img'>
      <GameNavbar />
      <div className='container'>
      <div className='row border-bottom border-white border-3'>
      <h1 className='text-center text_color'>My Games</h1>
      </div>
      <div className="row pt-4 d-flex justify-content-center align-content-center overflow-auto">
        {mappedData}
      </div>
      </div>
    </div>
  );
}
