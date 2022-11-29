import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import Axios from 'axios'
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  const [data, setData] = useState([])
  const [page, setPage ] = useState('Home')

  useEffect(() => {
    Axios.get('https://8000-lhalllhall-aincradbacke-leafyr8orcy.ws-us77.gitpod.io/games/api/')
        .then((resp) => setData(resp.data));
  }, [])
console.log(data)
  return (
    <div>
      <div>
      <input type="text" placeholder='Username'/>
      </div>
      <div>
      <input type="text" placeholder="Password"/>
      </div>
      <div>
        <button className='btn btn-primary'>Click to Register</button>
      </div>
    </div>
  );
}

export default App;
