import React from "react";
import { useGlobalState } from "../context/GlobalState";
import GameNavbar from "../components/gameNavbar";
import request from "../services/api.request";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import StopWatch from "../components/stopWatch";
import toast, { Toaster } from "react-hot-toast";
// import toast, {Toaster} from 'react-hot-toast'

export default function GameList() {
  let [state] = useGlobalState();
  let navigate = useNavigate();
  let [isCompleted, setIsCompleted] = useState(state.usergame.completed);
  let [hoursPlayed, setHoursPlayed] = useState(0)
  let inputBox = document.getElementById("inputBox")
  let p = document.getElementById("hours")
  console.log(state);
  console.log(typeof hoursPlayed)


  async function updateMyGameStatus() {
    let deleteOptions = {
      url: `addGameToUser/${state.gameList.game_id}/`,
      method: "DELETE",
    };
    let res = await request(deleteOptions);

    console.log(res);
    navigate("/myGames");
  }

  async function clickHandler() {
    try {
      let payload = {
        url: `updateCompletion/${state.gameList.id}`,
        method: "PUT",
        data: {
          completed: !isCompleted,
        },
      };
      let res = await request(payload);
      setIsCompleted(!isCompleted);
      console.log(res);
      toast.success("Successfully Updated");
    } catch {
      toast.error("error on the put request");
    }
  }

  async function updateHours(){
    try{
      let payload = {
        url: `updateGameHours/${state.gameList.id}`,
        method: "PUT",
        data: {
          hours_played: parseInt(hoursPlayed)
        }
      }
      let resp = await request(payload);
      console.log(resp)
      toast.success("Successfully Updated");
        p.value += parseInt(hoursPlayed) 
      inputBox.value = ''
        hours += parseInt(hoursPlayed)
    } catch {
      toast.error("error updating hours players")
    }
  } 

  function updateHoursPlayed (e) {
    setHoursPlayed(e.target.value)
  }

  // let image = `https://via.placeholder.com/1800x1272/603d60/FFFFFF?text=${state.gameList.name}`
  // if(state.gameList.artworks){
  //   image = state.gameList.artworks
  // }
  let hours = state.usergame.hours_played
  p = state.usergame.hours_played
  
  
  return (
    <div className="findGamesHeight find_games_img overflow-scroll">
      <div className="container ">
        <GameNavbar />
        <div className="row pt-5">
          <div className="col-12   d-flex justify-content-center align-items-center">
            <h2 className=" text-center  pb-2">{state.gameList.name}</h2>
          </div>
          {/* <div className='col-12 col-md-5 d-flex  justify-content-center align-items-center'>
            <img className=' gamePageImg blur  mb-3' src={image}></img>
          </div> */}
        </div>
        <div className="row bg-purple rounded d-flex justify-content-center">
          <div className="col-10 col-md-2 bg-dark rounded m-3">
            <h5 className=" pt-1 text-center text_color">Franchise/s</h5>
            <p className="text-center pb-2 text_color">
              {state.gameList.franchise}
            </p>
          </div>
          <div className="col-10 col-md-3 bg-dark rounded m-3">
            <h5 className="pt-1 text-center text_color">Platform/s</h5>
            <p className="text-center pb-2 text_color">
              {state.gameList.platform}
            </p>
          </div>
          <div className="col-10 col-md-2 bg-dark rounded m-3">
            <h5 className="pt-1 text-center text_color">Release Date</h5>
            <p className="text-center pb-2 text_color">
              {state.gameList.release_date}
            </p>
          </div>
          <div className="col-10 col-md-2 bg-dark rounded m-3">
            <h5 className="pt-1 text-center text_color">Genre/s</h5>
            <p className="text-center pb-2 text_color">
              {state.gameList.genre}
            </p>
          </div>
          <div className="col-10 col-md-1 d-flex justify-content-center align-items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png"
              className="imgResize" onClick={(updateMyGameStatus)}
            ></img>
          </div>
        </div>
        <div className="row text-center bg-purple mt-4 d-flex justify-content-center align-items-center m-1">
          <div className="col-4 ">
            <h5 className="text_color">Hours Played</h5>
            <p className="text_color" id='hours'></p>
          </div>
          <div className="col-4">
            <button className="btn btn-dark" onClick={clickHandler}>
              <h5 className="">
                {isCompleted ? "Completed" : "Click to Complete"}
              </h5>
            </button>
          </div>
          <div className="col-4 text_color">
            {/* <h5>Add Hours</h5> */}
            <input className='input-box' id="inputBox"type='number' placeholder="Add Hours" onChange={updateHoursPlayed}></input>
            <button className='btn btn-dark' onClick={updateHours}>Submit Hours</button>
            {/* <StopWatch /> */}
          </div>
        </div>

        <div className="row pt-2 mt-4 ">
          <div className="col-12 col-md-12  p-0 bg-purple rounded">
            <h1 className="mainFont col-3 pt-2 ps-3 pb-0  text_color ">
              Summary
            </h1>
            <p className="pt-3 border-top border-dark border-4 px-3 text_color ">
              {state.gameList.summary}
            </p>
          </div>
        </div>
        <div className="row pt-2 mt-4  ">
          <div className="col-12 col-md-12  p-0 bg-purple rounded ">
            <h1 className="mainFont col-3 pt-2 ps-3 pb-0   text_color ">
              Storyline
            </h1>
            <p className="pt-3 border-top border-dark border-4 px-3 text_color ">
              {state.gameList.storyline}
            </p>
          </div>
        </div>
        {/* </div> */}
      </div>
      <Toaster />
    </div>
  );
}
