import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagramSquare } from "react-icons/fa";

export const Header = () => {
    return (
        <div className="flex w-full h-[60px] justify-between bg-blue-300">
        <h1 className="text-5xl"> E-learning </h1>
        <ul className="flex space-x-8 order-last">
            <li>
            <Link className="text-blue-600" to="/">
                <FaFacebook size="30px" />
            </Link>
            </li>
            <li>
            <Link className="text-blue-400" to="/">
                <FaTwitter size="30px" />
            </Link>
            </li>
            <li>
            <Link className="text-[#ef426f]" to="/">
                <FaInstagramSquare size="30px" />
            </Link>
            </li>
        </ul>
        </div>
    );
};