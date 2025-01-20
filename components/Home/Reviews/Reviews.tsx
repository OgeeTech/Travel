import React from 'react';
import { FaStar } from 'react-icons/fa';
import ReviewSlider from './ReviewSlider';

const Reviews = () => {
    return (
        <div className="pt-20 pb-20 flex items-center justify-center flex-col bg-[#13357b]">
            <div className="w-[90%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-10">
                {/* Text Content */}
                <div>
                    <h1 className="text-3xl font-semibold text-white">
                        What our customers are saying about us?
                    </h1>
                    <p className="mt-6 text-gray-200">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam ut earum consectetur sint
                        tempore aperiam id ex sapiente cupiditate facere, placeat natus unde nostrum laborum
                        voluptatem atque corrupti adipisci labore!
                    </p>
                    {/* Ratings */}
                    <div className="mt-6 flex items-center space-x-6">
                        <div>
                            <p className="text-4xl font-bold text-white">4.78</p>
                            <p className="text-white mb-2">Overall Rating</p>
                            <div className="flex items-center">
                                <FaStar className="text-white" />
                                <FaStar className="text-white" />
                                <FaStar className="text-white" />
                                <FaStar className="text-white" />
                                <FaStar className="text-white" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Slider Section */}
                <div className="overflow-hidden">
                    <ReviewSlider />
                </div>
            </div>
        </div>
    );
};

export default Reviews;
