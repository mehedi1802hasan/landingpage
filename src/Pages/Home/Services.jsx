import React from 'react';
import frame from "/frame.png";
import yellowService from "/yellowService.png";
import blueService from "/blueService.png";
import teelService from "/teelService.png";
const Services = () => {
    return (
        <div className='max-w-screen-lg mx-auto mb-8'>
            <h3 className='text-center text-6xl my-12 font-bold text-pink-400'>Services</h3>
            <div >
                <div className='lg:flex md:flex justify-between items-center space-y-5'>
                <div className='relative'>
  <img className='w-[244px] h-[304px] mx-auto' src={frame} alt="" />
  <div className='font-bold text-white absolute bottom-4 left-1/2 transform -translate-x-1/2 text-container'>
    <h3 className='text-lg'>Luxury Nails</h3>
    <p>Many types</p>
  </div>
</div>
<div className='relative'>
  <img className='w-[244px] h-[304px] mx-auto' src={frame} alt="" />
  <div className='font-bold text-white absolute bottom-4 left-1/2 transform -translate-x-1/2 text-container'>
    <h3 className='text-lg'>Essential Nails</h3>
    <p>Many types</p>
  </div>
</div>
<div className='relative'>
  <img className='w-[244px] h-[304px] mx-auto' src={frame} alt="" />
  <div className='font-bold text-white absolute bottom-4 left-1/2 transform -translate-x-1/2 text-container'>
    <h3 className='text-lg'>Instragram Nails</h3>
    <p>Many types</p>
  </div>
</div>
                </div>
                <div className='lg:flex md:flex ml-20 md:ml-0 lg:ml-0 justify-between items-center my-5'>
              <img className='' src={yellowService} alt="" />
<img src={teelService} alt="" />
<img src={blueService} alt="" />
                 
                </div>
                <div className='lg:flex md:flex ml-20 md:ml-0 lg:ml-0 justify-between items-center my-5'> 
                <img src={yellowService} alt="" />

                <img src={teelService} alt="" />

                <img src={blueService} alt="" />

</div>
                    <div className='lg:flex md:flex ml-20 md:ml-0 lg:ml-0 justify-between items-center'>
                    <img src={yellowService} alt="" />

                    
                    <img src={blueService} alt="" />

</div>
            </div>
        </div>
    );
};

export default Services;