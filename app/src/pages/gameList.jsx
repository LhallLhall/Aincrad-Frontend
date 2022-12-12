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
  let [totalHours, setTotalHours] = useState(state.usergame.hours_played)
  const [ localCheck ] = useState(() => {
    return JSON.parse(localStorage.getItem("data"))
  });

  const [localUser] = useState(() =>{
    return JSON.parse(localStorage.getItem("usergame"))
  })
  const [localHours] = useState(() => {
    return JSON.parse(localStorage.getItem("hours"))
  })

  let inputBox = document.getElementById("inputBox")
  
  async function updateMyGameStatus() {
    let deleteOptions = {
      url: `addGameToUser/${state.gameList.game_id}/`,
      method: "DELETE",
    };
    let res = await request(deleteOptions);

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
      
      toast.success("Successfully Updated");
    } catch {
      toast.error("error on the put request");
    }
  }

  async function updateHours(){
    try{
      let hours = totalHours + parseInt(hoursPlayed) 
      console.log(typeof hours)
      if(state.gameList){
        let payload = {
          url: `updateGameHours/${state.gameList.id}`,
          method: "PUT",
          data: {
            hours_played: hours
          }
        }
        let item ={
          "hours_played": hours
        }
        localStorage.setItem('hours', JSON.stringify(item))
      }
      setTotalHours(hours)
      
      let payload = {
        url: `updateGameHours/${localCheck.id}`,
        method: "PUT",
        data: {
          hours_played: hours
        }
      }
      let resp = await request(payload);
      console.log(resp)
      toast.success("Successfully Updated");
      inputBox.value = ''
      
    } catch {
      toast.error("Error Updating Hours")
    }
  } 

  function updateHoursPlayed (e) {
    setHoursPlayed(e.target.value)
  }
  
  if (localCheck && localUser){
    return (
      <div className="findGamesHeight find_games_img overflow-scroll">
      <div className="container ">
        <GameNavbar />
        <div className="row pt-5">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <h2 className=" text-center mainFont text_color pb-2">{localCheck.name}</h2>
          </div>
          
        </div>
        <div className="row bg-purple mb-2 rounded d-flex justify-content-center">
          <div className="col-10 col-md-2 bg-dark rounded m-3">
            <h5 className=" pt-1 text-center text_color">Franchise/s</h5>
            <p className="text-center pb-2 text_color">
              {localCheck.franchise}
            </p>
          </div>
          <div className="col-10 col-md-3 bg-dark rounded m-3">
            <h5 className="pt-1 text-center text_color">Platform/s</h5>
            <p className="text-center pb-2 text_color">
              {localCheck.platform}
            </p>
          </div>
          <div className="col-10 col-md-2 bg-dark rounded m-3">
            <h5 className="pt-1 text-center text_color">Release Date</h5>
            <p className="text-center pb-2 text_color">
              {localCheck.release_date}
            </p>
          </div>
          <div className="col-10 col-md-2 bg-dark rounded m-3">
            <h5 className="pt-1 text-center text_color">Genre/s</h5>
            <p className="text-center pb-2 text_color">
              {localCheck.genre}
            </p>
          </div>
          <div className="col-10 col-md-1 d-flex justify-content-center align-items-center">
            <img alt=''
              src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png"
              className="imgResize" onClick={(updateMyGameStatus)}
            ></img>
          </div>
        </div>
        <div className="row p-3 rounded text-center bg-purple my-4 d-flex justify-content-center align-items-center ">
          <div className="col-6 col-md-4 ">
            <h5 className="text_color">Hours Played</h5>
            <p className="text_color" id='hours'>{totalHours}</p>
          </div>
          <div className="col-6 col-md-4">
            <button className="btn btn-dark" onClick={clickHandler}>
              <h5 className="">
                {isCompleted ? "Completed" : "Click to Complete"}
              </h5>
            </button>
          </div>
          <div className="col-12 col-md-4  text_color">
            {/* <h5>Add Hours</h5> */}
            <input className='input-box mt-2  ' id="inputBox"type='number' placeholder="Add Hours" onChange={updateHoursPlayed}></input>
            <button className='btn btn-dark m-1 ' onClick={updateHours}>Submit Hours</button>
            {/* <StopWatch /> */}
          </div>
        </div>

        <div className="row mt-2 ">
          <div className="col-12 col-md-12 p-0 bg-purple rounded">
            <h1 className="mainFont col-3 pt-2 ps-3 pb-0  text_color ">
              Summary
            </h1>
            <p className="pt-3 border-top border-dark border-4 px-3 text_color ">
              {localCheck.summary}
            </p>
          </div>
        </div>
        <div className="row pt-2 mt-4  ">
          <div className="col-12 col-md-12  p-0 bg-purple rounded ">
            <h1 className="mainFont col-3 pt-2 ps-3 pb-0   text_color ">
              Storyline
            </h1>
            <p className="pt-3 border-top border-dark border-4 px-3 text_color ">
              {localCheck.storyline}
            </p>
          </div>
        </div>
        {/* </div> */}
      </div>
      <Toaster />
    </div>
    )
  }

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
            <p className="text_color" id='hours'>{totalHours}</p>
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
