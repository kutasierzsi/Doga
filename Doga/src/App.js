import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';

function App() {
  const [accommodations, setAccommodations] = useState([]);

  useEffect(() => {
    axios.get('http://nodejs.sulla.hu/data')
      .then(res => {
        setAccommodations(res.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className='container'>
      
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              
                <span className="nav-link" href="/App.js">Főoldal</span>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Login.js">Admin</a>
              <BrowserRouter>
                <Routes>
                  <Route path="/Login.js" element={<Login />}/>
                </Routes>
              </BrowserRouter>
            </li>
          </ul>
        </div>
      </nav>
      <h1 className="text-center">Szállások</h1>
        {accommodations.map(accommodation => (
          <Card key={accommodation.id} data={accommodation} />
        ))}
        
    </div>
  );
}

export default App;
