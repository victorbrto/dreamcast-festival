import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((open) => !open);
    }

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" })
        };
    };

    return (
        <header className="fixed top-0 left-0 w-full bg-eerieblack text-white p-4 md:p-5 z-50">
            <div className="container mx-auto flex justify-between items-center px-6 md:px-12 lg:px-32">
                <div className="flex items-center space-x-4">
                    <Link to="/">
                        <img src="/dreamcast-logo1.svg" alt="Dreamcast" className="h-10 w-auto" />
                    </Link>
                    <div className="border-l-2 border-white pl-4 text-xs sm:text-sm leading-tight hidden sm:block">
                        <p className="font-semibold">23 e 24 de abril - 2026</p>
                        <p className="font-medium">Antiga Fábrica São Brás, Salvador</p>
                    </div>
                </div>

                {/*Desktop Menu*/}
                <nav className="hidden lg:flex">
                    <ul className="flex space-x-6 uppercase font-extrabold">
                        <li>
                            <button onClick={() => scrollToSection("info")} className="uppercase hover:text-royalpurple transition-all">Informações</button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection("newsletter")} className="uppercase hover:text-royalpurple transition-all">Newsletter</button>
                        </li>
                        <li><Link to="https://www.sympla.com.br/" target="_blank" className="bg-mossgreen text-white py-2 px-4">Compre aqui</Link></li>
                    </ul>
                </nav>

                {/*Mobile Menu Button*/}
                <button
                    onClick={toggleMenu}
                    className="lg:hidden text-white font-semibold"
                    aria-label="Abrir menu"
                ><FontAwesomeIcon icon={faBars} size="2x" /></button>
            </div>

            {/*Mobile Menu*/}
            {isOpen && (
                <div className="lg:hidden bg-eerieblack text-white uppercase font-extrabold absolute top-full left-0 w-full flex flex-col items-center py-4 space-y-4">
                    <button onClick={() => scrollToSection("info")} className="uppercase hover:text-royalpurple transition-all">Informações</button>
                    <button onClick={() => scrollToSection("newsletter")} className="uppercase hover:text-royalpurple transition-all">Newsletter</button>
                    <Link to="https://www.sympla.com.br/" target="_blank" className="bg-mossgreen text-white py-2 px-4">Compre aqui</Link>
                </div>
            )}
        </header>
    );
};

export default Header;