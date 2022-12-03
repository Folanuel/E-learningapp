import React, {useState} from 'react'
import { NavLink, Link } from "react-router-dom";
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa'
import { UserAuth } from "../context/AuthContext"
import { Navbar, Dropdown, Avatar, Button } from "flowbite-react"

export const Navbar2 = () => {
    const {user, logOut} = UserAuth();    

    const handleSignOut = async () => {
        try {
            await logOut()

        } catch (error) {
            console.log(error)
        } 
    }
    let activeStyle = {
        borderBottom: "solid 2px blue"
    };

    let activeStyles = {
        color: "blue"
    }


    
    return (
        <div>
            <Navbar
                fluid={true}
                rounded={true}
                className="drop-shadow-xl bg-white text-black shadow-gray-800 fixed top-0 w-full rounded-l-none rounded-r-none"
                >
                <Navbar.Brand href="#">
                    <img
                    src="https://cdn.pixabay.com/photo/2015/01/08/18/25/desk-593327_960_720.jpg"
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    E-Learning
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Dropdown
                    arrowIcon={false}
                    inline={true}
                    label={<Avatar className={!user && "hidden"}
                    img={user?.photoURL}
                    rounded={true}/>}
                    >
                    <Dropdown.Header>
                        <span className="block text-sm">
                        {user && <h1>Welcome {user.displayName}</h1>}
                        </span>
                        <span className="block truncate text-sm font-medium">
                        {user?.email}
                        </span>
                    </Dropdown.Header>
                    <Dropdown.Item>
                        <NavLink  className="hover:text-blue-400" to="/profile"
                        style={({ isActive }) => isActive ? activeStyles : undefined}>
                        Profile
                        </NavLink>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <NavLink  className="hover:text-blue-400" to="/"
                        style={({ isActive }) => isActive ? activeStyles : undefined}>
                        Home
                        </NavLink>
                    </Dropdown.Item>
                    <Dropdown.Item>
                        <NavLink  className="hover:text-blue-400" to="/payments"
                        style={({ isActive }) => isActive ? activeStyles : undefined}>
                        Payments
                        </NavLink>
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                        <button onClick={handleSignOut} className="text-black hover:text-blue-400">Sign out</button>
                    </Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link >
                    <NavLink  className="hover:text-blue-400" to="/"
                    style={({ isActive }) => isActive ? activeStyle : undefined}>
                    Home
                    </NavLink>
                    </Navbar.Link>
                    <Navbar.Link>
                    <NavLink  className="hover:text-blue-400"  to="/about" 
                    style={({ isActive }) => isActive ? activeStyle : undefined}>
                    About
                    </NavLink>
                    </Navbar.Link>
                    <Navbar.Link>
                    <NavLink className="hover:text-blue-400" to="/payments"
                    style={({ isActive }) => isActive ? activeStyle : undefined}>
                    Pricing
                    </NavLink>
                    </Navbar.Link>
                    <Navbar.Link>
                    <NavLink className="hover:text-blue-400" to="/profile"
                    style={({ isActive }) => isActive ? activeStyle : undefined}>
                    Profile
                    </NavLink>
                    </Navbar.Link>
                    <Navbar.Link >
                    <NavLink className="hover:text-blue-400" to="/contact"
                    style={({ isActive }) => isActive ? activeStyle : undefined}>
                    Contact
                    </NavLink>
                    </Navbar.Link>
                    {!user && <><Navbar.Link>
                    <NavLink  className="hover:text-blue-400"  to="/login" 
                    style={({ isActive }) => isActive ? activeStyle : undefined}>
                    Login
                    </NavLink>
                    </Navbar.Link>
                    <Navbar.Link>
                    <NavLink  className="hover:text-blue-400"  to="/signup" 
                    style={({ isActive }) => isActive ? activeStyle : undefined}>
                    <Button pill={true} gradientDuoTone="purpleToBlue" size="xs">
                    Signup                    
                    </Button>
                    </NavLink>
                    </Navbar.Link></>}
                    
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

