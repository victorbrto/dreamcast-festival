import React from "react";

const LineUp = () => {
    return (
        <section
            className="bg-cover h-screen flex justify-center items-center"
            style={{ backgroundImage: "url('/images/bg1.png')" }}
        >
            <div className="max-w-7xl mx-auto text-center space-y-6 sm:space-y-3 px-8 sm:px-0">
                {/*title*/}
                <h1 className="font-probold text-gray-100 text-4xl sm:text-6xl" style={{ textShadow: '0 0 6px rgba(255, 255, 255, 0.5)' }}>
                    dreamcast festival <span className="font-pronormal">lineup completa</span>
                </h1>

                {/*lineup grid*/}
                <div className="font-pronormal text-xl sm:text-2xl text-gray-300 grid grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left justify-center mx-auto"
                    style={{ textShadow: '0 0 6px rgba(255, 255, 255, 0.3)' }}>
                    <ul className="-space-y-1">
                        <li>Arp Tucson</li>
                        <li>Alexandre Nový</li>
                        <li>Edison Rei</li>
                    </ul>
                    <ul className="-space-y-1">
                        <li>DJ Amarok</li>
                        <li>Pétala Rosa</li>
                        <li>Tito Apiari</li>
                    </ul>
                    <ul className="-space-y-1">
                        <li>Língua Farpada</li>
                        <li>palio SIG</li>
                        <li>Unidos em Chamas</li>
                    </ul>
                    <ul className="-space-y-1">
                        <li>KMG</li>
                        <li>trisz</li>
                        <li>Verônica Eletrônica</li>
                    </ul>
                </div>

                {/*dates*/}
                <p className="font-pronormal mt-10 text-3xl text-gray-200"
                    style={{ textShadow: '0 0 6px rgba(255, 255, 255, 0.3)' }}>novidades em breve...</p>
            </div>
        </section>
    )
}

export default LineUp;