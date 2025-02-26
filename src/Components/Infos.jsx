import React, { useState } from "react";

const Infos = () => {

    const [showText, setShowText] = useState(false);

    return (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center">
            {/*Botão para obter mais informações*/}
            {!showText && (
                <button onClick={() => setShowText(true)} className="relative">
                    <img src="/images/whole-new-world.png" alt="Clique para mais informações" className="w-auto lg:w-30" />
                </button>
            )}

            {/*Painel de infos*/}
            {showText && (
                <div className="text-justify text-white flex flex-col justify-center space-y-2 h-screen p-6 md:p-72">
                    <h2 className="text-xl font-semibold">Sobre o Dreamcast Festival</h2>
                    <p className="font-normal md:text-base">Boas vindas ao Dreamcast Festival! Inspirado pela euforia dos clássicos do Trance, o festival nasce para conectar música, arte e tecnologia em um ambiente onde os limites entre realidade e imaginação se dissolvem.</p>
                    <p className="font-normal md:text-base">Prepare-se para uma jornada sonora cinemática, com batidas energizantes, visuais exuberantes e uma atmosfera inigualável. O futuro da música eletrônica brasileira está aqui.</p>
                </div>
            )}
        </div>
    )
}

export default Infos;