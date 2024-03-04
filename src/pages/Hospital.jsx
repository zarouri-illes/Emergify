import React from 'react'
import { IoIosWarning } from "react-icons/io";
import { FaCheckCircle, FaHome } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Hospital = () => {
    return (
        <div>
           <aside class="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l">
    <div className='flex gap-4 items-center'>
    <a href="#">
        <img class="w-[90px]" src="/logo.png" alt="" />
    </a>

    <div class="flex flex-col text-left">
        <h4 class="mx-2 mt-2 font-medium text-gray-800 ">John Doe</h4>
        <p class="mx-2 mt-1 text-sm font-medium text-gray-600 ">Police</p>
    </div>
    </div>

    <div class="flex flex-col justify-between flex-1 mt-6">
        <nav>

            


            <Link class="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg " to="/police">
                <FaBell className='text-xl' />


                <span class="mx-4 font-medium">Notifications</span>
            </Link>

            <Link class="flex items-center px-4 py-2 mt-5 text-main transition-colors duration-300 transform rounded-lg  hover:bg-gray-100 " to="/">
                <FaHome className='text-xl' />

                <span class="mx-4 font-medium">Home</span>
            </Link>


            <br /><br /><br /><br /><br /> <br /> <br /> <br /> <br /> <br /> <hr />

            <Link class="flex items-center px-4 py-2 mt-5 text-main transition-colors duration-300 transform rounded-lg  hover:bg-gray-100 " to="/police/settings">
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

            <main className='fixed top-[55px] left-[300px] right-[100px] space-y-4'>
            <h1 className='text-main font-bold text-2xl'>Notifications</h1>
            <div className='gap-4'>
                <button className='px-6 py-2 bg-gray-200 rounded-[5px]'>Pending</button>
                <button className='px-6 py-2  rounded-[5px]'>Done</button>
            </div>

            <div className='divide-main'>
    

                <hr className='border-main' />
                <div className='flex items-center justify-between w-full bg-red-200 py-2 px-6'>
                    <div className='flex gap-4 items-center '>
                        <div className=' h-full'>
                            <IoIosWarning className='text-3xl text-red-900 ' />
                        </div>
                        <div className='border-l-2 border-red-400 pl-6'>
                            <p>Emergency</p> <br />
                            <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, consequatur maiores perferendis dolorum esse quod atque sunt at eligendi doloribus.</p>
                        </div>

                        
                    </div>
                    <div>
                        <p>21:38 PM</p>
                    </div>
                </div>
            </div>
            
            </main>

        </div>
    )
}

export default Hospital