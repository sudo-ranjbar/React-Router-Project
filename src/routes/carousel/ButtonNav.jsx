import React from 'react';
import { useSwiper } from 'swiper/react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function ButtonNav() {
  const swiper = useSwiper();
  return (
    <div className='z-30 flex items-center justify-between'>
      {/* <button className='cursor-pointer py-1 px-2 rounded-xl bg-blue-600 text-white' onClick={()=>swiper.slidePrev()}>prev</button>
      <button className='cursor-pointer py-1 px-2 rounded-xl bg-blue-600 text-white' onClick={()=>swiper.slideNext()}>next</button> */}


      <div onClick={() => swiper.slidePrev()} className='bg-blue-600 p-1 rounded-full cursor-pointer'>
        <FaChevronLeft className='size-4 text-white -translate-x-0.5' />
      </div>
      <div onClick={() => swiper.slideNext()} className='bg-blue-600 p-1 rounded-full cursor-pointer'>
        <FaChevronRight className='size46 text-white translate-x-0.5' />
      </div>
    </div>
  );
}

export default ButtonNav;