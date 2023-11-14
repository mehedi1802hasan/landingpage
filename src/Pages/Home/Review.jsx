import React from 'react';
import review from '/review.png'
const Review = () => {
  const customStyle = {
    backgroundColor: 'rgba(246, 118, 171, 0.14)',
    // Add any other styles as needed
  };
    return (

              <div className='p-1 md:p-0 lg:p-0' style={customStyle}> 
                 <div  className='max-w-screen-lg mx-auto mb-12 lg:mt-9 md:mt-9'>
            <h3 className='text-center text-6xl p-12 font-bold text-[#F676AB]'>Review</h3>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3'> 
            <img src={review} alt="" />
            <img src={review} alt="" />
            <img src={review} alt="" />
            <img src={review} alt="" />
            <img src={review} alt="" />
            <img src={review} alt="" />
            <img src={review} alt="" />
            <img src={review} alt="" />
            <img src={review} alt="" />
          </div>
        </div>
              </div>
    );
};

export default Review;