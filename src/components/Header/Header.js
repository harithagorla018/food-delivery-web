import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
        <div className='header-contents'>
            <h2>Order your Favourite Food here</h2>
            <p>Don't hesitate to pay us a visit if you share our passion for fresh dishes cooked with only the best ingredients. We promise an experience that will keep you coming back for more!</p>
            <button>View Menu</button>
        </div>
    </div>
  )
}

export default Header