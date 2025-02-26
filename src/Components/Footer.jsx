import React from "react";

const Footer = () => {
    return (
        <footer className="bg-black text-white px-6 py-10 md:px-20">
            <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start justify-center gap-x-64">

                {/*Contact*/}
                <div className="w-full md:w-1/5 mb-8 md:mb-0">
                    <h3 className="text-sm font-semibold mb-3">Redes Sociais</h3>
                    <ul className="space-y-2">
                        <li><a href="https://www.instagram.com/p/CoVLSvztCIn/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank" rel="noopener noreferrer" className="font-normal text-sm hover:text-gray-400">Instagram</a></li>
                        <li><a href="https://www.youtube.com/watch?v=NHydngA5C4E" target="_blank" rel="noopener noreferrer" className="font-normal text-sm hover:text-gray-400">TikTok</a></li>
                        <li><a href="https://www.youtube.com/watch?v=80vKMh_iFJM" target="_blank" rel="noopener noreferrer" className="font-normal text-sm hover:text-gray-400">YouTube</a></li>
                        <li><a href="https://en.wikipedia.org/wiki/Dreamcast" target="_blank" rel="noopener noreferrer" className="font-normal text-sm hover:text-gray-400">X</a></li>
                        <li><a href="https://www.youtube.com/watch?v=ldgwAAwj9zs" target="_blank" rel="noopener noreferrer" className="font-normal text-sm hover:text-gray-400">Tumblr</a></li>
                        <li className="text-sm">SoundCloud</li>
                    </ul>
                </div>
                {/*Newsletter*/}
                <div id="newsletter" className="w-full md:w-1/5">
                    <p className="text-sm font-medium mb-3">Inscreva-se para receber todas as novidades do Dreamcast Festival em primeira mão!</p>
                    <form>
                        <input type="email" placeholder="E-mail*" className="w-full px-1 py-0.5 text-gray-950 rounded-sm mb-3 focus:outline-none" />
                        <button type="submit" className="bg-gray-200 text-black text-sm px-1 py-0.5 rounded-sm hover:bg-gray-400 transition-all">Enviar</button>
                    </form>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-12 flex items-center text-xs text-gray-500 max-w-md md:text-right">
                © 2025 Dreamcast Festival. Todos os direitos reservados.
            </div>
        </footer>
    )
}

export default Footer;