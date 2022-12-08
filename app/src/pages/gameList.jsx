import React from "react";
import { useGlobalState } from "../context/GlobalState";
import GameNavbar from "../components/gameNavbar";
import request from "../services/api.request";
import { useNavigate } from "react-router-dom";

export default function GameList () {
    let [state,] = useGlobalState();
    let navigate = useNavigate()

    async function deleteUserToGameConnectionFromDatabase (){
        let deleteOptions = {
            url: `addGameToUser/${state.gameList.game_id}/`,
            method: "DELETE"
            
        }
        let res = await request(deleteOptions)
        console.log(res)
        navigate('/myGames')
    }

    return (
        <div className="container">
        <GameNavbar />
        <div className="row">
          <div className="col-4 offset-4 text-center">
            <h2>{state.gameList.name}</h2>
  
            <h5>{state.gameList.platform}</h5>
            <h5>{state.gameList.release_date}</h5>
            <div className="pt-2">
              <button className="btn btn-secondary" onClick={deleteUserToGameConnectionFromDatabase}>
                <h5>Remove from My Games</h5>
              </button>
            </div>
          </div>
        </div>
        <div className="row pt-5 mt-3 justify-content-evenly ">
          <div className=" border border-dark   col-4 d-flex justify-content-start">
            <div className="col-12">
              <h1 className="text-center border-bottom">Summary</h1>
              <p className="text-center">{state.gameList.summary}</p>
            </div>
          </div>
  
          <div className=" border border-dark  col-4 d-flex justify-content-center">
            <div className="text-center">
              <div>
                <h5>Genres:</h5>
                <p>{state.gameList.genre}</p>
              </div>
              {/* <div>
                <h5>Franchise/s:</h5>
                <p>{state.gameList.franchise}</p>
              </div> */}
              <div>
                <h5>Company/s:</h5>
                {/* <p>{companyDisplay(state.selectedGame.companies)}</p> */}
              </div>
              <div>
                <h5>Rating:</h5>
                <p>{state.gameList.rating}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-8 offset-2 text-center border border-dark ">
            <h4>Storyline</h4>
            <p>{state.gameList.storyline}</p>
          </div>
        </div>
      </div>
    )

}