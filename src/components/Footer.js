import React from 'react';
import Twitter from "../assets/twitter.png"
import Bmc from "../assets/bmc-full-logo-no-background.png"

const Footer = () => {
    return (
        <footer className='bg-first py-[16px]  text-white text-md text-center'>
            <div className='flex justify-center mx-auto'>

                <a href="https://twitter.com/ealtugk" className='mr-4 ml-1 italic'>
                    <h6>2022 ealtugk</h6>
                </a>


                <a href="https://twitter.com/ealtugk">
                    <img src={Twitter} alt="Twitter logo" className="w-5 ml-4 h-5" />
                </a>
            </div>
            <div>
            <a href="hhttps://www.buymeacoffee.com/ealtugkirm8">
                    <img src={Bmc} alt="Buy me a Coffe" className="w-1/4 h-1/4 mt-12 mb-12 mx-auto" />
                </a>
            </div>

        </footer>
    );
};

export default Footer;
