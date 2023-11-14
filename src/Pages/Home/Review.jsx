import React from 'react';
import review from '/review.png'
const Review = () => {
    return (

               <div className='max-w-screen-lg mx-auto mb-12 mt-16'>
            <h3 className='text-center text-6xl my-12 font-bold text-pink-400'>Review</h3>
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
    );
};

export default Review;