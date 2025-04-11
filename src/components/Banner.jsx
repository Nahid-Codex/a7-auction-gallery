import React from 'react';
import bannerImg from '../assets/Banner-min.jpg';

const Banner = () => {
    return (
        <div
            className="relative h-[90vh] bg-cover bg-center px-2 sm:px-10 lg:px-20 xl:px-30"
            style={{
                backgroundImage: `url(${bannerImg})`
            }}
        >
            {/* Text Content */}
            <div className="max-w-6xl font-sora mx-auto h-full flex items-center ">
                <div className="text-white max-w-full sm:max-w-xl">
                    <h1 className="text-2xl sm:text-3xl md:text-[40px] font-semibold  leading-snug sm:leading-normal">
                        Bid on Unique Items from <br className="hidden md:block" /> Around the World
                    </h1>
                    <p className="text-sm sm:text-base md:text-[22px] font-light mb-6 leading-relaxed sm:leading-normal">
                        Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
                    </p>
                    <button className="bg-white text-[#010000] font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full cursor-pointer text-sm sm:text-base">
                        Explore Auctions
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
