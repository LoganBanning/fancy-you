import './Nav.css';
import { AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='nav-container'>
      <Link className='home-link' to='/'>
        <AiOutlineHeart className='heart-home' />
      </Link>
      <Link className='nav-links' to='/things-i-like'>Things I Like</Link>
    </nav>
  );
}

export default Nav;