import React, { useState } from "react";

const DropdownMenu = () => {
    const [isOpen, setIsClosed] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="flex flex-col">
            <ul className="flex flex-col space-x-2">
                <li>FAQ</li>
                <li>Line-Up</li>
                <li>Como Chegar</li>
            </ul>
        </div>
    );
};

export default DropdownMenu;