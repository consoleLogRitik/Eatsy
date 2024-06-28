import React from 'react';
import './Card.css'; // Import the CSS file for styling

const ShimmerCard= (itr) => {
  return (
    <div className="card-container" key={itr}>
      <div className="shimmer"></div>
      <div className="image"></div>
      <div className="text-container">
        <div className="text"></div>
        <div className="text"></div>
      </div>
    </div>
  );
};

const ShimmerUi = ()=>{
    const arr = [1,2,3,4,5,6,7,8,9]
    return(
        <><div className='shimmer-cards'>
         {arr.map(itr => <ShimmerCard key = {itr}/>)}
         </div>
        </>
    )
}

export default ShimmerUi;
