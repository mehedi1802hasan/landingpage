import React from 'react';
import fb from "/fb.png";
import insta from "/insta.png";
import twiteer from "/twiteer.png";
import banner from "/ban.png";

const GetInTouch = () => {
  return (
    <div className='w-full md:flex lg:flex justify-end bg-black'>
      <div className='md:w-1/2 lg:w-1/2 text-center p-10 '>
        <h1 className='text-3xl text-pink-400'>Get In Touch</h1>
        <p className='text-white mt-6 mb-10'>
          The process of creating a website can be stressful and time-consuming, but Sven and his team were so much fun to work with. The process of creating a website can be stressful and time-consuming, were so much fun to work with.
        </p>
        <div className='flex items-center justify-center gap-6 mb-8'>
          <img src={twiteer} alt="twiteer" />
          <img src={fb} alt="fb" />
          <img src={insta} alt="insta" />
        </div>
      </div>
      <div className='md:w-1/2 lg:w-1/2' style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat' }}>
        <div className='flex mx-auto justify-center items-center '>
          
       <div className='w-96  my-7 ml-5 md:mr-0 lg:mrnpm-0 mr-5 md:ml-0 lg:ml-0 bg-[rgba(0,0,0,0.5)] '> 
      <div  className='text-center p-5'>
      <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xs rounded-md" /> 
        <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xs my-3 rounded-md" />  
        <input type="text" placeholder="Message" className="input input-bordered w-full h-20 max-w-xs rounded-md" /> 
        <button className='bg-[#F676AB] rounded-[30px] w-80 h-10 mt-4 mb-6 text-white'>Request Call</button>   </div> </div> 
      </div>
      </div>
    </div>
  );
};

export default GetInTouch;
