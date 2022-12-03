import React from 'react'
import GameNavbar from './gameNavbar.jsx'
import { useLocation } from 'react-router-dom'
import { useGlobalState } from '../context/GlobalState.jsx'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


export default function GamePage () {
    let [state, dispatch] = useGlobalState()
    let navigate = useNavigate()
    console.log(state)
    // let params = useParams()
    // games.find(game => game.id === params.id)
    window.addEventListener('DOMContentLoaded', (event) => {
        console.log('DOM fully loaded and parsed');
    });
    
    function itemDisplay(item) {
        if (!item) {
          return;
        }
        let itemStr = "";
        for (let i = 0; i < item.length; i++) {
          itemStr += "  " + item[i].name ;
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
    return (
        <div className="container">
            <GameNavbar/>
            <div className="row">
                <div className='col-4 offset-4 text-center'>
                    <div className='col-12'>
                        <h3>{state.selectedGame.name}</h3>
                    </div>
                    <div className='col-6'>
                        <h5>{itemDisplay(state.selectedGame.platforms)}</h5>
                    </div>
                    <div className='col-6'>
                        <h5>{dateDisplay(state.selectedGame.release_dates)}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}