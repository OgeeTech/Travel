'use client';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { reviewData } from '@/data/data';
import { FaStar } from 'react-icons/fa';

const ReviewSlider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="md:w-[500px] md:h-[400px] w-[90%] h-[350px] testimonial-swiper"
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
      >
        {reviewData.map((data) => {
          return (
            <SwiperSlide key={data.id} className="bg-white rounded-3xl block p-6">
              <div className="w-[90%] mx-auto mt-8">
                {/* review text */}
                <p className="text-sm sm:text-base md:text-lg font-medium text-gray-700 leading-relaxed mb-6">
                  "{data.review}"
                </p>
                <div className="flex items-center mb-6">
                  <FaStar className="md:w-5 md:h-5 w-4 h-4 text-yellow-500" />
                  <FaStar className="md:w-5 md:h-5 w-4 h-4 text-yellow-500" />
                  <FaStar className="md:w-5 md:h-5 w-4 h-4 text-yellow-500" />
                  <FaStar className="md:w-5 md:h-5 w-4 h-4 text-yellow-500" />
                  <FaStar className="md:w-5 md:h-5 w-4 h-4 text-yellow-500" />
                </div>
                {/* users profile */}
                <div className="flex items-center space-x-4">
                  <Image
                    src={data.image}
                    width={60}
                    height={60}
                    alt="client"
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="text-base sm:text-lg font-semibold text-gray-900">
                      {data.name}
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Travel Enthusiast
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      
      <style jsx global>{`
        .testimonial-swiper .swiper-pagination-bullet {
          background: #ffffff;
          opacity: 0.5;
        }
        .testimonial-swiper .swiper-pagination-bullet-active {
          background: #ffffff;
          opacity: 1;
        }
        .testimonial-swiper .swiper-button-next,
        .testimonial-swiper .swiper-button-prev {
          color: #ffffff;
        }
        .testimonial-swiper .swiper-button-next:after,
        .testimonial-swiper .swiper-button-prev:after {
          font-size: 20px;
        }
      `}</style>
    </div>
  );
}

export default ReviewSlider;