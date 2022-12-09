import React from "react";
import { useGlobalState } from "../context/GlobalState";
import GameNavbar from "../components/gameNavbar";
import request from "../services/api.request";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import toast, {Toaster} from 'react-hot-toast'

export default function GameList () {
    let [state,] = useGlobalState();
    let navigate = useNavigate()
    let [isCompleted, setIsCompleted] = useState(state.usergame.completed)
    console.log(state)
    async function updateMyGameStatus (){
        let deleteOptions = {
            url: `addGameToUser/${state.gameList.game_id}/`,
            method: "DELETE"
            
        }
        let res = await request(deleteOptions)
        
        console.log(res)
        navigate('/myGames')
    }

    async function clickHandler () {
      try {

        // const putRequest = async function () {

          
          let payload = {
            url: `updateCompletion/${state.gameList.id}`,
            method: "PUT",
            data: {
              completed: !isCompleted
            }
            
          }
          let res = await request(payload)
          setIsCompleted(!isCompleted)
          console.log(res)
        // }
        // return putRequest
      } catch{
        alert("error on the put request")
      }
    }

    
    console.log("this is the user game"+state.usergame.completed)
    console.log("this is the is completed" + isCompleted)
    return (
        <div className="container">
        <GameNavbar />
        <div className="row">
          <div className="col-4 offset-4 text-center">
            <h2>{state.gameList.name}</h2>
  
            <h5>{state.gameList.platform}</h5>
            <h5>{state.gameList.release_date}</h5>
            <div className="pt-2">
              <button className="btn btn-secondary" onClick={updateMyGameStatus}>
                <h5>Remove from My Games</h5>
              </button>
              <button onClick={clickHandler}>
                <h5>{isCompleted ? "Completed" : "Click to Complete"}</h5>
              </button>
            </div>
          </div>
        </div>
        <div className="row pt-5 mt-3 justify-content-evenly ">
          <div className=" border border-dark align-items-center col-4 d-flex justify-content-start">
            <div className="col-12">
              <h4 className="text-center border-bottom">Summary</h4>
              <p className="text-center overflow-scroll">{state.gameList.summary}</p>
            </div>
          </div>
  
          <div className=" border border-dark align-items-center col-4 d-flex justify-content-center">
            <div className="text-center">
              <div>
                <h5>Genres:</h5>
                <p>{state.gameList.genre}</p>
              </div>
              {/* <div>
                <h5>Franchise/s:</h5>
                <p>{state.gameList.franchise}</p>
              </div> */}
              {/* <div>
                <h5>Company/s:</h5>
                <p>{companyDisplay(state.selectedGame.companies)}</p>
              </div> */}
              <div>
                <h5>Rating:</h5>
                <p>{state.gameList.rating}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-5">
          <div className="col-8 overflow-scroll offset-2 text-center border border-dark ">
            <h4>Storyline</h4>
            <p>{state.gameList.storyline}</p>
          </div>
          <div className='row text-center'>
            <div className="col pt-5 ">
              <button><h4 className=''>Start Timer</h4></button>
            </div>
          </div>
        </div>
        
      </div>
    )

}