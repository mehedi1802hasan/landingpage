import React from 'react';
import map from '/map.png';
import email from '/email.png'

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-neutral text-neutral-content">
  <nav>
    <header className="font-bold text-xl">About Us</header> 
    <a className="link link-hover">Company</a>
    <a className="link link-hover">What we do</a>
    <a className="link link-hover">Help center</a>
    <a className="link link-hover">Contract</a>
  </nav> 
  <nav>
    <header className="font-bold text-xl">About Us</header> 
    <a className="link link-hover">Company</a>
    <a className="link link-hover">What we do</a>
    <a className="link link-hover">Help center</a>
    <a className="link link-hover">Contract</a>
  </nav> 
  <nav>
    <header className="font-bold text-xl">About Us</header> 
    <a className="link link-hover">Company</a>
    <a className="link link-hover">What we do</a>
    <a className="link link-hover">Help center</a>
    <a className="link link-hover">Contract</a>
  </nav>
  <nav>
  <header className="  flex items-center gap-3 mt-2 mb-2"> <img className='h-8' src={map} alt="" />
  <h3 className=' '>Lorem ipsum dolor sit amet consectetur.</h3>
  </header> 
  <div className='flex items-center gap-3 '> <img className='h-5' src={email} alt="" />  <h3 className=' '>Lorem ipsum dolor sit amet consectetur.</h3></div>
  </nav>
</footer>
      </div>
    );
};

export default Footer;