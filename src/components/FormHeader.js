import React from 'react';
import Quote from './Quote';

function FormHeader() {
  return (
    <div className=' mt-24 bg-first  text-center' >
     
     
<div className="max-w-sm  bg-first  ">
    
    <div className="p-5 rounded-full  mt-6 ">
            <p className="mb-2  text-2xl tracking-tight text-gray-900 dark:text-white">
                KANYE WEST QUOTES
                </p>
        <p className="mb-3 text-md mt-8 font-normal text-white">
            YEEZUS!!
            </p>
                <Quote />
    </div>
</div>

      
    
    </div>
  );
  }


export default FormHeader;