import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-eerieblack text-white p-5">
            <div className="container mx-auto flex justify-between items-center space-x-4 px-32">
                <h1 className="text-2xl font-bold font-heading">
                    <Link to="/">
                        dreamcast</Link>
                </h1>
                <nav>
                    <ul className="flex space-x-6 uppercase font-extrabold">
                        <li><Link to="/about" className="hover:text-royalpurple">Informações</Link></li>
                        <li><Link to="/#form-news" className="hover:text-royalpurple">Newsletter</Link></li>
                        <li><Link to="/tickets" className="bg-mossgreen text-white py-2 px-4">Compre aqui</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;