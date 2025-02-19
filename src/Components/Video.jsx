import React from "react";

const Video = () => {
    return (
        <section className="h-screen w-full flex justify-center items-center overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute w-full h-full object-cover"
            ><source src="/videos/bg-video1.mp4" type="video/mp4" /></video>
        </section>
    )
}

export default Video;