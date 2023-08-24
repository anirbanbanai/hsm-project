"use client"
import React from 'react';
import { MdOutlineFeed } from "react-icons/md"
import { AiOutlineMessage, AiOutlineShoppingCart,AiFillBank } from "react-icons/ai"
import { BsFillPeopleFill } from "react-icons/bs"


const LeftSideBar = () => {

    return (
        <section className='text-black  gap-4 rounded-lg p-4 bg-slate-100 z-20 flex h-screen flex-col justify-between pb-5  '>
            <h1 className='flex items-center text-2xl font-bold top-0 gap-2'> <AiFillBank/> 1 social club</h1>
            <div className='flex w-full flex-1 flex-col gap-6 px-6'>
                <h2 className='text-2xl flex items-center gap-2'><MdOutlineFeed />  Feed</h2>
                <h2 className='text-2xl flex items-center gap-2'><AiOutlineMessage />  Message</h2>
                <h2 className='text-2xl flex items-center gap-2'><BsFillPeopleFill />  Member</h2>
                <h2 className='text-2xl flex items-center gap-2'><AiOutlineShoppingCart />  Shop</h2>


            </div>
        </section>
    );
};

export default LeftSideBar;