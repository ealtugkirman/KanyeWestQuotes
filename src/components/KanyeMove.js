import React from 'react';
// import KanyeHead from "../assets/kanye-head.png"
import Khr from "../assets/kh-right.png"
import Khl from "../assets/kh-left.png"

function KanyeMove() {
  return (
    <div>
      <div className='flex  bg-red-500'>
        <img className="mx-auto animate-spin w-1/5 h-1/5" src={Khr} alt="" />
        <img className="mx-auto animate-spin w-1/5 h-1/5" src={Khl} alt="" />

      </div>
      
    </div>
  );
}

export default KanyeMove;
