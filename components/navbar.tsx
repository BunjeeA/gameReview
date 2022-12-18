import React from 'react';
import styles from '../styles/Home.module.css'

const Navbar: React.FC = () => {
  return (
    <nav className='navbar'>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="games">Games</a></li>
        <li><a href="reviews">Reviews</a></li>
        <li><a href="">Login/Register</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
