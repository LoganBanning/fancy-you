import './App.css';
// import LandingPage from './LandingPage/Landingpage';

const alertMessage = () => {
  alert('Omg so muuuuuucccchhhh, call me girlllllllllll');
}

function App() {
    return (
      <div className='page-container'>
        <header className='header'>Colleen is hot, gorgeous, funny, and cute.</header>
        <div className='text-body'>
          <p className='text-landing-page'>I fucking fancy you, how much do I fancy you?</p>
        </div>
        <button onClick={alertMessage} className='hot-button'>FIND OUT</button>
      </div>
    );
}

export default App;
