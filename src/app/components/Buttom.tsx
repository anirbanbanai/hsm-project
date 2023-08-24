'use client'
import React from 'react';

const ButtomBar = () => {
    return (
        <section className='fixed bottom-0 z-10 w-full rounded-t-3xl bg-glassmorphism  backdrop-blur-lg xs:px-7 md:hidden bg-slate-500'>
            <div className='flex items-center justify-between gap-3 xs:gap-5'>
                
           <button className='btn btn-warning'>All</button>
            </div>
        </section>
    );
};

export default ButtomBar;