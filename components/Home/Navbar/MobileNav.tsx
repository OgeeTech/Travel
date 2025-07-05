import Link from 'next/link'
import React from 'react'
import { navLinks } from '@/constant/constant'
import { CgClose } from 'react-icons/cg'

type Props = {
  showNav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  const scrollToSection = (url: string) => {
    closeNav(); // Close mobile nav first
    setTimeout(() => {
      if (url.startsWith('#')) {
        const element = document.querySelector(url);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    }, 300); // Small delay to allow nav to close
  };

  return (
    <div className=''>
      {/* overlay */}
      <div className={`fixed ${navOpen} inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen`} onClick={closeNav}>
      </div>
      
      {/* navlinks */}
      <div className={`text-white ${navOpen} fixed justify-center flex flex-col h-full transform transition-all duration-500 
      delay-300 w-[80%] sm:w-[60%] bg-rose-900 space-y-6 z-[1050]`}>
        {navLinks.map((link) => {
          return (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.url)}
              className='text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px] hover:text-yellow-300 transition-colors duration-200'
            >
              {link.label}
            </button>
          );
        })}
        {/* close button */}
        <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 cursor-pointer hover:text-yellow-300 transition-colors duration-200'/>
      </div>
    </div>
  )
}

export default MobileNav