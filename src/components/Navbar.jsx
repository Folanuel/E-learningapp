import React, {useState} from "react";
import { Link } from "react-router-dom";
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa'
import { UserAuth } from "../context/AuthContext"
import { Avatar } from "flowbite-react"

export const Navbar = () => {
    // const [nav, setNav] = useState(false)
    const {user, logOut} = UserAuth();

    const handleSignOut = async () => {
        try {
            await logOut()

        } catch (error) {
            console.log(error)
        } 
    }

    // const handleClick = () => {
    // setNav(!nav)
    // }

    return (
        <div className="bg-[#005b96] drop-shadow-xl shadow-gray-800 w-full h-[50px] flex justify-between items-center px-4">
        
        <ul className="flex flex-row space-x-6 md:space-x-32 font-semibold">
            <li>
            <Link className="text-white  hover:text-red-400" to="/">
                Home
            </Link>
            </li>
            <li>
            <Link className="text-white  hover:text-red-400" to="/about">
                About
            </Link>
            </li>
            <li>
            <Link className="text-white  hover:text-red-400" to="/">
                Courses
            </Link>
            </li>
            {user ? <button onClick={handleSignOut} className="text-white  hover:text-blue-400">Logout</button> : <><li>
            <Link className="text-white  hover:text-blue-400" to="/login">
                Login
            </Link>
            </li>
            <li>
            <Link className="text-white  hover:text-blue-400" to="/signup">
                Signup
            </Link>
            </li>
            </>}
        </ul> 
        
        <Avatar
                className={!user && "hidden"}
                img={user?.photoURL}
                rounded={true}
            />
            

        {/* Hamburger */}
        {/* <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
        </div>



            <ul className={ !nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#005b96] text-white flex flex-col justify-center items-center'}>   
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="/home" smooth={true} duration={500}>
            Home
            </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="/about" smooth={true} duration={500}>
            About
            </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to="/courses" smooth={true} duration={500}>
            Courses
            </Link>
            </li>
            {user ? <button onClick={handleSignOut} className="text-white  hover:text-blue-400 py-6 text-4xl">Logout</button> : <><li>
            <Link className="text-white  hover:text-blue-400 py-6 text-4xl" to="/login">
                Login
            </Link>
            </li>
            <li>
            <Link className="text-white  hover:text-blue-400 py-6 text-4xl" to="/signup">
                Signup
            </Link>
            </li>
            </>}
        </ul> */}






        </div>
    );
};