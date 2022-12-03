import React from 'react'
import GameNavbar from './gameNavbar.jsx'
import { useLocation } from 'react-router-dom'
export default function GamePage ({game}) {
    console.log(game)
    // const location = useLocation()
    // console.log(location)
    return (
        <div>
            <GameNavbar/>
            <h1>hello</h1>
        </div>
    )
}