import './App.css';
import LandingPage from './LandingPage/Landingpage';
import Nav from './Nav/Nav';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ThingsILike from './Things-I-Like/Things-I-Like';
import ThingsIWanna from './Things-I-Wanna/Things-I-Wanna';

function App() {
    return (
      <div className='page-container'>
        <Nav />
        <Routes>
          <Route path="/" element={ <LandingPage /> } />
          <Route path="/things-i-like" element={ <ThingsILike /> } />
          <Route path='/things-i-wanna' element={ <ThingsIWanna /> } />
        </Routes>
      </div>
    );
}

export default App;
