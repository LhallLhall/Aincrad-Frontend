import React, { useState } from "react";
import GameNavbar from "./gameNavbar.jsx";
import { useGlobalState } from "../context/GlobalState.jsx";
import request from "../services/api.request.jsx";
import toast, { Toaster } from "react-hot-toast";

export default function GamePage() {
  // let [game, setGame] = useState();
  let [addedToMyGames, setAddedToMyGames] = useState(true);
  let [state] = useGlobalState();
  // let navigate = useNavigate();
  console.log(state);

  function itemDisplay(item) {
    if (!item) {
      return;
    }
    let itemStr = "";
    for (let i = 0; i < item.length; i++) {
      itemStr += "  " + item[i].name;
    }
    // console.log(itemStr);
    return itemStr;
  }

  function urlGrab (item){
    if(!item){
      return
    }
    let urlStr = ''
    for(let i =0; i < item.length; i++){
      urlStr += item[0].url
    }
  }

  // function companyDisplay(item) {
  //   if (!item) {
  //     return;
  //   }
  //   let companyStr = "";
  //   for (let i = 0; i < item.length; i++) {
  //     // companyStr += ' ' + item[0].company.name
  //     for (let y = 0; y < item[i].length; y++) {
  //       console.log(item[y].name);
  //       companyStr += " " + item[y].name;
  //     }
  //   }
  // }

  function dateDisplay(item) {
    if (!item) {
      return;
    }
    let itemStr = "";
    itemStr += item[0].human;
    return itemStr;
  }

  // console.log(itemStr)

  async function postGameToDatabase() {
    try {
      console.log(addedToMyGames);
      if (addedToMyGames === false) {
        let deleteOptions = {
          url: `addGameToUser/${state.selectedGame.id}/`,
          method: "DELETE",
        };
        let res = await request(deleteOptions);
        console.log(res);
        setAddedToMyGames(!addedToMyGames);
        toast.success("Successfully Deleted");
        return;
      }

      let cover2 = state.selectedGame.cover.url
      console.log(cover2)

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
          // artworks: urlGrab(state.selectedGame.artworks)
        },
      };

      await request(options);

      let payload = {
        url: `addGameToUser/${state.selectedGame.id}/`,
        method: "POST",
      };
      let response = await request(payload);
      console.log(response);

      if (response.status === 200) {
        setAddedToMyGames(!addedToMyGames);
        toast.success("Successfully Added!");
      }

      // alert("Game Successfully Added To My Games");
    } catch {
      toast.error("That didn't work.");
    }
  }

  return (
    <div className="findGamesHeight overflow-scroll">
      <div className="container">
        <GameNavbar />
        <div className="row">
          <div className="col-4 offset-4 text-center">
            <h2 className='pb-2'>{state.selectedGame.name}</h2>
          </div>
        </div>
        <div className="row bg-purple rounded d-flex justify-content-center align-items-center">
          <div className="col-12 border-dark border-start border-end col-md-2 pb-m-3 d-flex justify-content-center align-items-top">
            <div className="row">
              <div className="col-12 text-center">
                <label className="text_color">Platforms</label>
              </div>
              <div className="col-12 text-center">
                <p className="text_color m-0">
                  {itemDisplay(state.selectedGame.platforms)}
                </p>
              </div>
            </div>
          </div>
          <div className="col-2 h-100 border-dark border-start border-end d-flex justify-content-center align-items-top">
            <div className="row">
              <div className="col-12 text-center">
                <label className=" text_color pb-2">Release</label>
              </div>
              <div className="col-12 text-center">
                <p className=" text_color m-0">
                  {dateDisplay(state.selectedGame.release_dates)}
                </p>
              </div>
            </div>
          </div>
          <div className="col-2 h-100 border-dark border-start border-end d-flex justify-content-center align-items-top">
            <div className="row">
              <div className="col-12 text-center">
                <label className=" text_color pb-2">Genres</label>
              </div>
              <div className="col-12 text-center">
                <p className=" text_color m-0">
                  {itemDisplay(state.selectedGame.genres)}
                </p>
              </div>
            </div>
          </div>
          <div className="col-2 h-100 border-dark border-start border-end d-flex justify-content-center align-items-top">
            <div className="row">
              <div className="col-12 text-center">
                <label className=" text_color pb-2">Franchises</label>
              </div>
              <div className="col-12 text-center">
                <p className=" text_color m-0">
                  {itemDisplay(state.selectedGame.franchises)}
                </p>
              </div>
            </div>
          </div>
          <div className="col-2 h-100 border-dark border-start border-end d-flex justify-content-center align-items-top">
            <div className="row">
              <div className="col-12 text-center">
                <label className=" text_color pb-2">Rating</label>
              </div>
              <div className="col-12 text-center">
                <p className="text_color m-0">
                  {Math.ceil(state.selectedGame.rating)}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-4 text-center">
          <button className="btn btn-dark" onClick={postGameToDatabase}>
            <h5 className="p-0 m-0">
              {addedToMyGames ? "Add to My Games" : "Remove from My Games"}
            </h5>
          </button>
        </div>
        <div className="row pt-5 mt-3 justify-content-evenly ">
          <div className=" bg-purple border border-dark border-3 col-8 d-flex justify-content-start">
            <div className="col-12">
              <h1 className="text-center text_color border-bottom border-dark border-2">Summary</h1>
              <p className="text-center text_color ">{state.selectedGame.summary}</p>
            </div>
          </div>
        </div>
        <div className="row pt-5 mt-3 justify-content-evenly ">
          <div className="col-10 bg-purple text-center border border-3 border-dark ">
            <h1 className='text-center border-bottom text_color border-dark border-2'>Storyline</h1>
            <p className='text-center text_color '>{state.selectedGame.storyline}</p>
          </div>
        </div>
        <Toaster />
      </div>
    </div>
  );
}


