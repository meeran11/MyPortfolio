import { useGSAP } from '@gsap/react'
import { gsap } from "gsap";
import React from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Page2 = () => {

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function(){
    gsap.from(".rotateText",{
      transform : 'rotateX(-80deg)',
      opacity : 0,
      duration : 1,
      stagger : 1,
      scrollTrigger: {
        trigger : '.rotateText',
        start: "top 60%",
        end : "top -270%",
        srub : 2
      }
    })
  })

  return (
    <div id='section2' className='w-full overflow-x-hidden bg-black text-center p-4 sm:p-16 text-white'>
        <div className='rotateText'>
        <h1 className='mt-8 sm:mt-20 text-[16vw] sm:text-[40vw] leading-[14vw] sm:leading-[35vw] text-white font-[anzo1] uppercase'>impactful</h1>
        </div>
        <div className='rotateText'>
            <h1 className='text-[40vw] leading-[35vw] text-white font-[anzo1] uppercase'>design</h1>
        </div>
        <div className='rotateText'>
            <h1 className='text-[40vw] leading-[35vw] text-white font-[anzo1] uppercase'>is the</h1>
        </div>
        <div className='rotateText'>
            <h1 className='text-[40vw] leading-[35vw] text-white font-[anzo1] uppercase'>design</h1>
        </div>
        <div className='rotateText'>
            <h1 className='text-[40vw] leading-[35vw] text-white font-[anzo1] uppercase'>that</h1>
        </div>
        <div className='rotateText'>
            <h1 className='text-[40vw] leading-[35vw] text-white font-[anzo1] uppercase'>works</h1>
        </div>

        <div className='h-[1px] w-1/3 relative left-1/2 -translate-x-1/2 mt-20 bg-black'></div>

    </div>
  )
}

export default Page2