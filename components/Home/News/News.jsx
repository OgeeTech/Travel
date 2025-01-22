import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import NewsCard from './NewsCard'
import Image from 'next/image'

const News = () => {
  return (
    <div className="pt-16 pb-16">
      <SectionHeading heading="Exciting Travel News For You" />
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg-grid-cols-3 xl:grid-cols-4 gap-10 items-center mt-20">
        <div data-aos="fade-left" data-aos-placement="top-center">
          <NewsCard
            image="/images/n1.jpg"
            title="Top 10 places to visit in Austraila"
            date="15 November 2025"
          />
        </div>
        <div
          data-aos="fade-left"
          data-aos-placement="top-center"
          data-aos-delay="100"
        >
          <NewsCard
            image="/images/n2.jpg"
            title="Top 10 places to visit in Bangladash"
            date="25 November 2025"
          />
        </div>
        <div
        
        data-aos="fade-left"
          data-aos-placement="top-center"
          data-aos-delay="200">
          <NewsCard
            image="/images/n3.jpg"
            title="Top 10 places to visit in Pakistan"
            date="22 November 2025"
          />
        </div>
        <div
        data-aos="fade-left"
          data-aos-placement="top-center"
          data-aos-delay="300">
          <NewsCard
            image="/images/n4.jpg"
            title="Top 10 palces to visit in New zeeland"
            date="15 November 2025"
          />
        </div>
      </div>
    </div>
  );
}

export default News
