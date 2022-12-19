import React from 'react';
import FormHeader from './FormHeader';
import Khr from "../assets/kh-right.png"
import Khl from "../assets/kh-left.png"
// import Hand from "../assets/kanye-hand.png"
import Light from  "../assets/light.png"


function Form() {
    return (

        <div className='bg-second'>
            <div className='flex bg-second  mx-auto justify-center' >
                <img className="mx-auto z-10 animate-spin w-1/4 h-1/4" src={Khr} alt="" />
                <FormHeader />
                <img className="mx-auto z-10 animate-spin w-1/4 h-1/4" src={Khl} alt="" />
            </div>
            <div className=' mx-auto bg-second w-1/2 h-1/2 '>
                <img className=" " src={Light} alt="" />
           
            </div>
        </div>
    );
}


export default Form;