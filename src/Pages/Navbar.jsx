import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex items-center md:gap-10 gap-2 lg:gap-10'>
          <div >
            <img className='   h-24 md:w-80 lg:w-80 w-10  ' src="https://i.ibb.co/1LR0sKm/Vector.png" alt="" />
          </div>
          <div className='flex items-center md:gap-28 lg:gap-32 gap-2  -mt-10 text-pink-400 font-semibold mx-5 '>
            <Link to='/'>Home</Link>
            <Link to='/'>Services</Link>
            <Link to='/'>About</Link>
            <Link to='/'>FAQ</Link>
            <Link to='/'>Contact</Link>
          </div>
        </div>
    );
};

export default Navbar;