import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useState } from 'react'
import Footer from './Footer';
import { AiOutlineHome } from 'react-icons/ai'
import { MdOutlineInbox } from 'react-icons/md'
import { BiShoppingBag } from 'react-icons/bi'
import { FiSettings } from 'react-icons/fi'
import { RiLogoutBoxLine } from 'react-icons/ri'

const side_links = [
    {
        path: "/",
        display: "Home",
        icon: AiOutlineHome
    },

    {
        path: "about",
        display: "Inbox",
        icon: MdOutlineInbox
    },
    {
        path: "about",
        display: "Loja",
        icon: BiShoppingBag
    },
    {
        path: "about",
        display: "Configurações",
        icon: FiSettings
    },
    {
        path: "about",
        display: "Sair",
        icon: RiLogoutBoxLine
    },

]

function LeftSide() {
    const [open, setOpen] = useState(false);
    function handleSignOut() {
        signOut()
    }
    return (
        <div className="absolute pt-14">
            <div
                className={` ${open ? "w-20" : "w-55 "
                    } flex flex-col h-screen p-3  shadow duration-300`}
            >
                <div className="space-y-3">
                    <div className='flex flex-col justify-between '>
                        <div className="flex items-center justify-between">
                            <h1 className="text-xl font-bold text-black">
                                FateCanos
                            </h1>
                            {/* <button onClick={() => setOpen(!open)}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-black"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </button> */}
                        </div>
                        <div className="relative mt-5 ">
                            <span className="absolute inset-y-0 left-0 flex items-center py-4">
                                <button
                                    type="submit"
                                    className="p-2 focus:outline-none focus:ring"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </button>
                            </span>
                            <input
                                type="search"
                                name="Search"
                                placeholder="Pesquisar"
                                className="w-full shadow-sm py-2 pl-10 text-sm shadow-slate-300 rounded-full px-2 focus:outline-none"
                            />
                        </div>
                        <div className="flex-1">
                            <ul className="pt-2 pb-4 space-y-1 text-sm">
                                {
                                    side_links.map((item, index) => (
                                        <ul key={index}>
                                            <Link href={item.path}>
                                                <li className='cursor-pointer transition-all hover:rounded-full  hover:bg-slate-50 hover:shadow-slate-300 p-2 mx-3 my-2 rounded-sm flex items-center gap-3'>
                                                    <item.icon className='text-2xl' />
                                                    {item.display}
                                                </li>
                                            </Link>
                                        </ul>
                                    ))
                                }
                                {/* <li className="rounded-sm">
                                    <a
                                        href="#"
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-gray-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                            />
                                        </svg>
                                        <span className="text-gray-400">Home</span>
                                    </a>
                                </li>
                                <li className="rounded-sm">
                                    <a
                                        href="#"
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-gray-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                                            />
                                        </svg>
                                        <span className="text-gray-400">Inbox</span>
                                    </a>
                                </li>
                                <li className="rounded-sm">
                                    <a
                                        href="#"
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-gray-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                            />
                                        </svg>
                                        <span className="text-gray-400">
                                            Orders
                                        </span>
                                    </a>
                                </li>
                                <li className="rounded-sm">
                                    <a
                                        href="#"
                                        className="flex items-center p-2 space-x-3 rounded-md"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 text-gray-400"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                        <span className="text-gray-400">
                                            Settings
                                        </span>
                                    </a>
                                </li>*/}
                                {/* <li className="mx-3 my-5  rounded-sm flex items-center gap-3">
                                    
                                        <RiLogoutBoxLine className='text-2xl'/>
                                        <span onClick={handleSignOut} className="">
                                            Logout
                                        </span>
                                    
                                </li>  */}
                            </ul>
                        </div>
                        <div className=''>
                            <Footer /></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSide
