import React, { useState } from "react";
import { useGlobalState } from "../context/GlobalState";
import Axios from "axios";
import GameNavbar from "../components/gameNavbar.jsx";
// import GamePage from "../components/gamePage.jsx";
import { useNavigate } from "react-router-dom";
// import {
//   BrowserRouter as Router,
//   // Switch,
//   // Route,
//   Link,
//   // Routes,
// } from "react-router-dom";

function itemDisplay(item) {
  if (!item) {
    return;
  }
  let itemStr = "";
  for (let i = 0; i < item.length; i++) {
    itemStr += " " + item[i].name;
  }
  return itemStr;
}

function dateDisplay(item) {
  if (!item) {
    return;
  }
  let itemStr = "";
  itemStr += item[0].human;
  return itemStr;
}

export default function FindGames(props) {
  // const [gameData, setGameData] = useState({});
  const [state, dispatch] = useGlobalState();
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  let inputField = document.getElementById("inputField");
  let navigate = useNavigate();
  // useEffect(() => {
  //     Axios.get('https://8000-lhalllhall-aincradbacke-leafyr8orcy.ws-us77.gitpod.io/games/api/')
  //         .then((resp) => setData(resp.data));
  // }, [])
  // console.log(data)

  const search = (e) => {
    setSearchValue(e.target.value);
  };

  const submit = () => {
    try {
      Axios.get(
        `https://8000-lhalllhall-aincradbacke-leafyr8orcy.ws-us78.gitpod.io/games/search/${searchValue}`
      ).then((resp) => setData(resp.data));
      // dispatch({
      //   ...state,
      //   gameSearch: data
      // })
      inputField.value = "";
    } catch {
      alert("Search is Invalid");
    }
  };

  function clickHandler(game) {
    dispatch({
      ...state,
      selectedGame: game,
    });
    navigate("/game");
  }


  console.log(data);
  let mappedData = data.map((game, i) => {
    return (
      <div key={game.id} className="col-12 col-md-4 col-sm-6">
        <div className="text-center">
          <h3>{game.name}</h3>
          <button className='btn btn-secondary' onClick={() => clickHandler(game)}>See More</button>
          <p> Genres: {itemDisplay(game.genres)}</p>
          <p className=''> Platforms: {itemDisplay(game.platforms)}</p>
          <p> Release Date: {dateDisplay(game.release_dates)}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="findGamesHeight overflow-auto">
      <div>
        <GameNavbar />
      </div>
      <div className='container'>
        <div className="row pt-5">
          <h1>Search For A Game</h1>
          
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              onChange={search}
              id="inputField"
              placeholder="Game"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn_color"
              onClick={submit}
              type="button"
              id="button-addon2"
            >
              <div className="text_color">Search</div>
            </button>
          </div>
        </div>
        <div className="row pt-4 d-flex justify-content-center align-content-center ">
          {mappedData}
        </div>
      </div>
    </div>
  );
}
