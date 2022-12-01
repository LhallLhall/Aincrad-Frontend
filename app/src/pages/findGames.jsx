import React, {useState } from 'react';
import { useGlobalState } from "../context/GlobalState";
import Axios from 'axios'
import GameNavbar from '../components/gameNavbar.jsx'


function itemDisplay(item){
    if(!item){
        return;
    }
    let itemStr = "";
    for(let i = 0; i < item.length; i++){
        itemStr += item[i].name + " / "
    }
    return itemStr;
}

function dateDisplay(item){
    if(!item){
        return;
    }
    let itemStr = ""
    itemStr += item[0].human
    return itemStr;
}

export default function FindGames() {
    const [ state, dispatch ] = useGlobalState();
    const [data, setData] = useState([])
    const [searchValue, setSearchValue] = useState('')
    let inputField = document.getElementById('inputField')
    // useEffect(() => {
    //     Axios.get('https://8000-lhalllhall-aincradbacke-leafyr8orcy.ws-us77.gitpod.io/games/api/')
    //         .then((resp) => setData(resp.data));
    // }, [])
    // console.log(data)

    
    const search = (e) => {
        setSearchValue(e.target.value);
        };
    
    const submit = () => {
        Axios.get(`https://8000-lhalllhall-aincradbacke-leafyr8orcy.ws-us77.gitpod.io/games/search/${searchValue}`)
        .then((resp) => setData(resp.data));
        inputField.value=''

        
        
    }

    // if(data.length === 0){
    //     return;
    // }
    console.log(data);
    let mappedData = data.map((game, i) => {
        return (
            <div key={game.id}>
                <div>
                    <h4>{game.name}</h4>
                    <p> Genres: {itemDisplay(game.genres)}</p>
                    <p> Platforms: {itemDisplay(game.platforms)}</p>
                    <p> Release Date: {dateDisplay(game.release_dates)}</p>
                    <p> Summary: {game.summary}</p>
                </div>
            </div>
        )
    })
            
    // for (let i = 0; i < data.length; i++) {
    //     return (
    //         <div>
    //             <p>{data[i].name}</p>
    //         </div>
    //     )
    // }
    
    return (
        <div>
            <div>
                <GameNavbar />
            </div>
            <div>
                <h1 >Search For Game</h1>
                <input id='inputField' onChange={search} type='text'/>
                <button onClick={submit}>Search</button>
            </div>
            <div>
                {mappedData}
            </div>
        </div>
    )
}