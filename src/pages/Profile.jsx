import React from 'react'
import {Sidebar} from 'flowbite-react'
import {HiChartPie, HiViewBoards, HiInbox, HiUser, HiShoppingBag, HiTable} from 'react-icons/hi'
import {CiSettings} from 'react-icons/ci'
import { UserAuth } from "../context/AuthContext"

export const Profile = () => {
    const {user} = UserAuth()
    
    return (
        <div className='w-full h-screen bg-blue-400 md:grid md:grid-cols-2'>
            <div className="w-fit">
                <Sidebar aria-label="Sidebar with logo branding example">
                    <Sidebar.Logo
                    href="#"
                    img="favicon.png"
                    imgAlt="Flowbite logo"
                    >
                    Flowbite
                    </Sidebar.Logo>
                    <Sidebar.Items>
                    <Sidebar.ItemGroup className='space-y-12'>
                        <Sidebar.Item
                        href="#"
                        icon={HiChartPie}
                        >
                        Dashboard
                        </Sidebar.Item>
                        <Sidebar.Item
                        href="#"
                        icon={HiViewBoards}
                        >
                        Notice
                        </Sidebar.Item>
                        <Sidebar.Item
                        href="#"
                        icon={HiInbox}
                        >
                        Inbox
                        </Sidebar.Item>
                        <Sidebar.Item
                        href="#"
                        icon={HiUser}
                        >
                        Users
                        </Sidebar.Item>
                        <Sidebar.Item
                        href="#"
                        icon={HiShoppingBag}
                        >
                        Payments
                        </Sidebar.Item>
                        <Sidebar.Item
                        href="#"
                        icon={CiSettings}
                        >
                        Settings
                        </Sidebar.Item>
                        <Sidebar.Item
                        href="#"
                        icon={HiTable}
                        >
                        Sign Out
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                    </Sidebar.Items>
                </Sidebar>
            </div>
            <></>
            <div className='w-full h-full pt-16 mx-auto'>
                <h1 className='text-7xl font-bold '>Welcome {user.displayName}</h1>
            </div>

            
            
        </div>
    )
}

