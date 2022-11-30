import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import Axios from 'axios'
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import { Outlet } from "react-router-dom";
import { GlobalProvider } from './context/GlobalState';
import Navbar from './components/navbar.jsx';
import Register from './components/register.jsx'
import LearnMore from './components/learnMore.jsx'


function App() {
  


  return (
    <GlobalProvider>
      <Navbar />
      <LearnMore/>
      <Register />
      <Outlet />
    </GlobalProvider>
  )

  }
  
  export default App;
  // <Navbar data={data} setData={setData} page={page} setPage={setPage}/>,
  // <Register data={data} setData={setData} page={page} setPage={setPage}/>
