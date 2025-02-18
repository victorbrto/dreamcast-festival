import React from "react";

const LineUp = () => {
    return (
        <section
            className="bg-cover h-screen flex justify-center items-center"
            style={{ backgroundImage: "url('/images/bg1.png')" }}
        >
            <img src="/images/lineup.png" alt="LineUp" className="hidden md:block max-w-full h-auto" />
            <img src="/images/mobile-lineup.png" alt="Mobile LineUp" className="block md:hidden max-w-full h-auto" />
        </section>
    )
}

export default LineUp;