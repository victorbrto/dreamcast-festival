import React from "react";
import Infos from "./Infos";

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
            <div id="info" className="relative w-full h-full">
                <img src="/images/blurred-logo1.png" alt="Logo blur" className="w-full h-full" />
                <Infos />
            </div>
        </section>
    )
}

export default Video;