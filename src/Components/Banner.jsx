import React from "react";

const Banner = () => {
    return (
        <div className="relative w-full h-24 bg-black flex justify-center items-center">
            <p className="font-probold text-gray-100 uppercase text-3xl sm:text-6xl tracking-wide flex justify-center items-center stroke-2"
                style={{ textShadow: '0 0 6px rgba(255, 255, 255, 0.2)' }} >trance is god's music</p>
        </div>
    )
}

export default Banner;