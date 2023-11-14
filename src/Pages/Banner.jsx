import React from 'react';
import banner from "/banner1.png";
import fb from "/fb.png"
import insta from "/insta.png"
import twiteer from "/twiteer.png"
import vector from "/vector.png"
const Banner = () => {


    return (
        <div>
            <div className='md:flex lg:flex items-center space-y-16  py-5 px-10 justify-center'>
                <div className='md:w-1/2 lg:w-1/2 mx-auto'  >

<img className='md:w-[420px] lg:w-[420px]  lg:-ml-10 md:-ml-10 left-[58px] ' src={banner} alt="" />
               </div>
                <div className='1/2 md:mr-20 lg:mr-20'>
                    <div >
                        <h3 className='text-6xl font-bold text-pink-400  uppercase text-center'>Blessed By <br /> <span className=' text-7xl text-center '>Juicy</span></h3>
                        <p className='text-2xl font-bold text-pink-400 text-center mt-3'> Halo Nails</p>
                        <p className='text-pink-400 text-center'> Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Asperiores quas quo dolores <br /> iusto deserunt nihil ducimus officia natus  <br />officiis! Natus provident sunt eum.
                        </p>
                        <h3 className='mt-6 mb-5 mx-auto w-[200px] h-[48px] bg-[#F676AB] text-white rounded-[30px] text-center'><button className='mt-[10px] text-lg '>Text Me</button></h3>
                        <div className='flex items-center justify-center gap-6 mb-8'>
                            <img src={twiteer} alt="twiteer" />
                            <img src={fb} alt="fb" />
                            <img src={insta} alt="insta" />
                        </div>             </div>
                </div>
            </div>
            <div className='md:flex items-center justify-between bg-black'>
                   <div className=' p-9'>
                    <h3 className='text-pink-400 text-center text-3xl'>Best Quality <br /> Products</h3>
                    <p className='text-white text-center my-6 max-w-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus vel rerum vitae sit aperiam dolorum, harum earum reprehenderit corrupti!  Ab, optio. Saepe, totam!</p>
                    <h3 className='mt-6 mb-5 mx-auto w-[200px] h-[48px] bg-[#F676AB] text-white rounded-[30px] text-center'><button className='mt-[10px] text-lg '>Text Me</button></h3>
                    </div>
            
                <div>
                    <div className='grid grid-cols-3 gap-1 mx-1 '>
                        <img className='w-[161px] h-[123px]'  src={vector} alt="" />
                        <img className='w-[161px] h-[123px]' src={vector} alt="" />
                        <img className='w-[161px] h-[123px]' src={vector} alt="" />
                        <img className='w-[161px] h-[123px]' src={vector} alt="" />
                        <img className='w-[161px] h-[123px]' src={vector} alt="" />
                        <img className='w-[161px] h-[123px]' src={vector} alt="" />
                        <img className='w-[161px] h-[123px]' src={vector} alt="" />
                        <img className='w-[161px] h-[123px]' src={vector} alt="" />
                        <img className='w-[161px] h-[123px]' src={vector} alt="" />
                    </div>
                </div>
                <div><img className='w-[400px] h-[369px]' src={vector} alt="" /></div>
            </div>
        </div>
    );
};

export default Banner;