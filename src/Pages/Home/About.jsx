import React from 'react';
import myphoto from '/myphoto.png';

const About = () => {
  return (
    <div className='  text-white lg:flex md:flex '>
      <img className='max-w-full mx-auto h-auto' src={myphoto} alt="My Photo" />
      <div className=' bg-[#F676AB] flex items-center'>
        <div className='px-12 mb-4 md:mb-0 lg:mb-0 '>
          <h3 className='text-5xl mb-8 mt-8 font-bold'>About Me</h3>
          <p className='mb-8'>
            Hello, my name is Jessica and I am a Boise nail artist! I've poured my heart and soul into perfecting my craft, and I'm dedicated to bringing your nail dreams to life. From chic and simple to bold and intricate designs, I'm here to make sure your nails reflect your unique style.{' '}
            <br />
            <br />
            I specialize in acrylic nails but I also work with hard gel, luminary, dip, and other nail techniques. Nail art always has a place in my heart, and I can't say no to hand-drawn art or 3D designs. Using only the highest quality products, I ensure your nails not only look stunning but also stay healthy, and you leave confident and happy. Your satisfaction is my ultimate goal, and I'm committed to going above and beyond to exceed your expectations.{' '}
            <br />
            <br />
            I can't wait to embark on a journey of nail artistry together, and let's make all of your nail dreams come true!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
