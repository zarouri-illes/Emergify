import React from 'react'
import { IoIosWarning } from "react-icons/io";
import { FaCheckCircle, FaHome, FaPlus } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { MdDashboardCustomize } from "react-icons/md";
import { useState } from 'react';

const Settings = () => {
    return (
        <div>
            <aside class="flex flex-col w-64 fixed px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l">
    <div className='flex gap-4 items-center'>
    <a href="#">
        <img class="w-[90px]" src="/logo.png" alt="" />
    </a>

    <div class="flex flex-col text-left">
        <h4 class="mx-2 mt-2 font-medium text-gray-800 ">John Doe</h4>
        <p class="mx-2 mt-1 text-sm font-medium text-gray-600 ">Ambulance</p>
    </div>
    </div>

    <div class="flex flex-col justify-between flex-1 mt-6">
        <nav>
            <Link class="flex items-center px-4 py-2 text-gray-700  rounded-lg " to="/police">
                <MdDashboardCustomize className='text-xl' />


                <span class="mx-4 font-medium">Dashboard</span>
            </Link>

            <Link class="flex items-center px-4 py-2 mt-5  text-main transition-colors duration-300 transform rounded-lg  hover:bg-gray-100 " to="/">
                <FaHome className='text-xl' />

                <span class="mx-4 font-medium">Home</span>
            </Link>


            <br /><br /><br /><br /><br /> <br /> <br /> <br /> <br /> <br /> <hr />

            <Link class="flex bg-gray-100 items-center px-4 py-2 mt-5 text-main transition-colors duration-300 transform rounded-lg  hover:bg-gray-100 " to="#">
                <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <span class="mx-4 font-medium">Settings</span>
            </Link>

            <Link class="flex items-center px-4 py-2 mt-5 text-red-400 transition-colors duration-300 transform rounded-lg " to="#">
                <CiLogout className='text-xl' />


                <span class="mx-4 font-medium">Log out</span>
            </Link>
                </nav>
            </div>
            </aside>

            <main className='absolute top-[55px] left-[300px] right-[400px] space-y-4'>
                <h1 className='text-main font-bold text-2xl'>Settings</h1>
                
                <div>
                <form action="" className='mt-10'>
                        
                        
                        <div className='flex items-center mt-4 gap-4 '>
                            <div className=''>
                            <label className='text-main font-semibold'>Old Password</label>
                            <input type="password" name="" id="" className='w-full rounded-[10px] py-2 px-4 relative border-solid border-[1px] border-main' />
                            </div>

                            <div>
                            <label className='text-main font-semibold'>New Password</label>
                            <input type="password" name="" id="" className='w-full rounded-[10px] py-2 px-4 relative border-solid border-[1px] border-main' />
                            </div>
                        
                        </div>
                        <input type="submit" value="Reset" className='py-2 px-8 cursor-pointer transition-all duration-300 hover:opacity-60 bg-main mt-8 text-white rounded-[5px]'/> 
                    </form>
                    <br /> <br /> <br />
                    <label className='text-main font-semibold'>Language</label> <br /> <br />
                    <select className='h-[40px] w-[100px] px-3 border-solid border-[1px] border-main'>
                        <option selected disabled hidden  >Select</option>
                        <option value="french">French</option>
                        <option value="arabic">Arabic</option>
                        <option value="english">English</option>
                    </select>
                    <br /><br /> <br /> <br />
                    <hr />
                    <br /> <br />
                    <button className='rounded-[5px] transition-all duration-300 hover:text-white hover:bg-red-500 px-8 py-2 bg-white text-red-500 border-[2px] border-solid border-red-500'>Delete Account</button>
                </div>
            </main>
        </div>
    )
}

export default Settings