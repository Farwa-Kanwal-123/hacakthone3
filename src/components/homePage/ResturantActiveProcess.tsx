import React from 'react';
import { IoPlayOutline } from "react-icons/io5";
import { Great_Vibes } from 'next/font/google';

const greatVibes = Great_Vibes({
  subsets: ['latin'],  
  weight: '400',       
  variable: '--font-great-vibes',
});


const ResturantActiveProcess = () => {
  return (
    <section className=' max-w-[1320px] mx-auto my-8 md:my-12 '>
    <div className="bg-[url('/bg-resturant.png')] bg-cover bg-center w-full h-[400px] lg:h-[500px] flex items-center justify-end px-4 sm:px-8 lg:px-16">

      <div className="text-right text-white max-w-[705px] ">
        <p className={`${greatVibes.className} text-[24px]  sm:text-[32px] text-[#FF9F0D] mb-4`}>
          Restaurant Active Process
        </p>
        <h2 className="font-bold text-3xl max-w-[705px] sm:text-4xl lg:text-5xl leading-tight mb-6">
          <span className='text-[#FF9F0D]'>We</span> Document Every Food
          Bean Process until it is saved
        </h2>
        <p className='font-inter text-[16px] max-w-[651px] leading-relaxed mb-6'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna.
        </p>
        <div className="flex justify-end gap-4">
          <button className="w-[190px] h-[60px] text-center border-[#FF9F0D] text-white border-[1px] rounded-[25px] text-lg">
            Show More
          </button>
          <button className="flex items-center gap-2 text-[#ffffff] text-lg">
            <IoPlayOutline className="text-[#FF9F0D]" />
            Watch Video
          </button>
        </div>
      </div>
    </div>
    </section>
  );
};

export default ResturantActiveProcess;