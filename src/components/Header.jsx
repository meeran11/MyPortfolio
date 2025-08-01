import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Header = ({ onMenuClick }) => {
  function handleClick(){
    if (onMenuClick) onMenuClick();
  }

  return (
    <div className='lg:px-16 mt-3 fixed w-full z-50 p-5 sm:p-6 flex flex-row items-center justify-between space-x-2'>
      <div className='absolute right-12 top-8'>
      <button
        onClick={() => {
          window.open(
            "https://mail.google.com/mail/?view=cm&fs=1&to=meeran.official1255@gmail.com&su=Hiring%20Opportunity&body=Hi%20Meeran%2C%0D%0A%0D%0AI%27m%20interested%20in%20hiring%20you%20for%20a%20project.%20Let%27s%20connect%20and%20discuss%20further.%0D%0A%0D%0AThanks!",
            "_blank"
          );
        }}
        className='lg:text-xl bg-black text-white text-base sm:text-lg px-3 sm:px-4 py-2 hover:bg-white hover:text-black rounded-full border-4 uppercase font-semibold'
      >
        Hire Me
      </button>
      <i
        onClick={handleClick}
        className="hover:text-black ri-more-2-fill text-2xl sm:text-3xl text-white cursor-pointer"
      ></i>
      </div>
    </div>
  )
}


export default Header 