import React from 'react';
import { useGlobalState } from "../context/GlobalState";


export default function findGames() {
    const [ state, dispatch ] = useGlobalState();
    console.log(state)
    return (
        <div>
            <h1>IT WORKS YES</h1>
            <h1> {state.currentUser.user_id} </h1>
            <h1>{state.currentUser.username}</h1>
        </div>
    )
}