import React from 'react';
//import './Headerx.css'
import "bootstrap/dist/css/bootstrap.min.css";

function Headerx() {
  return (
    <div className="container">
    <header className="d-flex justify-content-between py-3 mb-4 border-bottom">
      <img src='./src/assets/DQL_.png' width='50px'></img>

      <ul className="nav nav-pills">
        <li className="nav-item"><a href="#" className="nav-link active" aria-current="page">Home</a></li>
        <li className="nav-item"><a href="#" className="nav-link">About</a></li>
      </ul>
    </header>
    </div>
  )
}

export default Headerx