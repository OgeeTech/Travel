import SearchBox from '@/components/Helper/SearchBox'
import React from 'react'

const Hero = () => {
    return (
        <div className='relative w-full h-[120vh] sm:h-[100vh]'>
            {/* overlay */}
            <div className='absolute top-0 left-0 w-full h-full bg-gray-800 opacity-70'></div>

            {/* video */}
            <video src='images/hero.mp4' autoPlay loop muted preload='metadata' className='object-cover w-full h-full' />
      
            {/* text content */}
            <div className='absolute z-[100] w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center text-white'>
                <div className='flex items-center justify-center flex-col w-full h-full'>
                    <div>
                        <h1 className='text-white font-bold uppercase text-[25px] mb-4 md:mb-0 text-center md:text-[35px] lg:text-[45px] tracking-[0.7rem]'>Travel Beyond Limits</h1>
                        <p className='md:text-base text-center text-lg text-white font-normal [word-spacing:5px]'>Tripy helps you get 100,000+ properties worldwide</p>
                    </div>
                    {/* search box */}
                 <SearchBox/>
                </div>
            </div>
        </div>
    )
}

export default Hero
