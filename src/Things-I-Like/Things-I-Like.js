import './Things-I-Like.css';
import { AiOutlineHeart } from 'react-icons/ai';

const ThingsILike = () => {
  return (
    <div className='things-i-like-container'>
    <h1 className='things-i-like-title'>Things I like about you.</h1>
      <div className='list-container'>
        <ul className='list-items-ul'>
          <li className='list-items'>
            <AiOutlineHeart className='heart-list'/>
            EVERYTHING! hahah
          </li>
          <li className='list-items'>
            <AiOutlineHeart className='heart-list'/>
            Your hot face.
          </li>
          <li className='list-items'>
            <AiOutlineHeart className='heart-list'/>
            How you love British shows/culture.
          </li>
          <li className='list-items'>
            <AiOutlineHeart className='heart-list'/>
            That you are so kind and sweet.
          </li>
          <li className='list-items'>
            <AiOutlineHeart className='heart-list'/>
            You are always positive and light up the room.
          </li>
          <li className='list-items'>
            <AiOutlineHeart className='heart-list'/>
            Your beautiful smile.
          </li>
          <li className='list-items'>
            <AiOutlineHeart className='heart-list'/>
            That we can talk for hours.
          </li>
          <li className='list-items'>
            <AiOutlineHeart className='heart-list'/>
            You are down to Earth and we seem so similar in so many ways.  
          </li>
          <li className='list-items'>
            <AiOutlineHeart className='heart-list'/>
            P.S. I like like you.  
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ThingsILike;