import React from "react";
import "remixicon/fonts/remixicon.css";

const Header = ({ onMenuClick }) => {
  return (
    <header className="fixed w-full top-3 z-50 px-6 py-4 flex items-center justify-end gap-1">
      <button
        onClick={() => {
          window.open(
            "https://mail.google.com/mail/?view=cm&fs=1&to=meeran.official1255@gmail.com&su=Hiring%20Opportunity&body=Hi%20Meeran%2C%0D%0A%0D%0AI%27m%20interested%20in%20hiring%20you%20for%20a%20project.%20Let%27s%20connect%20and%20discuss%20further.%0D%0A%0D%0AThanks!",
            "_blank"
          );
        }}
        className="px-5 py-2 bg-gray-200 text-black rounded-full border-2 border-black hover:bg-white hover:text-black font-semibold uppercase text-sm sm:text-base transition-all shadow-md"
      >
        Hire Me
      </button>
      <i
        onClick={onMenuClick}
        className="ri-more-2-fill text-white hover:text-yellow-400 text-2xl cursor-pointer transition-colors"
      ></i>
    </header>
  );
};

export default Header;
