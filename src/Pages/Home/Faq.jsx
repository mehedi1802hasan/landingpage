import React from 'react';

const Faq = () => {
    return (
        <div className='max-w-screen-lg mx-auto mb-8'>
            <h3 className='text-center text-6xl  mt-16 font-bold text-[#F676AB]  '>FAQ</h3>
            <div className='p-20' >
            <div className="collapse ">
  <input type="radio" name="my-accordion-1" checked="checked" /> 
  <div className="collapse-title text-xl font-medium">
  What do you like better?
  </div>
  <div className="collapse-content"> 
    <p className='border border-[#F676AB] text-[#F676AB] p-3 rounded-md'>The process of creating a website can be stressful and time consuming, but Sven and his team were so much fun to work with. The process of creating a website can be stressful and time consuming, were so much fun to work with. </p>
  </div>
</div>
<div className="collapse ">
  <input type="radio" name="my-accordion-1" /> 
  <div className="collapse-title text-xl font-medium">
What kind of service do you offer?  </div>
  <div className="collapse-content"> 
    <p className='border border-[#F676AB] text-[#F676AB] p-3 rounded-md'>The process of creating a website can be stressful and time consuming, but Sven and his team were so much fun to work with. The process of creating a website can be stressful and time consuming, were so much fun to work with. </p>
  </div>
</div>
<div className="collapse ">
  <input type="radio" name="my-accordion-1" /> 
  <div className="collapse-title text-xl font-medium">
What area do you service?  </div>
  <div className="collapse-content"> 
    <p className='border border-[#F676AB] text-[#F676AB] p-3 rounded-md'>The process of creating a website can be stressful and time consuming, but Sven and his team were so much fun to work with. The process of creating a website can be stressful and time consuming, were so much fun to work with. </p>
  </div>
</div>
<div className="collapse ">
  <input type="radio" name="my-accordion-1" /> 
  <div className="collapse-title text-xl font-medium">
How soon are you available?  </div>
  <div className="collapse-content"> 
    <p className='border border-[#F676AB] text-[#F676AB] p-3 rounded-md'>always</p>
  </div>
</div>
            </div>
        </div>
    );
};

export default Faq;