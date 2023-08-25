"use client"
import React from 'react';
import { MdOutlineFeed } from "react-icons/md"
import { AiOutlineMessage, AiOutlineShoppingCart,AiFillBank } from "react-icons/ai"
import { BsFillPeopleFill } from "react-icons/bs"
import Link from 'next/link';
import Image from 'next/image';
import log from "./../../../public/images.jpeg"

const LeftSideBar = () => {

    return (
        <section className='text-black  gap-4 rounded-lg p-4 bg-slate-50 z-20 flex h-screen flex-col justify-between pb-5  max-sm:hidden'>
            <h1 className='flex items-center text-2xl font-bold top-0 gap-2'> 
            <Image src={log} alt='' width={54} >

            </Image>
           
             1 social club</h1>
            <div className='flex w-full flex-1 flex-col gap-6 px-6'>
               <Link href="/feed">
               <h2 className='text-2xl flex items-center gap-2'><MdOutlineFeed />  Feed</h2>
               </Link>
                <Link href="/message">
                <h2 className='text-2xl flex items-center gap-2'><AiOutlineMessage />  Message</h2>
                </Link>

                <Link href="/member" >
                <h2 className='text-2xl flex items-center gap-2'><BsFillPeopleFill />  Member</h2>
                </Link>
               <Link href="/shop">
               <h2 className='text-2xl flex items-center gap-2'><AiOutlineShoppingCart />  Shop</h2>
               </Link>


            </div>
        </section>
    );
};

export default LeftSideBar;