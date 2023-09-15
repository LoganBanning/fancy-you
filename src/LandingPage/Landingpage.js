import './Landingpage.css';

const alertMessage = () => {
  alert("You're the prettiest girl I've ever seen in my whole life.  I feel like the luckiest guy in the world to get to spend time with you and I appreciate you so fucking much.");
}

const LandingPage = () => {
  return (
    <div className='page-container'>
      <header className='header'>Colleen is hot, gorgeous, funny, and cute.</header>
      <div className='text-body'>
        <p className='text-landing-page'>I bloody fancy you, how much do I fancy you?</p>
      </div>
      <button onClick={alertMessage} className='hot-button'>FIND OUT</button>
    </div>
  );
};

export default LandingPage;