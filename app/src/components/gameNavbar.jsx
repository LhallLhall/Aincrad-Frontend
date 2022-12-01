import React from 'react'
import AuthService from '../services/auth.service'
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom"

export default function GameNavbar () {
    let navigate = useNavigate()

    function Logout () {
        navigate('/')
        AuthService.logout();
        window.location.reload()
    }

    return (
    <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <ul className="nav nav-pills">
                <li className='nav-item'>
                    <Link to='/findGames' className='nav-link'>Find Games</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/myFriends' className='nav-link'>My Friends</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/myGames' className='nav-link'>My Games</Link>
                </li>
                <li className="nav-item">
                    <button className='btn btn-primary' onClick={Logout}>Logout</button>
                </li>
                {/* <li className="nav-item">
                    <Link to='/login' className="nav-link">Login</Link>
                </li> */}
            </ul>
        </header>
    </div>
    )
}