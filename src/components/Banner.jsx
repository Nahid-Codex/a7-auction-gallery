import React from 'react';
import bannerImg from '../assets//Banner-min.jpg';

const Banner = () => {
    return (
        <div
            className="relative h-[90vh] bg-cover bg-center px-30"
            style={{
                backgroundImage: `url(${bannerImg})`
            }}
        >

            {/* Text Content */}
            <div className="max-w-6xl font-sora mx-auto h-full flex items-center px-4">
                <div className="text-white max-w-xl ">
                    <h1 className="text-3xl md:text-[44px] font-semibold  mb-4">
                        Bid on Unique Items from <br className="hidden md:block" /> Around the World
                    </h1>
                    <p className="text-base md:text-[22px] font-light mb-6">
                        Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions
                    </p>
                    <button className="bg-white text-[#010000] font-bold px-8 py-4 rounded-full cursor-pointer">
                        Explore Auctions
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
