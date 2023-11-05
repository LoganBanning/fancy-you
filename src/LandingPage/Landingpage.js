import './Landingpage.css';
import React from 'react';
// require('dotenv').config();

const alertMessage = () => {
  alert("You're the prettiest girl I've ever seen in my whole life.  I feel like the luckiest guy in the world to get to spend time with you and I appreciate you so fucking much.  And I just wanted to say that I love you.");
}

const LandingPage = (props) => {
  const { REACT_APP_NAME } = process.env;
  return (
    <div className='page-container'>
      <header className='header'><span className='landing-page-name'>{`${REACT_APP_NAME}`}</span> is hot, gorgeous, funny, and cute.</header>
      <div className='text-body'>
        <p className='text-landing-page'>I bloody fancy you, how much do I fancy you?</p>
      </div>
      <button onClick={alertMessage} className='button-56'>FIND OUT</button>
    </div>
  );
};

export default LandingPage;