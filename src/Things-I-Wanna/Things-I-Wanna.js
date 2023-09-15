import './Things-I-Wanna.css';
import { AiOutlineHeart } from 'react-icons/ai';

const ThingsIWanna = () => {
  return (
    <div className='things-i-like-container'>
    <h1 className='things-i-like-title'>Things I wanna do with you & for you.</h1>
      <div className='list-container'>
        <ul className='list-items-ul'>
          <li className='list-items'>
            <AiOutlineHeart className='heart-list'/>
            EVERYTHING! hahah 
          </li>
          <li className='list-items'>
            <AiOutlineHeart className='heart-list'/>
            Make you happy.
          </li>
          <li className='list-items'>
            <AiOutlineHeart className='heart-list'/>
            Take you to do fun things.
          </li>
          <li className='list-items'>
            <AiOutlineHeart className='heart-list'/>
            Appreciate you.
          </li>
          <li className='list-items'>
            <AiOutlineHeart className='heart-list'/>
            Expose you to new things and push you.  
          </li>
          <li className='list-items'>
            <AiOutlineHeart className='heart-list'/>
            Kiss your face, hold your hand and touch your butt.
          </li>
          <li className='list-items'>
            <AiOutlineHeart className='heart-list'/>
            Show you how special and amazing you are.  
          </li>
          <li className='list-items'>
            <AiOutlineHeart className='heart-list'/>
            Spend every second telling you that you're gorgeous. 
          </li>
          <li className='list-items'>
            <AiOutlineHeart className='heart-list'/>
            P.S. I really like like you.  
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ThingsIWanna;