'use client';
import React, { useEffect, useState } from 'react'
import { TbAirBalloon } from 'react-icons/tb'
import { navLinks } from '@/constant/constant'
import { HiBars3BottomRight } from 'react-icons/hi2'

type Props = {
    openNav: () => void
}

const Nav = ({ openNav }: Props) => {
    const [navBg, setNavBg] = useState(false);

    useEffect(() => {
        const handler = () => {
            if(window.scrollY >= 90) setNavBg(true);
            if (window.scrollY < 90) setNavBg(false);
        };
        window.addEventListener('scroll', handler);
        return () => window.removeEventListener('scroll', handler);
    }, []);

    const scrollToSection = (url: string) => {
        if (url.startsWith('#')) {
            const element = document.querySelector(url);
            if (element) {
                const navHeight = 96; // 12vh converted to pixels (approximately)
                const elementPosition = element.offsetTop - navHeight;
                
                window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <div className={`${navBg ? 'bg-blue-950 shadow-md' : 'fixed'} transition-all duration-200 h-[12vh] z-[1000] fixed w-full`}>
            <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
                {/* logo */}
                <button 
                    onClick={() => scrollToSection('#home')}
                    className="flex items-center space-x-2 cursor-pointer"
                >
                    <div className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center flex-col">
                        <TbAirBalloon className='w-6 h-6 text-white'/>
                    </div>
                    <h1 className="text-xl md:text-2xl text-white uppercase font-bold">Tripy</h1>
                </button>

                {/* Nav links */}
                <div className="hidden lg:flex items-center space-x-10">
                    {navLinks.map((link) => {
                        return (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.url)}
                                className='relative text-white text-base font-medium w-fit block after:block after:content-[""]
                                after:absolute after:h-[3px] after:bg-yellow-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition duration-300 after:origin-center
                                hover:text-yellow-300 transition-colors duration-200 cursor-pointer'
                            >
                                {link.label}
                            </button>
                        );
                    })}
                </div>

                {/* buttons */}
                <div className="flex items-center space-x-4">
                    <button 
                        onClick={() => scrollToSection('#contact')}
                        className="md:px-12 md:py-2.5 px-8 py-2 text-black text-base bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg cursor-pointer"
                    >
                        Book Now
                    </button>
                    {/* burger menu */}
                    <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-white lg:hidden'/>
                </div>
            </div>
        </div>
    )
}

export default Nav