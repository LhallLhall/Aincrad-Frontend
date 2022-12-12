import React, { useState } from "react";
import GameNavbar from "./gameNavbar.jsx";
import { useGlobalState } from "../context/GlobalState.jsx";
import request from "../services/api.request.jsx";
import toast, { Toaster } from "react-hot-toast";

export default function GamePage() {
  let [addedToMyGames, setAddedToMyGames] = useState(true);
  let [state] = useGlobalState();
  const [ localCheck ] = useState(() => {
    return JSON.parse(localStorage.getItem("data"))
  });
  

  function itemDisplay(item) {
    if (!item) {
      return;
    }
    let itemStr = "";
    for (let i = 0; i < item.length; i++) {
      itemStr += "  " + item[i].name;
    }
    return itemStr;
  }

  function urlGrab (item){
    if(!item){
      return
    }
    let urlStr = ''
    urlStr += item[0].url
    
    let newStr = urlStr.replace("t_thumb", "t_screenshot_big");
    
    return newStr
  }


  function dateDisplay(item) {
    if (!item) {
      return;
    }
    let itemStr = "";
    itemStr += item[0].human;
    return itemStr;
  }

  

  async function postGameToDatabase() {
    try {
      console.log(addedToMyGames);
      if (addedToMyGames === false) {
        let deleteOptions = {
          url: `addGameToUser/${state.selectedGame.id}/`,
          method: "DELETE",
        };
        let res = await request(deleteOptions);
        
        setAddedToMyGames(!addedToMyGames);
        toast.success("Successfully Deleted");
        return;
      }

      let cover2 = state.selectedGame.cover.url
      

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
          cover: state.selectedGame.cover.url,
          
        },
      };

      await request(options);

      let payload = {
        url: `addGameToUser/${state.selectedGame.id}/`,
        method: "POST",
      };
      let response = await request(payload);
      

      if (response.status === 200) {
        setAddedToMyGames(!addedToMyGames);
        toast.success("Successfully Added!");
      }

      
    } catch {
      toast.error("That Game May Already Be Added");
    }
  }
  let image = `https://via.placeholder.com/1800x1272/603d60/FFFFFF?text=${state.selectedGame.name}`
  if(localCheck.artworks){
    image = urlGrab(localCheck.artworks)
  }
  let imgLink = "https://www.freepnglogos.com/uploads/plus-icon/plus-icon-download-png-and-vector-17.png"
  if(addedToMyGames === false){
    imgLink = "https://cdn-icons-png.flaticon.com/512/95/95068.png"
  }
  if (localCheck){
    return (
      <div className="findGamesHeight find_games_img overflow-scroll">
      <div className="container " >
        <GameNavbar />
        <div className="row pt-5">
          <div className="col-12 col-md-7  d-flex justify-content-center align-items-center">
            <h2 className=' text-center pb-2'>{localCheck.name}</h2>
          </div>
          <div className='col-12 col-md-5 d-flex  justify-content-center align-items-center'>
            <img className=' gamePageImg blur mb-3' src={image}></img>
          </div>
        </div>
        <div className='row bg-purple rounded d-flex justify-content-center'>
            <div className='col-10 col-md-2 bg-dark rounded m-3'>
              <h5 className=' pt-1 text-center text_color'>Franchise/s</h5>
              <p className='text-center pb-2 text_color'>{itemDisplay(localCheck.franchises)}</p>
            </div>
            <div className='col-10 col-md-3 bg-dark rounded m-3'>
              <h5 className='pt-1 text-center text_color'>Platform/s</h5>
              <p className="text-center pb-2 text_color">{itemDisplay(localCheck.platforms)}</p>
            </div>
            <div className='col-10 col-md-2 bg-dark rounded m-3'>
              <h5 className='pt-1 text-center text_color'>Release Date</h5>
              <p className="text-center pb-2 text_color">{dateDisplay(localCheck.release_dates)}</p>
            </div>
            <div className='col-10 col-md-2 bg-dark rounded m-3'>
              <h5 className='pt-1 text-center text_color'>Genre/s</h5>
              <p className="text-center pb-2 text_color">{itemDisplay(localCheck.genres)}</p>
            </div>
            <div className='col-10 col-md-1 mb-3 mb-md-0 d-flex justify-content-center align-items-center'>
              <img src={imgLink}  className="imgResize" onClick={postGameToDatabase}>
              {/* <h5 className="p-0 m-0">
                {addedToMyGames ? "Add to My Games" : "Remove from My Games"}
              </h5> */}
            </img>
            </div>
        </div>
        
        {/* <div className="pt-4 text-center">
          <button className="btn btn-dark" onClick={postGameToDatabase}>
            <h5 className="p-0 m-0">
              {addedToMyGames ? "Add to My Games" : "Remove from My Games"}
            </h5>
          </button>
        </div> */}
        {/* <div className='d-flex justify-content-center'> */}
        <div className="row pt-2 mt-4 ">
          <div className="col-12 col-md-12  p-0 bg-purple rounded">
            <h1 className='mainFont col-3 pt-2 ps-3 pb-0  text_color '>Summary</h1>
            <p className='pt-3 border-top border-dark border-4 px-3 text_color '>{localCheck.summary}</p>
          </div>
        </div>
        <div className="row pt-2 mt-4  ">
          <div className="col-12 col-md-12  p-0 bg-purple rounded ">
            <h1 className='mainFont col-3 pt-2 ps-3 pb-0   text_color '>Storyline</h1>
            <p className='pt-3 border-top border-dark border-4 px-3 text_color '>{localCheck.storyline}</p>
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
      <div className="container " >
        <GameNavbar />
        <div className="row pt-5">
          <div className="col-12 col-md-7  d-flex justify-content-center align-items-center">
            <h2 className=' text-center pb-2'>{state.selectedGame.name}</h2>
          </div>
          <div className='col-12 col-md-5 d-flex  justify-content-center align-items-center'>
            <img className=' gamePageImg blur  mb-3' src={image}></img>
          </div>
        </div>
        <div className='row bg-purple rounded d-flex justify-content-center'>
            <div className='col-10 col-md-2 bg-dark rounded m-3'>
              <h5 className=' pt-1 text-center text_color'>Franchise/s</h5>
              <p className='text-center pb-2 text_color'>{itemDisplay(state.selectedGame.franchises)}</p>
            </div>
            <div className='col-10 col-md-3 bg-dark rounded m-3'>
              <h5 className='pt-1 text-center text_color'>Platform/s</h5>
              <p className="text-center pb-2 text_color">{itemDisplay(state.selectedGame.platforms)}</p>
            </div>
            <div className='col-10 col-md-2 bg-dark rounded m-3'>
              <h5 className='pt-1 text-center text_color'>Release Date</h5>
              <p className="text-center pb-2 text_color">{dateDisplay(state.selectedGame.release_dates)}</p>
            </div>
            <div className='col-10 col-md-2 bg-dark rounded m-3'>
              <h5 className='pt-1 text-center text_color'>Genre/s</h5>
              <p className="text-center pb-2 text_color">{itemDisplay(state.selectedGame.genres)}</p>
            </div>
            <div className='col-10 col-md-1 mb-3 mb-md-0 d-flex justify-content-center align-items-center'>
              <img src={imgLink}  className="imgResize" onClick={postGameToDatabase}>
              {/* <h5 className="p-0 m-0">
                {addedToMyGames ? "Add to My Games" : "Remove from My Games"}
              </h5> */}
            </img>
            </div>
        </div>
        
        {/* <div className="pt-4 text-center">
          <button className="btn btn-dark" onClick={postGameToDatabase}>
            <h5 className="p-0 m-0">
              {addedToMyGames ? "Add to My Games" : "Remove from My Games"}
            </h5>
          </button>
        </div> */}
        {/* <div className='d-flex justify-content-center'> */}
        <div className="row pt-2 mt-4 ">
          <div className="col-12 col-md-12  p-0 bg-purple rounded">
            <h1 className='mainFont col-3 pt-2 ps-3 pb-0  text_color '>Summary</h1>
            <p className='pt-3 border-top border-dark border-4 px-3 text_color '>{state.selectedGame.summary}</p>
          </div>
        </div>
        <div className="row pt-2 mt-4  ">
          <div className="col-12 col-md-12  p-0 bg-purple rounded ">
            <h1 className='mainFont col-3 pt-2 ps-3 pb-0   text_color '>Storyline</h1>
            <p className='pt-3 border-top border-dark border-4 px-3 text_color '>{state.selectedGame.storyline}</p>
          </div>
        </div>
        {/* </div> */}
      </div>
        <Toaster />
    </div>
  );
}


