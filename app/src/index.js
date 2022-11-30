import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Register from './components/register.jsx'
import Navbar from './components/navbar.jsx' 
import Login from './pages/login.jsx'
import {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

// function APICall (){
//   const [data, setData] = useState([])
//   const [page, setPage ] = useState('Home')
  
//   useEffect(() => {
//     Axios.get('https://8000-lhalllhall-aincradbacke-leafyr8orcy.ws-us77.gitpod.io/games/api/')
//         .then((resp) => setData(resp.data));
//   }, [])
//   console.log(data)
// }

root.render(
<Router>
  <Routes>
    <Route path="/" element={<App />}>
    </Route>
    <Route path="/login" element={<Login />} />
    <Route />

      {/* <Route path="register" element={<Register />} /> */}
      {/* <Route path="profile" element={<Profile />} /> */}
  </Routes>
</Router>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
