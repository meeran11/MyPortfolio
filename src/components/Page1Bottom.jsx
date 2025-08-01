import React from 'react'
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const Page1Bottom = () => {
    useGSAP(function(){
        gsap.to('#banner img',{
            rotate : 360,
            duration : 5,
            repeat : -1,
            ease : 'linear'
        })
    })
  return (
    <div className='mb-4  w-full px-10 lg:px-20 xl:px-36 2xl:px-60 2xl:py-2 flex flex-col sm:flex-row items-center justify-between rounded-b-xl'>
      <div>
        <h2 className='text-xl sm:text-2xl 2xl:text-4xl font-[anzo2] text-gray-200 '>WEBSITE DEVELOPER</h2>
      </div>
      <div id='banner' className='flex justify-center items-center gap-1 2xl:gap-4'>
        <img src="assets/fiverr.png" alt="" className='w-16 h-16 sm:w-20 sm:h-20 2xl:w-32 2xl:h-32 object-contain' />
        <img src="assets/up.png" alt="" className='w-12 h-16 sm:w-20 sm:h-16 2xl:w-24 2xl:h-28 object-contain' />
      </div>
    </div>
  )
}

export default Page1Bottom