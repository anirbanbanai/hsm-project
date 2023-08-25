'use client'
import Link from 'next/link';
import React from 'react';
import { AiOutlineMessage, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsFillPeopleFill } from 'react-icons/bs';
import { MdOutlineFeed } from 'react-icons/md';
import log from "./../../../public/images.jpeg"
import Image from 'next/image';
const ButtomBar = () => {
    return (
        <section className='fixed bottom-0 z-10 w-full rounded-t-3xl bg-glassmorphism  backdrop-blur-lg xs:px-7 sm:hidden bg-slate-200 p-4'>
            <div className='flex items-center justify-between gap-3 xs:gap-5'>
                <Image src={log} alt='logo' width={35}></Image>
         
            <div className='flex justify-between w-full  gap-6 px-6'>
               <Link href="/feed">
               <h2 className='text-2xl flex items-center gap-2'><MdOutlineFeed />  </h2>
               </Link>
                <Link href="/message">
                <h2 className='text-2xl flex items-center gap-2'><AiOutlineMessage />  </h2>
                </Link>

                <Link href="/member" >
                <h2 className='text-2xl flex items-center gap-2'><BsFillPeopleFill />  </h2>
                </Link>
               <Link href="/shop">
               <h2 className='text-2xl flex items-center gap-2'><AiOutlineShoppingCart />  </h2>
               </Link>


            </div>
            </div>
        </section>
    );
};

export default ButtomBar;