import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const Infos = () => {

    const [showText, setShowText] = useState(false);

    return (
        <div className="absolute top-0 left-0 w-full h-full flex justify-center">
            {/*Botão para obter mais informações*/}
            <AnimatePresence>
                {!showText && (
                    <motion.button onClick={() => setShowText(true)} className="relative"
                    >
                        <motion.p className="font-probold text-gray-50 text-5xl sm:text-6xl px-10 sm:px-32">um mundo completamente novo, ainda em construção</motion.p>
                    </motion.button>
                )}
            </AnimatePresence>

            {/*Painel de infos*/}
            <AnimatePresence>
                {showText && (
                    <motion.div className="text-justify text-white flex flex-col justify-center space-y-2 h-screen p-6 md:p-72"
                        initial={{ opacity: 0, filter: "blur(9px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, filter: "blur(10px)" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-xl font-semibold">Sobre o Dreamcast Festival</h2>
                        <p className="font-normal md:text-base">Boas vindas ao Dreamcast Festival! Inspirado pela euforia dos clássicos do Trance, o festival nasce para conectar música, arte e tecnologia em um ambiente onde os limites entre realidade e imaginação se dissolvem.</p>
                        <p className="font-normal md:text-base">Prepare-se para uma jornada sonora cinemática, com batidas energizantes, visuais exuberantes e uma atmosfera inigualável. O futuro da música eletrônica brasileira está aqui.</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Infos;