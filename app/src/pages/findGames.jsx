import React, { useState } from "react";
import { useGlobalState } from "../context/GlobalState";
import Axios from "axios";
import GameNavbar from "../components/gameNavbar.jsx";
import GamePage from '../components/gamePage.jsx'
import { useNavigate } from 'react-router-dom';
import {
  BrowserRouter as Router,
  // Switch,
  // Route,
  Link,
  // Routes,
} from "react-router-dom";


function itemDisplay(item) {
  if (!item) {
    return;
  }
  let itemStr = "";
  for (let i = 0; i < item.length; i++) {
    itemStr += " " + item[i].name ;
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
  const [gameData, setGameData] = useState({})
  const [state, dispatch] = useGlobalState();
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  let inputField = document.getElementById("inputField");
  let navigate = useNavigate()
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
        `https://8000-lhalllhall-aincradbacke-leafyr8orcy.ws-us77.gitpod.io/games/search/${searchValue}`
      ).then((resp) => setData(resp.data));
      // dispatch({
      //   ...state,
      //   gameSearch: data
      // })
      inputField.value = "";
    } catch {
      alert('Search is Invalid')
    }
  };

  function clickHandler (game) {
    dispatch({
    ...state,
    selectedGame: game
  })
  navigate('/game')
  }



  // let gameScreen = (game) =>{
  //   // console.log('reach')
  //   // setGameData(game)
  //   return (
  //     <>
  //     <GamePage game={game}/>
  //     {console.log(game)} 
  //     {navigate('/game')}
  //     </>
      
  //   )
  // }

  console.log(data);
  let mappedData = data.map((game, i) => {
    return (
      <div key={game.id} className="col-4">
        <div className="text-center">
          <button onClick={() => 
          clickHandler(game)
        } >
            {game.name}
          </button>
          {/* <p> Genres: {itemDisplay(game.genres)}</p>
          <p> Platforms: {itemDisplay(game.platforms)}</p>
          <p> Release Date: {dateDisplay(game.release_dates)}</p> */}
          
          {/* <p>
            {" "}
            <button
              className="btn btn-light"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={"#collapseWidthExample" + i}
              aria-expanded="false"
              aria-controls={"collapseWidthExample" + i}
            >
              Summary
            </button>
          </p>
          <div className="d-flex justify-content-center">
            <div
              className="collapse collapse-vertical"
              id={"collapseWidthExample" + i}
            >
              <div className="card card-body" style={{ width: "300px" }}>
                {game.summary}
              </div>
            </div>
          </div> */}
        </div>
      </div>
    );
  });


  return (
    <div className="container" >
      <div>
        <GameNavbar />
      </div>
      <div className='row pt-5'>
        <h1>Search For Game</h1>
        {/* <input placeholder='Game' id="inputField" className='form-control' onChange={search} type="text" />
        <button className='btn btn-secondary' onClick={submit}>Search</button> */}
        <div className="input-group mb-3">
          <input type="text" className="form-control" onChange={search} id="inputField" placeholder="Game" aria-label="Recipient's username" aria-describedby="button-addon2"/>
          <button className="btn btn-outline-secondary" onClick={submit} type="button" id="button-addon2">Search</button>
        </div>
      </div>
      <div className="row pt-4 d-flex justify-content-center align-content-center">
        {mappedData}
      </div>
    </div>
  );
}
