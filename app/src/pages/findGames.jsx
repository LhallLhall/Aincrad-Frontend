import React, { useState } from "react";
import { useGlobalState } from "../context/GlobalState";
import Axios from "axios";
import GameNavbar from "../components/gameNavbar.jsx";
// import GamePage from "../components/gamePage.jsx";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { API_URL } from "../services/auth.constants";
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

function imgCoverDisplay(cover, name) {
  let itemStr = `https://via.placeholder.com/286x381/603d60/FFFFFF?text=${name}`;
  if (!cover) {
    return itemStr;
  }

  itemStr = cover.url;
  let newStr = itemStr.replace("t_thumb", "t_original");
  // console.log(newStr);

  // console.log(itemStr[1])
  return newStr;
}

function imgArtworksDisplay(artworks) {
  // if()
  let itemStr = artworks[0].url;
  let newStr = itemStr.replace("t_thumb", "t_original");

  // console.log(itemStr[1])
  return newStr;
}

function grabHeight(item) {
  if (!item) {
    return;
  }
  let itemInt = 0;
  item += item[0].height;
  return itemInt;
}

export default function FindGames(props) {
  const [state, dispatch] = useGlobalState();
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  let inputField = document.getElementById("inputField");
  let navigate = useNavigate();

  const search = (e) => {
    setSearchValue(e.target.value);
  };

  const submit = () => {
    try {
      Axios.get(`${API_URL}search/${searchValue}`).then((resp) =>
        setData(resp.data)
      );
      inputField.value = "";
    } catch {
      toast.error("Search Was Invalid");
    }
  };

  function clickHandler(game) {
    dispatch({
      ...state,
      selectedGame: game,
    });
    localStorage.setItem("data", JSON.stringify(game));
    navigate("/game");
  }

  let mappedData = data.map((game, i) => {
    let img_path = `https://via.placeholder.com/286x381/603d60/FFFFFF?text=${game.name}`;

    if (game.cover) {
      img_path = imgCoverDisplay(game.cover, game.name);
    }
    return (
      <div
        key={game.name + i}
        className=" col-12 col-lg-3 col-md-4 col-sm-6 mb-4 d-flex justify-content-center"
      >
        <div
          className=" card bg-purple border border-dark"
          style={{ width: "18rem" }}
        >
          <img src={img_path} className="card-img-top " />
          <div className="card-body">
            <h4 className="card-title text_color">{game.name}</h4>
            <p className="card-text text_color h6 text-muted">
              {itemDisplay(game.platforms)}
            </p>
            <button className="btn btn-dark" onClick={() => clickHandler(game)}>
              See More
            </button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div
      className="findGamesHeight find_games_img overflow-auto"
      style={{ backgroundBlendMode: "color-dodge" }}
    >
      <div className="">
        <GameNavbar />
      </div>
      <div className="container">
        <div className="row pt-5">
          <h1 className="pb-3 text_color">Search For A Game</h1>

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
              className="btn btn-dark"
              onClick={submit}
              type="button"
              id="button-addon2"
            >
              <div className="text_color">Search</div>
            </button>
          </div>
        </div>
        <div className="">
          {/* <img  src={`//images.igdb.com/igdb/image/upload/t_original/ar4ij.jpg`}></img> */}
          <div className="row pt-4 d-flex justify-content-center align-content-center ">
            {mappedData}
          </div>
        </div>
      </div>
      {/* <div>{"FOOTER HERE"}</div> */}
      <Toaster />
    </div>
  );
}
