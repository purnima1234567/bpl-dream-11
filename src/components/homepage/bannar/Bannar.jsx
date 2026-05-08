import React from 'react';

const Banner = () => {
    return (
        <div className="bg-base-200">

            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-16 px-4">

                {/* Left side text */}
                <div className="flex-1 space-y-5 text-center md:text-left">

                    <h1 className="text-4xl md:text-5xl font-bold">
                        Build Your Dream Cricket Team 🏏
                    </h1>

                    <p className="text-gray-600 text-lg">
                        Select top players, manage your coins and create your winning squad.
                    </p>

                    <button className="btn bg-[#E7FE29] border-none text-black">
                        Explore Now
                    </button>

                </div>

                {/* Right side image */}
                <div className="flex-1 flex justify-center mt-10 md:mt-0">

                    <img
                        src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
                        alt="banner"
                        className="w-[280px] md:w-[420px]"
                    
                    />

                </div>

            </div>

        </div>
    );
};

export default Banner;